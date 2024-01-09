import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

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
            <Route path = "/ContactMe" element = {<ContactMe/>} />
          </Routes>
        </div>
      </HashRouter>
      <h1 id ="Name"> 
        Hi, I am Damaris!
      </h1>

      <p id = "Studying">
        I am a First Year at Columbia University Studying Computer Science.
      </p>

      <p id = "Interests" > 
        I am interested in the intersection of Ethics and Artificial Intelligence. 
      </p>
    </>
  )
}

export default App
