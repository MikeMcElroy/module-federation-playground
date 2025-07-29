import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";

// Lazy load microfrontends
const WorldApp = React.lazy(() => import("world/App"));
const SolarSystemApp = React.lazy(() => import("solarSystem/App"));
const UniverseApp = React.lazy(() => import("universe/App"));

const LoadingSpinner: React.FC = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '200px',
    fontSize: '18px',
    color: '#333'
  }}>
    Loading...
  </div>
);

const NavigationBar: React.FC = () => (
  <nav style={{
    background: 'rgba(255, 255, 255, 0.1)',
    padding: '1rem',
    marginBottom: '2rem',
    backdropFilter: 'blur(10px)',
    borderRadius: '10px',
    margin: '1rem'
  }}>
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      gap: '2rem',
      alignItems: 'center'
    }}>
      <h1 style={{ color: 'white', margin: 0, fontSize: '24px' }}>
        🚀 Microfrontend Demo
      </h1>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Link 
          to="/world" 
          style={{
            color: 'white',
            textDecoration: 'none',
            padding: '0.5rem 1rem',
            borderRadius: '5px',
            background: 'rgba(255, 255, 255, 0.2)',
            transition: 'all 0.3s ease'
          }}
        >
          🌍 World
        </Link>
        <Link 
          to="/solar-system" 
          style={{
            color: 'white',
            textDecoration: 'none',
            padding: '0.5rem 1rem',
            borderRadius: '5px',
            background: 'rgba(255, 255, 255, 0.2)',
            transition: 'all 0.3s ease'
          }}
        >
          🪐 Solar System
        </Link>
        <Link 
          to="/universe" 
          style={{
            color: 'white',
            textDecoration: 'none',
            padding: '0.5rem 1rem',
            borderRadius: '5px',
            background: 'rgba(255, 255, 255, 0.2)',
            transition: 'all 0.3s ease'
          }}
        >
          🌌 Universe
        </Link>
      </div>
    </div>
  </nav>
);

const Home: React.FC = () => (
  <div style={{
    textAlign: 'center',
    color: 'white',
    padding: '2rem',
    maxWidth: '600px',
    margin: '0 auto'
  }}>
    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
      Welcome to the Microfrontend Universe! 🌟
    </h2>
    <p style={{ fontSize: '1.2rem', lineHeight: '1.6', opacity: 0.9 }}>
      This demo showcases three independent microfrontends working together in harmony.
      Each microfrontend is built and deployed separately, then dynamically loaded into this host application.
    </p>
    <p style={{ fontSize: '1rem', marginTop: '2rem', opacity: 0.8 }}>
      Navigate using the links above to explore each microfrontend! 🚀
    </p>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <div style={{ minHeight: '100vh' }}>
        <NavigationBar />
        <div style={{ padding: '0 1rem' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/world" element={
              <Suspense fallback={<LoadingSpinner />}>
                <WorldApp />
              </Suspense>
            } />
            <Route path="/solar-system" element={
              <Suspense fallback={<LoadingSpinner />}>
                <SolarSystemApp />
              </Suspense>
            } />
            <Route path="/universe" element={
              <Suspense fallback={<LoadingSpinner />}>
                <UniverseApp />
              </Suspense>
            } />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;