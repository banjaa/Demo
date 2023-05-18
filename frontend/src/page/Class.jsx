import "./class.css"
import {Navbar} from "../components/Navbar"
import {ClassBox} from "../components/classBox"
import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import  axios from "axios";
export const Class = () => {
    const [data, setData] = useState("")
    const navigate = useNavigate();
    // const checkUser = () => {
    //   const isuser = localStorage.getItem("user_inf");
    //   if (isuser) navigate("/");
    // };

    const dataRetriever = async () => {
        await axios({
          url: `https://fk-three.vercel.app/class`,
          method: "GET",
        }).then((response) => {
          const data = response.data.data
          const limit = data.slice(0, 15)
          setData(limit)
        });
      }
    useEffect( () => {
        dataRetriever();
    }, []);
    
    const Class_data = async (class_id) => {
      await axios({
        url: `https://fk-three.vercel.app/class/${class_id}`,
        method: "GET",
      }).then((response) => {
        localStorage.setItem("class_information", JSON.stringify(response.data));
        window.location.reload(false)
      });
    }
  useEffect( () => {
      dataRetriever();
  }, []);

    return (
        <div className="class">
            <Navbar/>
            <div className="Middle">
                <h1 style={{fontWeight:"300", fontSize:"300%", color:"grey", marginTop:"7%"}}>Which class do you wanna visit?</h1>
                <div style={{width:"100%"}}>
                <h2 className="ani" style={{marginTop:"10%", marginBottom:"1%", color:"grey"}}>Lastest</h2>
                </div>
                    <div className="Boxs">
                    <div className="movie_box">
        <div style={{ display: "flex", flexWrap:"wrap", justifyContent:"space-between" }}>
          {data.length === 0 ? (
            <div className="word">Loading ...</div>
          ) : (
            data.map((userData, i) => {
              return <Link style={{textDecoration:"none"}} to={"/classinformation"}>
                <div
              onClick={() => {
                Class_data(userData._id)
              }}
              className="classBox">
              <div className="miniBox">
                  <h2 className="title">{userData.classname}</h2>
                  <h3 className="information"> {userData.members.length} members | {userData.projects.length} projects</h3>
              </div>
          </div>
              </Link>
                
            })
          )}
        </div>
      </div>
                </div>
                    
            </div>
        </div>
    )
}