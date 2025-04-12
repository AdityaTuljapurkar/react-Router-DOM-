const Settings = () => {
    const settingsStyle = {
        backgroundColor: '#121212',
        color: '#ffffff',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
        padding: '20px',
        height: '100vh',
    };

    const headingStyle = {
        fontSize: '2rem',
        textShadow: '0 0 5px #bb86fc, 0 0 10px #bb86fc',
    };

    const itemStyle = {
        margin: '10px 0',
        fontSize: '1.2rem',
        textShadow: '0 0 3px #bb86fc',
    };

    return (
        <div style={settingsStyle}>
            <h1 style={headingStyle}>Settings</h1>
            <p style={itemStyle}>Option 1: Enable Dark Mode</p>
            <p style={itemStyle}>Option 2: Adjust Brightness</p>
            <p style={itemStyle}>Option 3: Reset to Default</p>
        </div>
    );
};
  
  export default Settings;
  