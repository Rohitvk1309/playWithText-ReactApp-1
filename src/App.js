import { useState } from 'react';
import './Appa.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';

function App() {
  const [mode, setmode] = useState('light'); // weather dark mode is enable or not

  const toggleMode= () =>{
    if(mode === 'light'){
      setmode('dark')
      document.body.style.backgroundColor ='#042743'
    }
    else{
      setmode('light')
      document.body.style.backgroundColor ='white'
    }

  }

  return (
    <>
      {/* <Navbar title="Textutils" AboutText="About us" />
      <Navbar/> */}
      <Navbar title="TextUtils" mode={mode} toggleMode = {toggleMode} />
      <div className="container my-3">
      <TextForm heading = "Enter the text area" mode={mode}/>
      {/* <About/> */}
      </div>
    </>
  );
}
export default App;

