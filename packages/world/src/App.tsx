const App = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '400px',
      background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
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
        🌍
      </div>
      <h1 style={{
        fontSize: '3rem',
        margin: '0 0 1rem 0',
        fontWeight: 'bold',
        textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
      }}>
        Hello World
      </h1>
      <p style={{
        fontSize: '1.2rem',
        margin: 0,
        opacity: 0.9,
        maxWidth: '400px',
        lineHeight: '1.5'
      }}>
        Welcome to the World microfrontend! This is an independent React application 
        running on port 3001 and federated into the host application.
      </p>
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
