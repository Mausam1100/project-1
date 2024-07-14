import './App.css';
import Navbar from './components/Navbar.js';
import TextArea from './components/TextArea.js';
import React, {useState} from 'react'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [navBg, setNavBg] = useState("bg-blue-200 text-black")
  const [modeBtn, setModeBtn] = useState("bg-slate-800 text-white")
  const [functionBtn, setFunctionBtn] = useState("bg-blue-500 text-white")

  const toggleMode = () => {
    if(!darkMode) {
      setNavBg("bg-slate-800 text-white")
      setModeBtn("bg-blue-200 text-black")
      document.body.style.backgroundColor = "rgb(100 116 139)"
      setFunctionBtn("bg-white text-black")
      setDarkMode(true)
    }
    else {
      setNavBg("bg-blue-200 text-black")
      setModeBtn("bg-slate-800 text-white")
      document.body.style.backgroundColor = "white"
      setFunctionBtn("bg-blue-500 text-white")
      setDarkMode(false)
    }
  }

  return (
    <>
      <Navbar navBg={navBg} toggleMode={toggleMode} modeBtn={modeBtn} title="WordPress"/>
      <TextArea functionBtn={functionBtn} darkMode={darkMode}/>
    </>
  );
}

export default App;
