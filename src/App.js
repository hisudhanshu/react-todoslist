
import './App.css';
import Header from './Header/Header';
import Slider from './Slider/Slider';
import Leftnavigation from './Leftnavigation/Lefnavigation';

function App() {
  return (
    <div>      
      <Header  />
      <Slider />
      <center><h1>my skills</h1></center>
     <Leftnavigation skill="React JS" desc="i am learning react now" />
     <Leftnavigation skill=".NET" desc="i am EXPERT AT .NET" />
    </div>
  );
}

export default App;
