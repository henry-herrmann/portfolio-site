import './css/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Impressum from './pages/Impressum';
import Footer  from './components/Footer';


function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='home' element={<Home />} />
        <Route path='projects' element={<Projects />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='impressum' element={ <Impressum />} />
        <Route path="*" element={<Home />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
