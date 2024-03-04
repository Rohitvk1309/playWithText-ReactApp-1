import { useState } from 'react';
import './Appa.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';

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
    }
    else{
      setmode('light')
      document.body.style.backgroundColor ='white'
      showAlert("light mode has been enabled","success")
    }

  }

  return (
    <>
      {/* <Navbar title="Textutils" AboutText="About us" />
      <Navbar/> */}
      <Navbar title="TextUtils" mode={mode} toggleMode = {toggleMode} />
      <Alert alert = {alert}/>
      <div className="container my-3">
      <TextForm showAlert={showAlert} heading = "Enter the text area" mode={mode}/>
      {/* <About/> */}
      </div>
    </>
  );
}
export default App;

