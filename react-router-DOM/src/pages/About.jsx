const About = ()=>{
    return(
        <div style={{textAlign:'center', marginTop:'20px'}}>
            <h1>About Page</h1>
            <p>This is the about page of our application.</p>
            <p>Here you can find information about our app and its features.</p>
            <button 
                style={{
                    backgroundColor: '#6200ea',
                    color: '#ffffff',
                    border: 'none',
                    padding: '10px 20px',
                    borderRadius: '5px',
                    cursor: 'pointer'
                }}
                onClick={()=>alert('More info coming soon!')}
            >
                Learn More
            </button>
        </div>
    )
}
export default About;


