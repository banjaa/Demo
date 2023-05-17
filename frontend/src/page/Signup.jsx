import "./Loginsignup.css"
import { Link } from "react-router-dom";

export const SignUp = () => {
    return <div className="SignupBackground" style={{width:"100vw",height:'100vh', display:"flex",justifyContent:'center',alignItems:"center"}}>
      <div className="full1">
        <div className="title1">Sign up</div>
        <div className="title2">Fill in your details below and Sign up</div>
        <div className="fullinput">
          <div className="holder">Username</div>
          <input className="inpat" type="text" placeholder="Sumber" />
        </div>
        <div className="fullinput">
          <div className="holder">Email</div>
          <input className="inpat" type="text" placeholder="Sumber@gmail.com" />
        </div>
        <div className="fullinput">
          <div className="holder">Password</div>
          <input className="inpat" type="text" placeholder="Sumber1234" />
        </div>
        <input className="button" type="button" value={"Create account"} />
        <div style={{display:"flex",justifyContent:'center',alignItems:"center",flexDirection:'row'}}>
          <div className="bottom" style={{color:"#829AB1"}}>Already Have An Account?</div>
          <div className="bottom" style={{marginLeft:'1vh',fontWeight:700,cursor:"pointer"}}> <Link style={{color:"black",textDecorationLine:'none'}} to={'/Signup'}>Signin Now</Link> </div>
        </div>
        <div style={{width:"87%"}}>
          <Link to={"/"}>
            <button className="backButton">
            <h2>Go back to home</h2>
          </button>
          </Link>
        </div>
      </div>
      </div>
  };