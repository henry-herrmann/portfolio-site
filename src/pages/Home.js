import "../css/Home.css";
import computer from "../icons/computer.svg";
import person from "../icons/person.svg";
import mail from "../icons/mail.svg";

import { useNavigate } from "react-router-dom";


function Home(){

    let navigate = useNavigate();
    
    return (
        <div className="home">
            <div className="heading">
                <div className="heading image"></div>
                <div className="heading text">
                    <h1>Henry Herrmann - Software Development</h1>
                    <p>Java, JS, Dart and PHP developer.</p>
                </div>
                <div className="heading boxes">
                    <div className="card" onClick={() => navigate('/projects')}>
                        <div className="face face1">
                            <div className="content">
                                <img src={computer} className="computer" alt="yes"></img>
                                <h3>Projects</h3>
                           </div>
                        </div>
                        <div className="face face2">
                            <div className="content">
                                <p>Ever since I first learned Java, I always searched for new projects to develop. Here's an overview of my current projects.</p>
                                <div>Read More</div>
                            </div>
                        </div>
                    </div>
                    <div className="card" onClick={() => navigate('/about')}>
                        <div className="face face1">
                            <div className="content">
                                <img src={person} alt="yes"></img>
                                <h3>About</h3>
                           </div>
                        </div>
                        <div className="face face2">
                            <div className="content">
                                <p>I've been a programmer for around 5 years now, with experience in several programming languages.</p>
                                <div>Read More</div>
                            </div>
                        </div>
                    </div>
                    <div className="card" onClick={() => navigate('/contact')}>
                        <div className="face face1">
                            <div className="content">
                                <img src={mail} alt="yes"></img>
                                <h3>Contact</h3>
                           </div>
                        </div>
                        <div className="face face2">
                            <div className="content">
                                <p>Got a question regarding one of my projects? Just send me an email.</p>
                                <div>Contact me</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    )
    
}

export default Home;