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
      </div>

        <p id = "BackgroundMe">I am from Northern California and I am a First Generation Latina looking for ways to extend accessibility and access to technology for underrepresented communities. </p>

        <br></br><br></br>  <br></br><br></br>  <br></br><br></br>  <br></br><br></br>
        <hr class="solid"/>
        <h1 id = "Name">Recent Projects</h1>
        <hr class="solid"/>

        <div class="vl">
        <p id = "ProjectLeft">Project Here</p></div>
        <div class="bl"> <p id = "ProjectRight"> Project Here</p></div>
        <div class="vl"> <p id = "ProjectLeft">Project Here</p></div>
        
        <br></br><br></br>  <br></br><br></br>  <br></br><br></br>  <br></br><br></br>

        <hr class="solidThin"/>

        <div class = "Education">
          <div class = "EducationLeft">

            <p id = "LeftHeader"><b>Education</b>
            </p>

            <div id = "dateLFloat"><p id = "LeftDates">2019<br></br>-2023</p></div>
            <p id = "bar">༺❀༻</p><div id ="schoolLFloat"></div>
            <p id = "LeftSchool">Franklin High School</p>
            <div class="verticalLine"></div>
          </div>
          <div class = "ExperienceRight">
            <p id = "RightHeader"><b>Education</b></p>

            <div id ="dateRFloat">
            <p id = "LeftDates">2023<br></br>-Present</p></div><p id = "bar">༺❀༻</p><p id ="RightExperience">Columbia University</p>
          </div>
        </div>

        <br></br><br></br>  <br></br><br></br>  <br></br><br></br>  <br></br><br></br>
        <br></br><br></br>  <br></br><br></br>  <br></br><br></br>  <br></br><br></br>

        <footer><p>See ya! Have a good semester! </p></footer>




        
    </>
  )
}

export default App


