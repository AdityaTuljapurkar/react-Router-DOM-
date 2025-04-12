import { Outlet, Link } from 'react-router-dom';

// import { Outlet, Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard Layout</h1>
            <nav>
                <Link to="">Home</Link> | 
                <Link to="settings">Settings</Link>|
                <Link to="demo">Demo</Link>
            </nav>
            <hr />
            <Outlet />
        </div>
    );
};

export default Dashboard;
  