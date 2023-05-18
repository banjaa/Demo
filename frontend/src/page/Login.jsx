import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export const Login = () => {

  const navigate = useNavigate();

  const checkUser = () => {
    const user_info = localStorage.getItem("user_information");
    // if (user_info) navigate("/");
  };

  useEffect(() => {
    checkUser();
  }, []);

  const [wrongm, setWrongm] = useState(false);
  const [tokenn, setTokenn] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passValue, setPasswordValue] = useState("");
  const [token, setToken] = useState()

  const dataRetriever = async () => {
    const res = await axios({
      url: `https://fk-three.vercel.app/login`,
      method: "POST",
      data: {
        email: emailValue,
        password: passValue,
      },
      // headers: {
      //   authorization: `Bearer ${tokenn}`,
      // },
    }).then((response) => {
      if (
        response?.data == " Please enter your password! " ||
        response?.data == " Please enter your email! " ||
        response?.data == "Invalid password" ||
        response?.data == "You don't have any user account, please sign up"
      ) {
        setWrongm(true);
      } else {
        localStorage.setItem("user_information", JSON.stringify(response.data));
        localStorage.setItem("seeing_profile", JSON.stringify(response.data));
        // sessionStorage.setItem("use_information", JSON.stringify(response.data));
        // sessionStorage.setItem("use_information", JSON.stringify(response.data));
        setTokenn(response?.data);
        const myHeaders = new Headers();
        navigate("/")
        // myHeaders.append("authorization", user);
      }
    });
  }

    return <div className="SignupBackground" style={{width:"100vw",height:'100vh', display:"flex",justifyContent:'center',alignItems:"center"}}>
      <div className="full2">
        <div className="title1">Sign in</div>
        <div className="title2">Fill in your details below and Sign in</div>
        {wrongm ? (
          <div
            className="flex mt-8 p-4 mb-4 text-red-700 bg-red-100 rounded-lg dark:bg-gray-800 dark:text-red-400"
            role="alert">
            <div style={{color:"red"}} class="ml-3 text-sm font-medium">WRONG EMAIL OR PASSWORD</div>
          </div>
        ) : null}
        <div className="fullinput">
          <div className="holder">Email</div>
          <input onChange={(e) => setEmailValue(e.target.value)} className="inpat" type="text" placeholder="Sumber@gmail.com" />
        </div>
        <div className="fullinput">
          <div className="holder">Password</div>
          <input onChange={(e) => setPasswordValue(e.target.value)} className="inpat" type="text" placeholder="Sumber1234" />
        </div>
        <input onClick={dataRetriever} className="button" type="button" value={"Sign in"} />
        <div style={{display:"flex",justifyContent:'center',alignItems:"center",flexDirection:'row'}}>
          <div className="bottom" style={{color:"#829AB1"}}>Don't Have An Account?</div>
          <div className="bottom" style={{marginLeft:'1vh',fontWeight:700,cursor:"pointer"}}> <Link style={{color:"black",textDecorationLine:'none'}} to={'/Signup'}>Signup Now</Link> </div>
        </div>
        <Link style={{marginRight:"5%"}} to={"/"}>
            <input className="button" type="button" value={"Back to home"}/>
        </Link>
      </div>
    </div>
  };