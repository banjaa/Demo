import "./classBox.css";
import { Link } from "react-router-dom";
export const ClassBox = (width) => {
    return (
        <div style={{width:{width}}} className="classBox">
            <div className="miniBox">
                <h2 className="title">Team</h2>
                <h3 className="information">  20 members | 24 projects</h3>
            </div>
        </div>
    )
}