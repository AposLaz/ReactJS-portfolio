import './App.css';
import NavMenu from './components/NavMenu';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import About from './pages/About';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'react-icons'
import Footer from './components/Footer'
// import ScrollToTop from './components/ScrollToTop';
import SmoothScrollBar from './components/SmoothScrollBar';


function App() {
  return (
    <>
      <Router>
        <NavMenu />
        <SmoothScrollBar >
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route exact path='/about' element={<About />}/>
          <Route exact path='/projects' element={<Projects />}/>
          <Route exact path="/contact" element={<Contact />}/>
        </Routes>
        <Footer />
        </SmoothScrollBar>
      </Router>
    </>
  );
}

export default App;
