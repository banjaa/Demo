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
  const [err, setErr] = useState(false)
  const [wrong, setWrong] = useState("")

  const CreateClass = async () => {
      const user_id = user_info._id;
      if(classname.length < 5 || classname.length >= 20 || password.length < 5 || password.length > 12) {
        setErr(true)
        if(classname.length < 5){
        setWrong("Class name is too short")
      }
      if(classname.length >= 35) {
        setWrong("Class name is too long")
      }
      if(password.length < 5) {
        setWrong("password is too short")
      }
      if(password.length > 12) {
        setWrong("password is too long")
      }
      } else {
        setWrong("")
        setErr(false)
      }
      

      if(wrong.length === 0) {
        await axios({
          url: `https://fk-three.vercel.app/class/${user_id}`,
          method: "POST",
          data: {
            classname: classname,
            password: password
          }
        }).then((response) => {
      const res = response.data
      if(res == "this class name is allready in use"){
        setErr(true)
        setWrong(res)
      } else {

        navigate("/profile")
      }
    })
  }
}
    return <div className="Back" style={{width:"100vw",height:'100vh', display:"flex",justifyContent:'center',alignItems:"center"}}>
        <div className="full2">
            <div style={{margin:"5%"}} className="title1">Create class</div>
            {err ? (
              <h3 className="error">{wrong}</h3>
            ) : null}
        <div className="fullinput">
          <div className="holder">Class name</div>
          <input className="inpat" type="text" onChange={(e) => setClassname(e.target.value)} placeholder="Enter your class name" />
        </div>
        <div className="fullinput">
          <div className="holder">Class password</div>
          <input type="password" className="inpat" onChange={(e) => setPassword(e.target.value)} placeholder="Enter the class password" />
        </div>
        <input onClick={CreateClass}  className="button" type="button" value={"Create class"} />
        <Link style={{marginRight:"5%"}} to={"/create"}><input className="button" type="button" value={"Go back"} /></Link>
        </div>  
    </div>
  };