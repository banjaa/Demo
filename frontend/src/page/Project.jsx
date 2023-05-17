import "./class.css"
import {Navbar} from "../components/Navbar"
import {Box2} from "../components/Box2"
import {StarIcon} from "../components/Star"
import { Link } from "react-router-dom";
import { useState } from "react";

export const Project = () => {
    const [ like, setlike ] = useState(100)
    const [ likeactive, setlikeactive ] = useState()
    const [ dislike, setdislike ] = useState()
    const [ dislikeactive, setdislikeactive ] = useState()
    function likef(){
        if(likeactive){
            setlikeactive(false)
            setlike(like-1)
        }else{
            setlikeactive(true)
            setlike(like+1)
            if(dislikeactive){
                setdislikeactive(false)
                setlike(like+1)
                setdislike(dislike-1)
            }
        }
    }


    return (
        <div className="ProjectBoxs">
            <Navbar/>
            <div className="Middle">
                    <div className="flexit">
                        <div className="projectboximg"></div>
                        <div>
                            <div className="rightsidehome">
                                <div className="upgreenho">
                                    <div className="whiteho">Project name: Богиноо</div>
                                </div>
                                <div className="starrate" >
                                <div className="rate">Like:</div>
                                    <button onClick={likef} className="star">{like}</button>
                                </div>
                                
                                <div className="downwhite">
                                    <div className="theirname">Tugsbileg</div>
                                    <div className="line"></div>
                                    <div className="description">I am ze guy who made this  "URL bogino bolgodog web"</div>
                                </div>
                            </div>
                            <div className="Urlbox">
                                <div className="hd">Nothing is better than the real one. Checkout!</div>
                                <a href="https://boginoo.firebaseapp.com/" className="href"> ^Click here^ </a>
                            </div>
                        </div>
                        
                    </div>
            </div>
        </div>
    )
}