import "./register.css"

export default function Register() {
  return (
    <div className="register">
        <span className="registerTitle">register</span>
    <form className="registerForm">
    <label >Username</label>
        <input type="text" className="registerInput" placeholder="Enter the username" />
        <label >Email</label>
        <input type="text" className="registerInput" placeholder="enter your email" />
        <label >Password</label>
        <input type="password" className="registerInput" placeholder="enter your password" />
        <button className="registerButton">register</button>
    </form>
    <button className="registerLoginButton">Login</button>  
    </div>
  )
}
