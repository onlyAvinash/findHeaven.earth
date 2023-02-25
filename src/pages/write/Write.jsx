import "./write.css"

export default function Write() {
  return (
    <div className="write">
        <img className="writeImg" src="./image/orangetaj.jpg" alt="noo" />
        <form className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                <i className=" writeIcon fa-regular fa-plus"></i>
                </label>
            <input type="file" id="fileInput" style={{display:"none"}}/>
            <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
            </div>
            <div className="writeFormGroup">
                <textarea placeholder="Tell your story..." type="text" className="writeInput writeText"></textarea>
            </div>
            <button className="writeSubmit">Submit</button>
        </form>
    </div>
  )
}
