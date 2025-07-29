# Microfrontend Demo with Webpack Module Federation 🚀

A comprehensive demonstration of microfrontend architecture using Webpack's Module Federation. This project showcases three independent React applications federated into a single host application.

## 🏗️ Architecture

```
┌─────────────────┐
│   Host App      │  Port 3000
│   (Router)      │
└─────────────────┘
         │
    ┌────┴────┬────────┬─────────┐
    │         │        │         │
┌───▼──┐ ┌───▼──┐ ┌───▼──┐ ┌───▼──┐
│World │ │Solar │ │Universe│ │ ... │
│3001  │ │3002  │ │3003    │ │     │
└──────┘ └──────┘ └────────┘ └─────┘
```

## 📦 What's Included

- **Host Application** (Port 3000): Main application with routing and federation
- **World Microfrontend** (Port 3001): "Hello World" page
- **Solar System Microfrontend** (Port 3002): "Hello Solar System" page  
- **Universe Microfrontend** (Port 3003): "Hello Universe" page

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation & Development

1. **Install dependencies for all packages:**
   ```bash
   npm run install:all
   ```

2. **Start all applications concurrently:**
   ```bash
   npm start
   ```

   This will start:
   - Host app at http://localhost:3000
   - World microfrontend at http://localhost:3001
   - Solar System microfrontend at http://localhost:3002
   - Universe microfrontend at http://localhost:3003

3. **Visit the application:**
   Open http://localhost:3000 in your browser

### Individual Commands

Start individual applications:
```bash
npm run start:host       # Host app only
npm run start:world      # World microfrontend only
npm run start:solar      # Solar System microfrontend only
npm run start:universe   # Universe microfrontend only
```

Build for production:
```bash
npm run build           # Build all applications
npm run build:host      # Build host app only
npm run build:world     # Build World microfrontend only
npm run build:solar     # Build Solar System microfrontend only
npm run build:universe  # Build Universe microfrontend only
```

## 🎯 Key Features

- **Module Federation**: Each microfrontend is independently buildable and deployable
- **Shared Dependencies**: React and React-DOM are shared between applications
- **Dynamic Loading**: Microfrontends are loaded on-demand with Suspense
- **Development Mode**: All applications can run simultaneously for development
- **Routing**: Clean routing between different microfrontends
- **Beautiful UI**: Modern, responsive design with gradient backgrounds

## 📁 Project Structure

```
microfrontend-demo/
├── package.json                    # Root package with workspace config
├── packages/
│   ├── host/                      # Main host application
│   │   ├── src/
│   │   │   ├── App.jsx           # Main app with routing
│   │   │   └── index.js          # Entry point
│   │   ├── public/index.html     # HTML template
│   │   ├── webpack.config.js     # Webpack + Module Federation
│   │   └── package.json
│   ├── world/                     # World microfrontend
│   │   ├── src/
│   │   │   ├── App.jsx           # Hello World component
│   │   │   └── index.js
│   │   ├── webpack.config.js     # Exposes ./App
│   │   └── package.json
│   ├── solar-system/              # Solar System microfrontend
│   │   ├── src/
│   │   │   ├── App.jsx           # Hello Solar System component
│   │   │   └── index.js
│   │   ├── webpack.config.js     # Exposes ./App
│   │   └── package.json
│   └── universe/                  # Universe microfrontend
│       ├── src/
│       │   ├── App.jsx           # Hello Universe component
│       │   └── index.js
│       ├── webpack.config.js     # Exposes ./App
│       └── package.json
```

## 🔧 How Module Federation Works

Each microfrontend:
1. **Exposes** its main App component via Module Federation
2. **Runs independently** on its own port
3. **Shares** React dependencies to avoid duplication
4. **Can be developed and deployed** separately

The host application:
1. **Consumes** remote microfrontends
2. **Provides routing** between different pages
3. **Lazy loads** microfrontends on demand
4. **Handles shared state** and navigation

## 🌟 Next Steps

- Add shared components library
- Implement shared state management
- Add authentication across microfrontends
- Set up CI/CD pipelines for independent deployments
- Add error boundaries and fallbacks
- Implement micro-frontend communication

## 📚 Learn More

- [Webpack Module Federation](https://webpack.js.org/concepts/module-federation/)
- [Microfrontends.info](https://microfrontends.info/)
- [React Suspense](https://reactjs.org/docs/concurrent-mode-suspense.html)

## 🤝 Contributing

Feel free to experiment with this setup! Try adding new microfrontends, shared components, or different frameworks.