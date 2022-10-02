import "../css/About.css";

function About(){
   return (
       <div className="about">
            <div className="about title">
                <h1>About</h1>
            </div>

            <div className="about container">
                <div className="about container info">
                    <h3>Personal info</h3>
                    <div className="info text">
                        <p>Hey, I'm Henry and I'm a computer science student. <br></br>I frequently work on various projects ranging from backend to full app solutions.</p>
                    </div>
                </div>
                <div className="about container profile">
                    <h3>Github profile</h3>
                    <div className="profile text">
                        <a href="https://github.com/henry-herrmann">henry-herrmann</a>
                    </div>
                </div>
                <div className="about container background">
                    <h3>My programming career</h3>
                    <div className="background text">
                        <p>Languages I use:</p>
                        <ul>
                            <li>Java</li>
                            <li>JavaScript</li>
                            <li>Dart</li>
                        </ul>
                        <br></br>
                        <p>My programming career mostly started with developing Minecraft plugins in Java. Later on I had the motivation to extend my programming skills and therefore learnt JavaScript due to the syntax similarities with Java. As of now, JS is currently my most used language as I mainly create my REST-APIs with NodeJS. Earlier in 2022, app development became one of my interests as I developed a project using Flutter.</p>
                    </div>
                </div>
            </div>
       </div>
   ) 
}

export default About;
