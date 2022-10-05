import "../css/Footer.css";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Footer() {
    const navigate = useNavigate();
    const location = useLocation();

    const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
      function handleWindowResize() {
        setWindowSize(getWindowSize());
      }
  
      window.addEventListener('resize', handleWindowResize);
  
      return () => {
        window.removeEventListener('resize', handleWindowResize);
      };
    }, []);

    if(location.pathname !== "/impressum" && windowSize.innerWidth > 924){
        return (
            <footer className="footer" onClick={ () => navigate("/impressum")}>Impressum</footer>
        );
    }
}

function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
  }

export default Footer;