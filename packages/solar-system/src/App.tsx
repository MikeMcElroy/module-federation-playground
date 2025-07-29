import React from "react";

const App: React.FC = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '400px',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      borderRadius: '15px',
      margin: '2rem',
      padding: '2rem',
      boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
      color: 'white',
      textAlign: 'center'
    }}>
      <div style={{
        fontSize: '4rem',
        marginBottom: '1rem'
      }}>
        🪐
      </div>
      <h1 style={{
        fontSize: '3rem',
        margin: '0 0 1rem 0',
        fontWeight: 'bold',
        textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
      }}>
        Hello Solar System
      </h1>
      <p style={{
        fontSize: '1.2rem',
        margin: 0,
        opacity: 0.9,
        maxWidth: '400px',
        lineHeight: '1.5'
      }}>
        Welcome to the Solar System microfrontend! This independent React application 
        explores our cosmic neighborhood, running on port 3002.
      </p>
      <div style={{
        marginTop: '2rem',
        display: 'flex',
        gap: '1rem',
        fontSize: '2rem'
      }}>
        ☀️ 🌍 🪐 🌕 ⭐
      </div>
      <div style={{
        marginTop: '2rem',
        padding: '1rem',
        background: 'rgba(255,255,255,0.2)',
        borderRadius: '10px',
        fontSize: '0.9rem'
      }}>
        🚀 Powered by Webpack Module Federation
      </div>
    </div>
  );
};

export default App;