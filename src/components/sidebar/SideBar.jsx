import "./sidebar.css"

export default function SideBar() {
  return (
    <>
      <div className="sidebar">
        <div className="sidebarItem">
          <span className="sidebarTitle">About me</span>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos totam ipsam nesciunt placeat incidunt soluta.s</p>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">Categories</span>
          <ul className="sidebarListItem">Farms</ul>
          <ul className="sidebarListItem">Pools</ul>
          <ul className="sidebarListItem">Country Side</ul>
          <ul className="sidebarListItem">Islands</ul>
          <ul className="sidebarListItem">Parks</ul>
          <ul className="sidebarListItem">Beaches</ul>
        </div>
      
      <div className="sidebarItem">
        <span className="sidebarTitle">Follow us</span>
        <div className="sidebarSocial">
          <i class="sidebarIcon fa-brands fa-twitter"></i>
          <i class="sidebarIcon fa-brands fa-instagram"></i>
          <i class="sidebarIcon fa-brands fa-facebook"></i>
        </div>
      </div>
      </div>
    </>
  )
}
