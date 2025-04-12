const Register = () =>{
    return(
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
            <h1 style={{ color: 'black', fontFamily: 'Arial, sans-serif' }}>Register</h1>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '300px' }}>
                <label style={{ display: 'flex', flexDirection: 'column', fontSize: '14px', color: '#555' }}>
                    Username:
                    <input type="text" name="username" style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
                </label>
                <label style={{ display: 'flex', flexDirection: 'column', fontSize: '14px', color: '#555' }}>
                    Password:
                    <input type="password" name="password" style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
                </label>
                <button type="submit" style={{ padding: '10px', borderRadius: '4px', backgroundColor: '#007BFF', color: '#fff', border: 'none', cursor: 'pointer' }}>
                    Register
                </button>
            </form>
        </div>
    );
}
export default Register;
