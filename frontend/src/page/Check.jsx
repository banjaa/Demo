import "./Create.css"

export const Check = () => {
    return <div className="Back" style={{width:"100vw",height:'100vh', display:"flex",justifyContent:'center',alignItems:"center"}}>
        <div className="full2">
            <div style={{margin:"5%"}} className="title1">Verify your password to continue</div>
        <div style={{margin:"5%"}} className="fullinput">
          <div className="holder">Password</div>
          <input className="inpat" type="text" placeholder="Enter password" />
        </div>
        <input className="button" type="button" value={"Continue"} />
        </div>  
    </div>
  };