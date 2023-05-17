import "./Create.css"
import {Navbar} from "./Navbar"
import { Link } from "react-router-dom";

export const Create = () => {
    return(
        <div className="cont">
            <Navbar/>
            <div style={{display:"flex", flexDirection:"column",justifyContent:"center",width:"1400px", alignItems:"center"}}>
                <div className="question">What do you want to create?</div>
                <div style={{display:"flex", flexDirection:"row",justifyContent:"space-between", alignItems:"center",width:"80%",marginTop:"5%"}}>
                    <Link style={{marginLeft:"1%",textDecoration:"none"}} to={"/createclass"}><div className="createbox">Create CLASS</div></Link>
                    <Link style={{marginLeft:"1%",textDecoration:"none"}} to={"/createproject"}><div className="createbox">Create PROJECT</div></Link>
                </div>
            </div>
        </div>
    )
}