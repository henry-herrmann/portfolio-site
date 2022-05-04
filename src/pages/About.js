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
                        <p>Hey, I'm Henry and I'm a computer science student. <br></br>As of right now, I regularly work on some private projects with the aim to advance in programming languages and to tackle every day issues I encounter.</p>
                    </div>
                </div>
                <div className="about container profile">
                    <h3>Github profile</h3>
                    <div className="profile text">
                        <a href="https://github.com/henry-herrmann">henry-herrmann</a>
                    </div>
                </div>
                <div className="about container background">
                    <h3>Programming background</h3>
                    <div className="background text">
                        <p>Languages I use:</p>
                        <ul>
                            <li>Java</li>
                            <li>JavaScript</li>
                            <li>Dart</li>
                            <li>PHP</li>
                        </ul>

                        <p>My programming career pretty much started with developing Minecraft plugins in Java, where I developed various minigames and other enhancements to the gameplay of my own server. Later on I learnt JavaScript due to the syntax similarities with Java which made it easier for me to get into this new language. As of now, JS is currently my most used language due to Rest-API development being very convenient with NodeJS. In March 2022, I started with mobile app development for a school project and ended up programming a whole app for a school trip we did.</p>
                    </div>
                </div>
            </div>
       </div>
   ) 
}

export default About;
