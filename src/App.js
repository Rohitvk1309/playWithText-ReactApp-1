import './Appa.css';
import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';
import About from './components/About';

function App() {
  return (
    <>
      <Navbar title="Textutils2" AboutText="About us" />
      {/* <Navbar/> */}
      <div className="container my-3">
      {/* <TextForm heading = "Enter the text area"/> */}
      <About/>
      </div>
    </>
  );
}
export default App;

