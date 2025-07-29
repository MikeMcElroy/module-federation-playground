import React from "react";

const App: React.FC = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '400px',
      background: 'linear-gradient(135deg, #2c1810 0%, #8b4513 50%, #000000 100%)',
      borderRadius: '15px',
      margin: '2rem',
      padding: '2rem',
      boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
      color: 'white',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Starfield background effect */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.3) 1px, transparent 1px), radial-gradient(circle at 80% 40%, rgba(255,255,255,0.2) 1px, transparent 1px), radial-gradient(circle at 60% 80%, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '100px 100px, 150px 150px, 200px 200px',
        opacity: 0.6
      }}></div>
      
      <div style={{
        fontSize: '4rem',
        marginBottom: '1rem',
        position: 'relative',
        zIndex: 1
      }}>
        🌌
      </div>
      <h1 style={{
        fontSize: '3rem',
        margin: '0 0 1rem 0',
        fontWeight: 'bold',
        textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
        position: 'relative',
        zIndex: 1
      }}>
        Hello Universe
      </h1>
      <p style={{
        fontSize: '1.2rem',
        margin: 0,
        opacity: 0.9,
        maxWidth: '400px',
        lineHeight: '1.5',
        position: 'relative',
        zIndex: 1
      }}>
        Welcome to the Universe microfrontend! This cosmic React application 
        explores the vast expanse of space and time, running on port 3003.
      </p>
      <div style={{
        marginTop: '2rem',
        display: 'flex',
        gap: '1rem',
        fontSize: '2rem',
        position: 'relative',
        zIndex: 1
      }}>
        🌌 🌟 🌠 🪐 🌙 ☄️ 🛸
      </div>
      <div style={{
        marginTop: '2rem',
        padding: '1rem',
        background: 'rgba(255,255,255,0.1)',
        borderRadius: '10px',
        fontSize: '0.9rem',
        border: '1px solid rgba(255,255,255,0.2)',
        position: 'relative',
        zIndex: 1
      }}>
        🚀 Powered by Webpack Module Federation
      </div>
    </div>
  );
};

export default App;