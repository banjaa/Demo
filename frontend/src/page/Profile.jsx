import {Navbar} from "../components/Navbar"
import {Box2} from "../components/Box2"
import "./profile.css"
import {Classes} from "../components/Classes"
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


export const Profile = () => {
    const [about, setAbout] = useState("")
    const user = localStorage.getItem("user_information");
    const user_info = JSON.parse(user)
    const about_me = user_info.about

    if(about_me.length == 0) {
        setAbout = "There is no such information about him"
    }

    const [data, setData] = useState("")
    const [projects, setpProjects] = useState("")
    const navigate = useNavigate();

    const dataRetriever = async () => {
        const user_id = user_info._id;
        await axios({
          url: `https://fk-three.vercel.app/get_class_by_admin/${user_id}`,
          method: "GET",
        }).then( async (response) => {
            setData(response.data.data)
            console.log(response.data);
        });
      }
      const Class_data = async (class_id) => {
        await axios({
          url: `https://fk-three.vercel.app/class/${class_id}`,
          method: "GET",
        }).then((response) => {
          localStorage.setItem("class_information", JSON.stringify(response.data));
        });
      }
      const Projects = async () => {
        await axios({
          url: `https://fk-three.vercel.app/projectby_uid/${user_info._id}`,
          method: "GET",
        }).then((response) => {
          setpProjects(response.data);
        });
      }
    useEffect( () => {
        dataRetriever();
        Projects();
    }, []);

    return(
        <div className="ss">
            <Navbar/>
            <div className="profiless">
                <div className="profiles">
                    <div className="leftsideprof">
                        <div className="upgreen"></div>
                        <div className="downwhite">
                            <div className="theirname">{user_info.username}</div>
                            <div className="line"></div>
                            <div className="description">{user_info.about}</div>
                        </div>
                    </div>
                    <div className="rightsideprof">
                        <div className="classnameproff">My classes</div>
                        <div className="classes">
                            <div className="row1">
                                {data.length === 0 ? (
                                    <div className="word">Loading ...</div>
                                ) : (
                                    data.map((userData, i) => {
                                        const number = i + 1
                                        return <Classes 
                                        onClick={() => {
                                            Class_data(userData._id)
                                          }}
                                         name={userData.classname} project={userData.projects.length} number={number} first={userData.projects.length} second={"projects"}/>
                                            
                                        
                                        
                                })
                            )}
                         </div>
                        </div>
                    </div>
                </div>
                <div className="myprojects">MY PROJECTS.</div>
                <div className="theirprojects">
                                {projects.length === 0 ? (
                                    <div className="word">No projects yet ...</div>
                                ) : (
                                    projects.map((userData) => {
                                        return <Box2 img_url={userData.img_url} title={userData.title}/>
                                })
                            )}
                         </div>
            </div>
            
        </div>
    )
}
