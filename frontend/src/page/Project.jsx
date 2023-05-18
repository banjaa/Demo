import "./class.css"
import {Navbar} from "../components/Navbar"
import {Box2} from "../components/Box2"
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import like from "../img/like.png"
import like2 from "../img/like2.png"

export const Project = () => {
    const navigate = useNavigate();
    const project_inf = localStorage.getItem("project_information");
    const project_info = JSON.parse(project_inf)
    const user = localStorage.getItem("user_information");
    const user_info = JSON.parse(user)
    const [isLiked,  setIsLIked] = useState()
    const IsLIked = async () => {
        await axios({
          url: `https://fk-three.vercel.app/isliked/${user_info._id}/${project_info._id}`,
          method: "GET",
        }).then((response) => {
          setIsLIked(response.data)
        });
      }

      const SetProjectInfo = async () => {
        await axios({
            url: `https://fk-three.vercel.app/project/${project_info._id}`,
            method: "GET",
          }).then( async (response) => {
            localStorage.setItem("project_information", JSON.stringify(response.data));
            navigate("/project")
            window.location.reload(false)
          });
      }

      const LikeProject = async () => {
        await axios({
          url: `https://fk-three.vercel.app/likeProject/${user_info._id}`,
          method: "PUT",
          data: {
            project_id: project_info._id
          }
        }).then( async () => {
          SetProjectInfo();
        });
      }

      const DisLikeProject = async () => {
        await axios({
          url: `https://fk-three.vercel.app/dislikeProject/${user_info._id}`,
          method: "PUT",
          data: {
            project_id: project_info._id
          }
        }).then( async () => {
          SetProjectInfo();
        });
      }
    useEffect( () => {
        IsLIked();
    }, []);

    const img = {
        backgroundImage: `url(${project_info.img_url})`,
      };
    

    

    return (
        <div className="ProjectBoxs">
            <Navbar/>
            <div className="Middle">
                    <div className="flexit">
                        <div style={img} className="projectboximg"></div>
                        <div>
                            <div className="rightsidehome">
                                <div className="upgreenho">
                                    <div className="whiteho">Project name: {project_info.title}</div>
                                </div>
                                <div className="starrate" >
                                {isLiked ? (
                                        <img onClick={DisLikeProject} style={{width:"40px", boxShadow:"none"}} src={like} />
                                    ) : (
                                        <img onClick={LikeProject} style={{width:"40px", boxShadow:"none"}} src={like2} />
                                    )}
                                {project_info.likes}
                                </div>
                                
                                <div className="downwhite">
                                    <div className="theirname">Creater: {project_info.username}</div>
                                    <div className="line"></div>
                                    <div className="description">{project_info.word}</div>
                                </div>
                            </div>
                            <a style={{textDecoration:"none"}} href={project_info.url}>
                                <div className="Urlbox">
                                    <div className="hd">Nothing is better than the real one. Checkout!</div>
                                    <a className="href"> ^Click here^ </a>
                                </div>
                            </a>
                            
                        </div>
                        
                    </div>
            </div>
        </div>
    )
}