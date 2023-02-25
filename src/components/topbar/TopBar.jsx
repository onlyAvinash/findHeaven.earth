import {Link} from "react-router-dom";
import "./topbar.css";

export default function TopBar() {
  const user=false;
  return (
    <div className='top'>
      <div className="topLeft"><i class="fa-sharp fa-solid fa-blog"></i></div>
      <div className="topCenter">
        <ul className="topList">
            <li className="topListItem">
            <Link className="link" to="/" >Home</Link></li>
            <li className="topListItem">  <Link className="link" to="/sidebar" >About</Link></li>
          
            <li className="topListItem">  <Link className="link" to="/write" >Share</Link></li>
            <li className="topListItem">  <Link className="link" to="/" >Contact</Link></li>

            <li className="topListItem">  <Link className="link" to="/settings" >Settings</Link></li>

            <li className="topListItem">  <Link className="link" to="/" >{user&&"Logout"}</Link></li>

        </ul>
      </div>
      <div className="topRight">
    
      <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>

    </div>
  )
}
