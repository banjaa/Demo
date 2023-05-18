import "./Loginsignup.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export const SignUp = () => {

  const navigate = useNavigate();

  const checkUser = () => {
    const user = localStorage.getItem("user_information");
    if (user) navigate("/");
  };

  useEffect(() => {
    checkUser();
  }, []);
  const [wrongm, setWrongm] = useState(false);
  const [usernameValue, setUsernameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passValue, setPasswordValue] = useState("");
  const [passValue2, setPasswordValue2] = useState("");

  const dataRetriever = async (e) => {

    if (passValue == passValue2) {
      const res = await axios({
        url: `https://fk-three.vercel.app/user`,
        method: "POST",
        data: {
          username: usernameValue,
          email: emailValue,
          password: passValue,
        }
      }).then((response) => {
        localStorage.setItem("user_information", response);
        sessionStorage.setItem("use_information", JSON.stringify(response));
        navigate("/")
      });
  };
}

    return <div className="SignupBackground" style={{width:"100vw",height:'100vh', display:"flex",justifyContent:'center',alignItems:"center"}}>
      <div className="full1">
        <div className="title1">Sign up</div>
        <div className="fullinput">
          <div className="holder">Username</div>
          <input onChange={(e) => setUsernameValue(e.target.value)} className="inpat" type="text" placeholder="Sumber" />
        </div>
        <div className="fullinput">
          <div className="holder">Email</div>
          <input onChange={(e) => setEmailValue(e.target.value)} className="inpat" type="text" placeholder="Sumber@gmail.com" />
        </div>
        <div className="fullinput">
          <div onChange={(e) => setPasswordValue(e.target.value)} className="holder">Password</div>
          <input type="password" className="inpat" placeholder="Sumber1234" />
        </div>
        <div className="fullinput">
          <div onChange={(e) => setPasswordValue2(e.target.value)} className="holder">Verify password</div>
          <input className="inpat" type="password" placeholder="Sumber1234" />
        </div>
      
        <button onClick={dataRetriever} className="button" type="button">Create account</button>
        <div style={{display:"flex",justifyContent:'center',alignItems:"center",flexDirection:'row'}}>
          <div className="bottom" style={{color:"#829AB1"}}>Already Have An Account?</div>
          <div className="bottom" style={{marginLeft:'1vh',fontWeight:700,cursor:"pointer"}}> 
          <Link style={{color:"black",textDecorationLine:'none'}} to={'/login'}>Login Now</Link> 
          </div>
        </div>
        <Link style={{marginRight:"5%"}} to={"/"}>
            <input className="button" type="button" value={"Back to home"}/>
        </Link>
      </div>
      </div>
  };