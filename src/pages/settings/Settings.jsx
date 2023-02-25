import "./settings.css"
import SideBar from "../../components/sidebar/SideBar"
export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
            <span className="settingsUpdateTitle">update your account</span>
            <span className="settingsDeleteTitle">delete your account</span>

        </div>
        <form className="settingsForm"><label>profile picture</label>
        <div className="settingsPP">
            <img src="./image/human.avif" alt="noo" />
            <label htmlFor="fileInput">
            <i class="settingsPPIcon fa-regular fa-user"></i>
            </label>
            <input type="file" id="fileInput" style={{display:"none"}} />
            </div>
            <label>Username</label>
            <input type="text" placeholder="asha" />
            <label>Email</label>
            <input type="email" placeholder="asha@gmail.com" />
            <label>Password</label>
            <input type="password" placeholder="enter password" />
            <button className="settingsSubmit">Update</button>
            </form>
      </div>
      <SideBar/>
    </div>
  )
}
