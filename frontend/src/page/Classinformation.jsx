import "./Classinformation.css"
import {Navbar} from "../components/Navbar"
import {Box2} from "../components/Box2"
import {Classes} from "../components/Classes"
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export const Classinformation = () => {
    const class_inf = localStorage.getItem("class_information");
    const class_info = JSON.parse(class_inf)
    const [username, setUsername] = useState("")
    const [members, setMembers] = useState("")
    const [projects, setProjects] = useState("")
    const [projectInfo, setProjectInfo] = useState()


    const Admin = async () => {
        await axios({
          url: `https://fk-three.vercel.app/user/${class_info.admin}`,
          method: "GET",
        }).then((response) => {
            setUsername(response.data.username);
        });
      }

    const Members = async () => {
        await axios({
          url: `https://fk-three.vercel.app/get_members/${class_info._id}`,
          method: "GET",
        }).then((response) => {
            setMembers(response.data);
        });
      }

      const Projects = async () => {
        await axios({
          url: `https://fk-three.vercel.app/projectby_class_id/${class_info._id}`,
          method: "GET",
        }).then((response) => {
            setProjects(response.data);
        });
      }

      const setProjectInfotmation = () => {

      }
    useEffect( () => {
        Admin();
        Members();
        Projects();
    }, []);
    console.log(projects);
    return(
        <div className="ss">
            <Navbar/>
            <div className="profiless">
                <div className="profiles">
                    <div className="leftsideprof">
                        <div className="upgreen"></div>
                        <div style={{display:"flex",width:"100%",flexDirection:"row",alignItems:"center" ,justifyContent:"space-between"}}>
                            <div style={{color:"white",fontSize:"30px",marginLeft:"4%"}}>{class_info.classname}</div>
                            <Link to={"/addmember"} className="newmember" ></Link>
                        </div>
                        <div className="downwhite">
                            <div className="theirname"> Admin: {username}</div>
                            <div className="line"></div>
                            <div className="description">Ene classed zuvhun backend projects oruulah ba public bna shu </div>
                        </div>
                    </div>
                    <div className="rightsideprof">
                        <div className="classnameproff">Members</div>
                        <div className="classes">
                            <div className="row1">
                                {members.length === 0 ? (
                                    <div className="word">No members</div>
                                ) : (
                                    members.map((userData, i) => {
                                        const number = i + 1
                                        const createdAt = userData.createdAt
                                        const since = createdAt.substring(0, 7)
                                        return <Classes number={number}  name={userData.username} first={"member since"} second={since}/>
                                })
                            )}
                         </div>
                        </div>
                    </div>
                </div>
                <div className="myprojects">ALL PROJECTS.</div>
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
