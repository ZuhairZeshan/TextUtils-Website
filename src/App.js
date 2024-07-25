import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState, useSyncExternalStore } from 'react';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link,
} from "react-router-dom";

let name="zuhair"

function App() {
  const [mode,setmode]=useState('light');
  const [alert,setalert]=useState(null);
  
  const showalert = (message,type) =>{
    setalert({
      msg:message,
      typ:type
    })
    setTimeout(()=>{
      setalert(null);
    },3000)
  }

  const togglemode=()=>{
    if(mode == 'light'){
      setmode('dark');
      document.body.style.backgroundColor='#042743';
      showalert('Dark Mode Has Been Enabled' , 'Success');
      document.title='Zuhair React : Dark Mode';
    }else{
      setmode('light');
      document.body.style.backgroundColor='white';
      showalert('Light Mode Has Been Enabled' , 'Success');
      document.title='Zuhair React : Light Mode';
    }
  }
  
  return (
    <>
    <Router>
      <Navbar title="TextUtils" abouttext="About Us" mode={mode} togglemode={togglemode}/>
      <Alert alert={alert}/>
      <div className='container my-3'>
        <Routes>
          <Route exact path="/about" element={<About mode={mode}/>} />
          <Route exact path="/" element={<TextForm showalert={showalert} heading="Enter Text Here to Analyze" mode={mode} />} />
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
