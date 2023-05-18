import {Navbar} from "../components/Navbar"
import {Box2} from "../components/Box2"
import "./profile.css"
import {Classes} from "../components/Classes"
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";


export const Profile = () => {
    const [about, setAbout] = useState("")
    const user = localStorage.getItem("seeing_profile");
    const user_info = JSON.parse(user)
    const about_me = user_info.about

    if(about_me.length == 0) {
        setAbout = "There is no such information about him"
    }

    const [data, setData] = useState("")
    const [projects, setpProjects] = useState("")
    const [memberOf, setpMemberOf] = useState("")
    const navigate = useNavigate();

    const dataRetriever = async () => {
        const user_id = user_info._id;
        await axios({
          url: `https://fk-three.vercel.app/get_class_by_admin/${user_id}`,
          method: "GET",
        }).then( async (response) => {
            setData(response.data.data)
        });
      }
      const Class_data = async (class_id) => {
        await axios({
          url: `https://fk-three.vercel.app/class/${class_id}`,
          method: "GET",
        }).then((response) => {
          localStorage.setItem("class_information", JSON.stringify(response.data));
          navigate("/classinformation")
          window.location.reload(false)
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
      const MemberOf = async () => {
        await axios({
          url: `https://fk-three.vercel.app/classby_member/${user_info._id}`,
          method: "GET",
        }).then((response) => {
          setpMemberOf(response.data)
        });
      }
    useEffect( () => {
        dataRetriever();
        Projects();
        MemberOf();
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
                                        return <div 
                                        onClick={() => {
                                            Class_data(userData._id)
                                          }}
                                        className="classmm">
                                            
                                        <div className="topmm">
                                            <div className="numbermm">{number}</div>
                                                <div className="classnamemm">{userData.classname}</div>
                                        </div>
                                        <div className="classinformationmm">{userData.projects.length} projects</div>
                                    </div>
                                        
                                })
                            )}
                         </div>
                        </div>
                    </div>
                </div>
                <div className="myprojects">MEMBER OF</div>
                <div className="theirprojects">
                                {memberOf.length === 0 ? (
                                    <div className="word">Not member yet ...</div>
                                ) : (
                                    memberOf.map((userData) => {
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
    )
}
