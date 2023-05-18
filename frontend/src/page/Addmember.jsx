import "./addmember.css"
import {Navbar} from "../components/Navbar"
import {Classesadd} from "../components/Addmemberbox"
import React, { useState } from 'react';
import { data } from './data.js';
export const Addmember = () => {
    const [contacts, setContacts] = useState(data);
  const [search, setSearch] = useState('');
    return(
        <div className="container">
           <Navbar/>
            <div className="cn">
                <h1 className='addnewmemberTITLE'>ADD NEW MEMBER</h1>
                <div style={{display:"flex", justifyContent:"center",alignItems:"center", width:"100%"}}>
                      <div style={{display:"flex", justifyContent:"center",alignItems:"center", width:"100%"}}>
                      <input className="input"onChange={(e) => setSearch(e.target.value)}placeholder='Search your name here...' />
                      </div>
                </div>
                <div className="borderh">
                  <div style={{display:"flex", justifyContent:"space-Between",alignItems:"center" , width:"100%"}}>
                    <div style={{display:"flex", justifyContent:"space-Between",alignItems:"center", width:"68%", marginLeft:"14%", flexDirection:"row", marginTop:"2%"}}>
                      <div style={{fontSize:"20px", marginTop:"2%" }}>Name</div>
                      <div style={{display:"flex", flexDirection:"row"}}>
                        <div style={{fontSize:"20px", marginTop:"2%"}}>Class</div>
                        <div style={{fontSize:"20px", marginTop:"2%",marginLeft:"45%"}}>Project</div>
                      </div>
                    </div>
                  </div>
                  <div style={{display:"flex", justifyContent:"space-Between",alignItems:"center", width:"70%", marginLeft:"" , flexDirection:"column",marginTop:"2%"}}>
                    {data
                      .filter((item) => {
                        return search.toLowerCase() === ''
                          ? item
                          : item.first_name.toLowerCase().includes(search);
                      })
                      .map((item, index) => (
                        <div key={index} className="cllk">
                          <div style={{marginTop:"2%",fontSize:"25px",paddingBottom:"20px"}}>{item.first_name}</div>
                          <div style={{display:"flex", flexDirection:"row",justifyContent:"space-between" ,width:"24%"}}>
                            <div style={{ marginTop:"2%"}}>{item.class}</div>
                            <div style={{ marginTop:"2%"}}>{item.project}</div>
                            <div className="iconplus"></div>
                          </div>
                        </div>
                      ))}
                  </div>
              </div>
            </div>
    </div>
        // <div className="container">
        //     <Navbar/>
        //     <div className="downsearch">
        //         <input type="text"className="input" placeholder="Search your name here" onkeyup="myFunction()"/>
        //         <div className="borderh">
        //             <Classesadd classes={2} name={"Enji"} project={"23 "}/>
        //             <Classesadd classes={2} name={"Namu"} project={"24 "}/>
        //             <Classesadd classes={2} name={"BiDo"} project={"25 "}/>
        //             <Classesadd classes={4} name={"Nono"} project={"21 "}/>
        //             <Classesadd classes={3} name={"Palesa"} project={"16 "}/>
        //             <Classesadd classes={4} name={"Nenole"} project={"3 "}/>
        //             <Classesadd classes={1} name={"Midori"} project={"5 "}/>
        //             <Classesadd classes={0} name={"Oksol"} project={"28 "}/>
        //             <Classesadd classes={4} name={"Nono"} project={"21 "}/>
        //             <Classesadd classes={3} name={"Palesa"} project={"16 "}/>
        //             <Classesadd classes={4} name={"Nenole"} project={"3 "}/>
        //             <Classesadd classes={1} name={"Midori"} project={"5 "}/>
        //             <Classesadd classes={0} name={"Oksol"} project={"28 "}/>
        //             <Classesadd classes={2} name={"Enji"} project={"23 "}/>
        //             <Classesadd classes={2} name={"Namu"} project={"24 "}/>
        //             <Classesadd classes={2} name={"BiDo"} project={"25 "}/>
        //             <Classesadd classes={4} name={"Nono"} project={"21 "}/>
        //             <Classesadd classes={3} name={"Palesa"} project={"16 "}/>
        //             <Classesadd classes={4} name={"Nenole"} project={"3 "}/>
        //             <Classesadd classes={1} name={"Midori"} project={"5 "}/>
        //             <Classesadd classes={0} name={"Oksol"} project={"28 "}/>
        //             <Classesadd classes={4} name={"Nono"} project={"21 "}/>
        //             <Classesadd classes={3} name={"Palesa"} project={"16 "}/>
        //             <Classesadd classes={4} name={"Nenole"} project={"3 "}/>
        //             <Classesadd classes={1} name={"Midori"} project={"5 "}/>
        //             <Classesadd classes={0} name={"Oksol"} project={"28 "}/>
        //             <Classesadd classes={2} name={"Enji"} project={"23 "}/>
        //             <Classesadd classes={2} name={"Namu"} project={"24 "}/>
        //             <Classesadd classes={2} name={"BiDo"} project={"25 "}/>
        //             <Classesadd classes={4} name={"Nono"} project={"21 "}/>
        //             <Classesadd classes={3} name={"Palesa"} project={"16 "}/>
        //             <Classesadd classes={4} name={"Nenole"} project={"3 "}/>
        //             <Classesadd classes={1} name={"Midori"} project={"5 "}/>
        //             <Classesadd classes={0} name={"Oksol"} project={"28 "}/>
        //             <Classesadd classes={4} name={"Nono"} project={"21 "}/>
        //             <Classesadd classes={3} name={"Palesa"} project={"16 "}/>
        //             <Classesadd classes={4} name={"Nenole"} project={"3 "}/>
        //             <Classesadd classes={1} name={"Midori"} project={"5 "}/>
        //             <Classesadd classes={0} name={"Oksol"} project={"28 "}/>
                    
        //         </div>
        //     </div>
        // </div>
    )
}