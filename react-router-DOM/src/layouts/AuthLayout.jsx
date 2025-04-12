import { Outlet } from "react-router";


const AuthLayout  = ()=>{
    return (
        <div style={{ padding: "20px", backgroundColor: "#11444d", color: "#fff", height: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <h1>Auth Layout</h1>
            <Outlet />
        </div>
    )
}
export default AuthLayout;
