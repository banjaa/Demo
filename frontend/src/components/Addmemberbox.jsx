
import "./Classes.css"

export const Classesadd = ({name , project , classes }) => {
    return (
        <div className="add">
            <div className="rightadd">{name}</div>
            <div className="leftssss">
                <div className="leftadd">
                    <div className="numberofproject">projects: {project}|</div>
                    <div className="numberofclasses">classes:{classes}</div>
                </div>
            </div>
            
            <div className="iconplus"></div>
            
        </div>
    )
}