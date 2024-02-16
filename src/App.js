
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import React,{useState} from 'react'
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";
function App() {
  const [mode,setMode]=useState('dark');
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    }) 
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }
  
  const toggleMode=()=>{
    if(mode ==='light'){
      setMode('dark')
      showAlert("Dark mode has been enabled","success")
      // document.title="TextUtils - Dark Mode";
      // setInterval(() => {
      //   document.title="TextUtils is Amazing Mode";
      // }, 200);
      // setInterval(() => {
      //   document.title="Install TextUtils Now";
      // }, 500);
    }else{
      setMode('light')
      showAlert("Light mode has been enabled","success")
      document.title="TextUtils - Light Mode";
    }
  }  
  return (
    <>
    <Router>
    <Navbar title="TextUtils" about="About" mode={mode} toggleMode={toggleMode}/> 
    {/* <Navbar/> */}
    <Alert alert={alert}/>
    <div className="container">
      <Routes>
          <Route exact path="/" element={<TextForm heading="Enter Text To analyze" showAlert={showAlert}/>}/>
          <Route exact path="/About" element={<About mode={mode}/>}/>
      </Routes>
        
    {/* <About/> */}
    </div>
    </Router>
    </>
  );
}
export default App;
