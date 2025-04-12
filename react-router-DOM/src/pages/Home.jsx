const Home = () => {
   return(
    <div style={{ textAlign: 'center', padding: '50px', fontFamily: 'Arial, sans-serif' }}>
        <h1 style={{ fontSize: '3rem', color: '#4CAF50' }}>Welcome to the Home Page</h1>
        <p style={{ fontSize: '1.2rem', color: '#555' }}>
            This is a beautiful home page created with React and styled inline.
        </p>
        <button
            style={{
                padding: '10px 20px',
                fontSize: '1rem',
                color: '#fff',
                backgroundColor: '#4CAF50',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                marginTop: '20px',
            }}
            onClick={() => alert('Welcome!')}
        >
            Click Me
        </button>
    </div>
   )
  };
  
  export default Home;
  