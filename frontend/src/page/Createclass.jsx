import "./Loginsignup.css"
import  axios from "axios"
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const CreateClass = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem("user_information");
  const user_info = JSON.parse(user)
  const [ classname, setClassname ] = useState()
  const [ password, setPassword ] = useState()

  const Change1 = (event) => {
    setClassname(event.target.value);
  };
  const Change2= (event) => {
    setPassword(event.target.value);
  };
  const Createclass = async () => {
    const admin = user_info._id;
      axios.post(`https://fk-three.vercel.app/class/${admin}`,{
      classname : classname,
      password: password
    }).then (() => {
      navigate("/")
    })
  }
    return <div className="Back" style={{width:"100vw",height:'100vh', display:"flex",justifyContent:'center',alignItems:"center"}}>
        <div className="full2">
            <div style={{margin:"5%"}} className="title1">Create class</div>
        <div className="fullinput">
          <div className="holder">Class name</div>
          <input className="inpat" type="text" onChange={Change1} placeholder="Enter your class name" />
        </div>
        <div className="fullinput">
          <div className="holder">Class password</div>
          <input className="inpat" type="text" onChange={Change2} placeholder="Enter the class password" />
        </div>
        <input onClick={Createclass} className="button" type="button" value={"Create class"} />
        <Link style={{marginRight:"5%"}} to={"/create"}><input className="button" type="button" value={"Go back"} /></Link>
        </div>  
    </div>
  };