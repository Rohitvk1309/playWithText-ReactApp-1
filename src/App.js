import { useState } from 'react';
import './Appa.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import {Routes} from 'react-router'
import React from "react";


import {
  BrowserRouter as Router,
  // Switch,
  Route
  // Link
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light'); // weather dark mode is enable or not
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }


  const toggleMode= () =>{
    if(mode === 'light'){
      setmode('dark')
      document.body.style.backgroundColor ='#042743'
      showAlert("dark mode has been enabled","success")
      // document.title = "dark mode enable"

// this is for show something in every sec like virus and all.....
      // setInterval(() => {
      //   document.title = 'playWithText is amazing Mode'
      // }, 2000);

      // setInterval(() => {
      //   document.title='install playWithText Now'
      // }, 1500);


    }
    else{
      setmode('light')
      document.body.style.backgroundColor ='white'
      showAlert("light mode has been enabled","success")
      // document.title = "light mode enable"
    }

  }

  return (
    <>
      {/* <Navbar title="Textutils" AboutText="About us" />
      <Navbar/> */}
      <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode = {toggleMode} />
      <Alert alert = {alert}/>
      <div className="container my-3">
        {/* <Switch> */}
            <Routes >
            <Route exact path="/about" element={<About  mode={mode}/>}> </Route>
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text area" mode={mode} />}></Route>
            </Routes>
            {/* <Router path="/">
              {/* <TextForm showAlert={showAlert} heading = "Enter the text area" mode={mode}/> */}
            {/* </Router> */} */
        {/* </Switch>  */}
      </div>
      </Router>    
    </>
  );
}
export default App;

