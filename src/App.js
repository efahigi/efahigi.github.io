import {Route, Routes} from 'react-router-dom'
import Header from "./components/Header";
import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import Project from './pages/Project';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import { Button } from 'reactstrap';
// import elogo from './images/elogo';
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/resume" element={<Resume/>}/>
      <Route path="/project" element={<Project/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    <Footer/>
  
    </div>
  );
}

export default App;
