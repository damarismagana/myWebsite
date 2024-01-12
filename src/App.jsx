import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from "./pages/Home"
import AboutMe from "./pages/AboutMe"
import Contact from "./pages/Contact"
import NavigationBar from './NavigationBar'
import { Routes, Route, HashRouter } from "react-router-dom";
import image from "../src/images/Me.jpg"

function App() {
  return (
    <>
      <HashRouter>
        <div>
          <NavigationBar></NavigationBar>
          <Routes>
            <Route path = "/" element = {<Home/>} />
            <Route path = "/Home" element = {<Home/>} />
            <Route path = "/AboutMe" element = {<AboutMe/>} />
            <Route path = "/Contact" element = {<Contact/>} />
          </Routes>
        </div>
      </HashRouter>

      <h1 id ="Name"> 
        Hi, I am Damaris!
      </h1>

      <p id = "Studying">
      Welcome to my digital space, where the worlds of computer science and ethics converge. As a passionate explorer of technology and its profound impact on society, I invite you to join me on a journey where innovation meets responsibility. I am a First Year at Columbia University studying Computer Science. I am interested in the intersection of Ethics and Artificial Intelligence. 
      </p>

      <br></br> <br></br> <br></br> <br></br> <br></br>

    <div class = "content-container">
      <div class = "container">
        <img id = "image" src = {image} alt = "Damaris image" />
        <div class = "overlay">
          <div class = "text">Go Lions! 🦁</div>
          </div>
        </div>

        <div id = "BackgroundMe">I am from Northern California and now exploring the East Coast. I am a First Generation Latina looking for ways to extend accessibility and access to technology for underrepresented communities. </div>
      </div>

      <br></br> <br></br> <br></br> <br></br> <br></br>
    </>
  )
}

export default App


