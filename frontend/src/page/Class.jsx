import "./class.css"
import {Navbar} from "../components/Navbar"
import {ClassBox} from "../components/classBox"
import { Link } from "react-router-dom";
export const Class = () => { 
    return (
        <div className="class">
            <Navbar/>
            <div className="Middle">
                <h1 style={{fontWeight:"300", fontSize:"300%", color:"grey", marginTop:"7%"}}>Which class do you wanna visit?</h1>
                <div style={{width:"100%"}}>
                <h2 className="ani" style={{marginTop:"10%", marginBottom:"1%", color:"grey"}}>Trending</h2>
                </div>
                    <div className="Boxs">
                        <Link className="link" to={"/classinformation"}><ClassBox width={"450px"}/></Link>
                        <Link className="link" to={"/classinformation"}><ClassBox width={"450px"}/></Link>
                        <Link className="link" to={"/classinformation"}><ClassBox width={"450px"}/></Link>
                        <Link className="link" to={"/classinformation"}><ClassBox width={"450px"}/></Link>
                        <Link className="link" to={"/classinformation"}><ClassBox width={"450px"}/></Link>
                        <Link className="link" to={"/classinformation"}><ClassBox width={"450px"}/></Link>
                        <Link className="link" to={"/classinformation"}><ClassBox width={"450px"}/></Link>
                        <Link className="link" to={"/classinformation"}><ClassBox width={"450px"}/></Link>
                        <Link className="link" to={"/classinformation"}><ClassBox width={"450px"}/></Link>
                        <Link className="link" to={"/classinformation"}><ClassBox width={"450px"}/></Link>
                        <Link className="link" to={"/classinformation"}><ClassBox width={"450px"}/></Link>
                        <Link className="link" to={"/classinformation"}><ClassBox width={"450px"}/></Link>
                        <Link className="link" to={"/classinformation"}><ClassBox width={"450px"}/></Link>
                        <Link className="link" to={"/classinformation"}><ClassBox width={"450px"}/></Link>
                        <Link className="link" to={"/classinformation"}><ClassBox width={"450px"}/></Link>
                    </div>
                    
            </div>
        </div>
    )
}