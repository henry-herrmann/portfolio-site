import "../css/Projects.css";
import axios from "axios";
import ProjectCard from "../components/ProjectCard";
import React, { useState, useEffect } from 'react';


function Projects(){

    const [repos, setRepos] = useState([]);
    const [fetched, setFetched] = useState(false);


    useEffect(() =>{
        async function fetch() {
            try {
                const result = await axios.get("https://api.github.com/users/henry-herrmann/repos");

                const newRepos = result.data;
    
                setTimeout(() =>{
                    setRepos(newRepos);
                    setFetched(true);
                }, 230);
            } catch (error) {
                
            }
        }

        fetch();
    });

    return (
        <div className="projects">
            <div className="projects title">
                <h1>Projects</h1>
            </div>

            <div className={!fetched ? "loading active" : "loading"}>
                <div className="image"></div>
            </div>

            <div className="projects container">
                {
                    repos.map((repo) =>{
                        return (
                        <ProjectCard name={repo.name} description={repo.topics} />
                        )
                    })
                }
            </div>
        </div> 
    );
    
}

export default Projects;