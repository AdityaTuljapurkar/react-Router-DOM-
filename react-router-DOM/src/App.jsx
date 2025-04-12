import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import AuthLayout from "./layouts/AuthLayout";
import Demo from "./pages/demo";
import MarketingLayout from "./layouts/marketingLayout";
const App = () => {
  try {
    return (
      <Router>
        <Routes>
          {/* This type of nesting add seegment to to URl */}
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<Home />} />
            <Route path="settings" element={<Settings />} />
            <Route path="demo" element={<Demo />} />
          </Route>
          {/* This type of nesting doesnot add seegment to to URl */}
          <Route element={<MarketingLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="auth" element={<AuthLayout />}>
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
            </Route>
          </Route>
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </Router>
    );
  } catch (err) {
    console.error("App Render Error:", err);
    return <h1>Something broke in the App</h1>;
  }
};

export default App;
