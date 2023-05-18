import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, SignUp, Home } from "./page";
import { Class} from "./page/Class"
import { Profile} from "./page/Profile"
import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import {CreateClass} from "./page/CreateClass"
import { Classinformation } from "./page/Classinformation.jsx";
import {CreateProject} from "./page/Createproject"
import { Create } from "./page/Create.jsx";
import {Project} from "./page/Project"

export const Router = () => {
  const [data, setData] = useState([]);
  const [done, setDone] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => {
          setData(json);
          setDone(true);
        });
    }, 1000);
  }, []);

  return (
    <>
      {!done ? (
        <div className="loading">
            <ReactLoading
          type={"bars"}
          color={"#67eb7f"}
          width={150}
        />
        </div>
        
      ) : (
        <ul>
         <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/" element={<Home />}/>
          <Route path="/class" element={<Class />}/>
          <Route path="/profile" element={<Profile />}/>
          <Route path="/createClass" element={<CreateClass />}/>
          <Route path="/classinformation" element={<Classinformation />}/>
          <Route path="/createProject" element={<CreateProject />}/>
          <Route path="/create" element={<Create />}/>
          <Route path="/project" element={<Project />}/>
        </Routes>
      </BrowserRouter>
        </ul>
      )}
    </>
  );
}
