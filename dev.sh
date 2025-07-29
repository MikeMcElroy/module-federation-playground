#!/bin/bash

# Microfrontend Development Helper Script
# This script helps with common development tasks

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Helper function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Function to check if Node.js is installed
check_node() {
    if ! command -v node &> /dev/null; then
        print_error "Node.js is not installed. Please install Node.js 16+ and try again."
        exit 1
    fi
    
    NODE_VERSION=$(node --version | cut -d'v' -f2 | cut -d'.' -f1)
    if [ "$NODE_VERSION" -lt 16 ]; then
        print_error "Node.js version 16+ is required. Current version: $(node --version)"
        exit 1
    fi
    
    print_success "Node.js $(node --version) detected"
}

# Function to install dependencies
install_deps() {
    print_status "Installing dependencies for all packages..."
    
    # Install root dependencies
    npm install
    
    # Install dependencies for each package
    cd packages/host && npm install && cd ../..
    cd packages/world && npm install && cd ../..
    cd packages/solar-system && npm install && cd ../..
    cd packages/universe && npm install && cd ../..
    
    print_success "All dependencies installed successfully!"
}

# Function to start development servers
start_dev() {
    print_status "Starting all microfrontend applications..."
    print_warning "This will start 4 applications on ports 3000-3003"
    print_warning "Press Ctrl+C to stop all applications"
    
    npm start
}

# Function to show help
show_help() {
    echo "Microfrontend Development Helper"
    echo ""
    echo "Usage: ./dev.sh [command]"
    echo ""
    echo "Commands:"
    echo "  setup    - Install all dependencies"
    echo "  start    - Start all development servers"
    echo "  check    - Check system requirements"
    echo "  help     - Show this help message"
    echo ""
    echo "Quick start:"
    echo "  ./dev.sh setup && ./dev.sh start"
    echo ""
    echo "Individual applications:"
    echo "  npm run start:host       - Host app (port 3000)"
    echo "  npm run start:world      - World microfrontend (port 3001)"
    echo "  npm run start:solar      - Solar System microfrontend (port 3002)"
    echo "  npm run start:universe   - Universe microfrontend (port 3003)"
}

# Main script logic
case "${1:-help}" in
    "setup")
        check_node
        install_deps
        print_success "Setup complete! Run './dev.sh start' to begin development."
        ;;
    "start")
        check_node
        if [ ! -d "node_modules" ]; then
            print_warning "Dependencies not found. Running setup first..."
            install_deps
        fi
        start_dev
        ;;
    "check")
        check_node
        print_status "Checking if dependencies are installed..."
        if [ -d "node_modules" ] && [ -d "packages/host/node_modules" ]; then
            print_success "All dependencies are installed"
        else
            print_warning "Some dependencies are missing. Run './dev.sh setup' to install them."
        fi
        ;;
    "help"|*)
        show_help
        ;;
esac