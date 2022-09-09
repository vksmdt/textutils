// import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import Text from './Component/Text';
import { useState } from 'react';
import Alert from './Component/Alert';
import About from './Component/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
 
  
} from "react-router-dom";



function App() {
const [mode,setMode] = useState('light');
const [alert, setAlert] = useState(null);



// const removeBody=()=>{
//   document.body.classList.remove("bg-primary")
//   document.body.classList.remove("bg-success")
//   document.body.classList.remove("bg-info")
//   document.body.classList.remove("bg-warning")
//   document.body.classList.remove("bg-light")
//   document.body.classList.remove("bg-dark")
// }

const toggleMode = () =>{
  // removeBody();
  // console.log(cls)
  // document.body.classList.add("bg-"+cls);
  if (mode === 'light') {
    setMode('dark');
    document.body.style.backgroundColor = "black" 
    showAlert("Dark Mode is Enable","success") 
  }
  else{
    setMode('light');
    document.body.style.backgroundColor = "white"
    showAlert("Light Mode is Enable" , "success") 
  }
}
const showAlert =(Message,type)=>{
  
    setAlert({
      msg : Message,
      typ : type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
    

}
  return (
    <>
     <Router>
      <Navbar title= "TextUtilis" about="About-Text" mode={mode} togglemode={toggleMode}/>
      <Alert alert={alert}/>
      <div className='container my-3'>
          <Routes>
           <Route exact path="/About" element={<About mode={mode} showAlert={showAlert}/>} /> 
          <Route exact path="/" element={ <Text vikas="Text Analyzer" mode={mode} showAlert={showAlert}/>} /> 
          {/* <Text vikas="Text Analyzer" mode={mode} showAlert={showAlert}/> */}
          </Routes>
          </div>
        </Router>
     
    </>
  );
}

export default App;
