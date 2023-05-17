import { Link } from "react-router-dom";
import "./Create.css"
export const Createproject = () => {
    return <div className="Back" style={{width:"100vw",height:'100vh', display:"flex",justifyContent:'center',alignItems:"center"}}>
        <div className="full1">
            <div style={{margin:"5%"}} className="title1">Create project</div>
        <div className="fullinput">
          <div className="holder">Which class do you want to add project</div>
          <input className="inpat" type="text" placeholder="Enter your class name" />
        </div>
        <div className="fullinput">
          <div className="holder">Project title</div>
          <input className="inpat" type="text" placeholder="Enter the title" />
        </div>
        <div className="fullinput">
          <div className="holder">Description</div>
          <input className="inpat" type="text" placeholder="Enter the paragraph" />
        </div>
        <div className="fullinput">
          <div className="holder">URL to your project</div>
          <input className="inpat" type="text" placeholder="paste your project url" />
        </div>
        <input className="button" type="button" value={"Create project"} />
        </div>  
    </div>
  };        