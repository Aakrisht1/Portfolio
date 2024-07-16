import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';
import Successful from './components/Successful/Successful';
import './App.css';

function App() {
  return (
    <Router className="Main">

      <Header />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/account" element={<Login />} />
        <Route path="/Successful" element={<Successful />} />

      </Routes>
      
    </Router>
  );
}

export default App;
