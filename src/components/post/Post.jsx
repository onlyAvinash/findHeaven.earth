
import "./post.css"
export default function Post() {
  return (
    <div className="post">
      <img className="postImg" src="./image/indiagate.jpeg" alt="nope" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Explore</span>
          <span className="postCat">World</span>

        </div>
        <span className="postTitle">India gate</span>
        <hr />
        <span className="postDate">1 March</span>
        <p className="postDesc">10,000/-</p>
      </div>
      
    </div>
  )
}

