import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img  className="singlePostImg" src="./image/postim.jpg" alt="noo" />
        <h1 className="singlePostTitle">Lorem ipsum dolor sit amet cons sunt?
        <div className="singlePostEdit">
        <i class="singlePostIcon fa-solid fa-trash-can"></i>
        <i class="singlePostIcon fa-solid fa-pen-to-square"></i>
        </div></h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor"><i>renz</i></span>
          <span className="singlePostDate"><i>1 hour ago</i></span>

        </div>
        <p className="singlePostDesc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis culpa eligendi, ut neque expedita repudiandae ab porro magnam modi, quae exercitationem illo asperiores est a enim deserunt amet dignissimos unde rem! Illum, blanditiis numquam. Dignissimos esse sequi optio reiciendis reprehenderit deserunt. Consequatur aspernatur impedit repellendus esse. Voluptatibus possimus sequi culpa exercitationem. Distinctio, voluptatem. Ipsum ratione voluptatum enim in distinctio optio itaque explicabo. Quas inventore nemo corrupti laboriosam, unde aliquid?</p>
      </div>
    </div>
  )
}
