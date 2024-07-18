import './App.css';
import About from './components/About.js';
import Alert from './components/Alert.js';
import Navbar from './components/Navbar.js';
import TextArea from './components/TextArea.js';
import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [navBg, setNavBg] = useState("bg-blue-200 text-black")
  const [modeBtn, setModeBtn] = useState("bg-slate-800 text-white")
  const [functionBtn, setFunctionBtn] = useState("bg-blue-500 text-white")
  const [showAlert, setShowAlert] = useState(null)

  const passAlert = (msg) => {
    setShowAlert(msg)
    setTimeout(() => {
      setShowAlert(null)
    }, 2200);
  }

  const toggleMode = () => {
    if(!darkMode) {
      setNavBg("bg-slate-800 text-white")
      setModeBtn("bg-blue-200 text-black")
      document.body.style.backgroundColor = "rgb(100 116 139)"
      setFunctionBtn("bg-white text-black")
      setDarkMode(true)
      passAlert("Dark Mode has been enabled.")
      document.title = "Word Press - Dark Mode";
    }
    else {
      setNavBg("bg-blue-200 text-black")
      setModeBtn("bg-slate-800 text-white")
      document.body.style.backgroundColor = "white"
      setFunctionBtn("bg-blue-500 text-white")
      setDarkMode(false)
      passAlert("Light Mode has been enabled.")
      document.title = "Word Press - Light Mode";
    }
  }

  return (
    <>
      <Router>
      <Navbar navBg={navBg} toggleMode={toggleMode} modeBtn={modeBtn} title="WordPress"/>
      <Alert showAlert={showAlert}/>
        <Routes>
          <Route path="/about" element={<About darkMode={darkMode}/>}/>

          <Route path="/home" element={<TextArea functionBtn={functionBtn} darkMode={darkMode} passAlert={passAlert}/>}/>
          <Route path="*" element={<TextArea functionBtn={functionBtn} darkMode={darkMode} passAlert={passAlert}/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
