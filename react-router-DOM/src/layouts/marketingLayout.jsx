import { Outlet,Link } from "react-router";
import About from "../pages/About";

const MarketingLayout = () => {
    return(
        <div>
            <h1>Marketing Layout</h1>
            <nav>
                <Link to={"/"} > Home </Link>
                | <Link to={"/about"} > About </Link>
                | <Link to={"/auth/login"} > Login </Link>
                | <Link to={"/auth/register"} > Register </Link>
                | <Link to={"/dashboard"} > Dashboard </Link>
            </nav>
                <hr />
                <Outlet />
        </div>
    )
}
export default MarketingLayout;