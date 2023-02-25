import TopBar from "./components/topbar/TopBar";
import Register from "./pages/register/Register";
import Write from "./pages/write/Write";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import SideBar from "./components/sidebar/SideBar";


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";

function App() {
  const user=true;
  return (
    <Router> 
    <TopBar />
        <Routes>
          <Route exact path="/" element={<Home/>}  />
          <Route path="/register" element={user?<Home/>:<Register/>} />
          <Route path="/login" element={user?<Home/>:<Login/>} />
          <Route path="/write" element={user?<Write/>:<Register/>} />
          <Route path="/Settings" element={user?<Settings/>:<Register/>} />
          <Route path="/post/:postId" element={<Single/>} />
          <Route path="/sidebar" element={user?<SideBar/>:<Register/>} />
          <Route path="/post" element={user?<Write/>:<Register/>} />


        </Routes>
    </Router>
  );
}

export default App;
