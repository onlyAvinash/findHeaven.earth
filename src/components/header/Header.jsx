import "./header.css"

export default function Header() {
  return (
    <div>
      <div className="header">
        <div className="headerTitles">
            <span className="headerTitleSm">Roam around the world</span>
            <span className="headerTitleLg">India</span>
        </div>
        <img className="headerImg" src="./image/water.jpg" alt="nooo" />
      </div>
    </div>
  )
}
