import './Appa.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar title="Textutils2" AboutText="About us" />
      {/* <Navbar/> */}
      <div className="container my-3">
      <TextForm heading = "Enter the text area"/>
      </div>
    </>
  );
}
export default App;

