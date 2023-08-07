import {Route, Routes} from 'react-router-dom'
import Header from "./components/Header";
import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import Project from './pages/Project';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import { useState,useEffect } from "react";
import './style.css';
import './header.css';
import './footer.css';
import './home.css';
import './about.css';
import './contacts.css';
import './resume.css';
import './project.css';


function App() {
  // const [data, setData] = useState('');
  return (
    <div className="App">
      
      <Header/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/project" element={<Project/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/resume" element={<Resume/>}/>
    </Routes>
    <Footer/>
  
    </div>
  );
}

export default App;
