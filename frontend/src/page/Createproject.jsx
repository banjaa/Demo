import "./Create.css"
import "./upload.css"
import { Link, useNavigate } from "react-router-dom";
import  axios from "axios"
import React, { useState } from "react";
import {Navbar} from "../components/Navbar"

export const CreateProject = () => {
const navigate = useNavigate();
const user = localStorage.getItem("user_information");
const user_info = JSON.parse(user)
const [classname, setClassname] = useState("")
const [title, setTitle] = useState("")
const [word, setWord] = useState("")
const [url, setUrl] = useState("")
const [imgUrl, setImgUrl] = useState("")
const [selectedImages, setSelectedImages] = useState([]);
const [err, setErr] = useState(false)
const [wrong, setWrong] = useState("")
const user_id = user_info._id

const onSelectFile = (event) => {
  const selectedFiles = event.target.files;
  const selectedFilesArray = Array.from(selectedFiles);

  const imagesArray = selectedFilesArray.map((file) => {

    return URL.createObjectURL(file);

  });
  setSelectedImages((previousImages) => previousImages.concat(imagesArray));
  event.target.value = "";
};

function deleteHandler(image) {
  setSelectedImages(selectedImages.filter((e) => e !== image));
  URL.revokeObjectURL(image);
}


const dataRetriever = async () => {
    const img = selectedImages.toString()
    const img_url = img.slice(5)
    if(title.length <= 5 || title.length >= 15 || word.length <= 10 || word.length >= 50) {
      if(title.length <= 5) {
        setWrong("title is too short")
        setErr(true)
      }
      if(title.length >= 15) {
        setWrong("title length too long")
        setErr(true)
      }
      if(word.length <= 10) {
        setWrong("Description is too short")
        setErr(true)
      }
      if(word.length >= 50) {
        setWrong("Description is too long")
        setErr(true)
      }
    } else {
      setWrong("")
      setErr(false)
    }

    if(wrong.length === 0) {
      await axios({
      url: `https://fk-three.vercel.app/project`,
      method: "POST",
      data: {
        user_id: user_id,
        title: title,
        word: word,
        classname: classname,
        img_url: imgUrl,
        url: url
      },
    }).then((response) => {
        const res = response.data;
        if(res === "you're not member of this class") {
          setWrong(res)
          setErr(true)
        } else if(res === "there is no such class like this") {
          setWrong(res)
          setErr(true)
        } else {
          localStorage.setItem("class_information", JSON.stringify(response.data));
          navigate("/")
        }
    });
    }
    
  }

    return <div className="Back" style={{width:"100vw",height:'100vh', display:"flex",justifyContent:'center',alignItems:"center"}}>
      <Navbar/>
        <div className="CreateProject">
            <div style={{margin:"5%"}} className="title1">Create project</div>
            {err ? (
              <h3 className="error">{wrong}</h3>
            ) : null}
        <div className="fullinput">
          <div className="holder">Which class do you want to add project</div>
          <input onChange={(e) => setClassname(e.target.value)} id="classname"  className="inpat" type="text" placeholder="Enter your class name" />
        </div>
        <div className="fullinput">
          <div className="holder">Project title</div>
          <input onChange={(e) => setTitle(e.target.value)} id="title"  className="inpat" type="text" placeholder="Enter the title" />
        </div>
        <div className="fullinput">
          <div className="holder">Description</div>
          <input onChange={(e) => setWord(e.target.value)} id="word"  className="inpat" type="text" placeholder="Enter the paragraph" />
        </div>
        <div className="fullinput">
          <div className="holder">URL to your project</div>
          <input onChange={(e) => setUrl(e.target.value)}  className="inpat" type="text" placeholder="paste your project url" />
        </div>
        <div className="fullinput">
          <div className="holder">image url for your project</div>
          <input onChange={(e) => setImgUrl(e.target.value)}  className="inpat" type="text" placeholder="paste your image url" />
        </div>
        <input onClick={dataRetriever} className="button" type="button" value={"Craete project"} />
        {/* <div className="fullinput">
          <div className="holder">Image</div>
          <div>
            <form action="" onClick={()=>document.querySelector(".holderimg").click()}>
              <div className="insideuy">Upload Image</div>
            <input
          className="holderimg"
          type="file"
          name="images"
          hidden
          onChange={onSelectFile}
          multiple
          accept="image/png , image/jpeg, image/webp"
        />
        <div className="images">
        {selectedImages &&
          selectedImages.map((image, index) => {
            return (
              <div key={image} className="image">
                <img src={image} height="200" alt="upload" />
                <button onClick={() => deleteHandler(image)}>
                  delete image
                </button>
              </div>
            );
          })}
      </div>

            </form>
            {selectedImages.length > 0 &&
        (selectedImages.length > 1 ? (
          <p className="error">
            You can't upload more than 1 image! <br />
            <span>
              please delete <b> {selectedImages.length - 1} </b> of them{" "}
            </span>
          </p>
        ) : (
          <button
            className="upload-btn"
            onClick={dataRetriever}
          >
            UPLOAD PROJECT
            {selectedImages.length === 1 ? "" : "S"}
          </button>
        ))}



    </div>
        </div> */}
{/*         
        <Link to={"/"}><input className="button" type="button" value={"Go back to home"} /></Link> */}
        </div>  
    </div>
  };        