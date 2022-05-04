import "../css/ProjectCard.css";
import React, { useState } from 'react';

function ProjectCard(props) {

    const [name] = useState(props.name);
    const [description] = useState(props.description);

    return (
        <div class="project-card" onClick={() => window.location.href = "https://github.com/henry-herrmann/" + name}>
            <div class="card__body">
                <span class="tag tag-blue">Github Repository</span>
                <h4>{name}</h4>
                <p>{description === "" ? "Project" : description.join(", ")}</p>
            </div>
            
        </div>
    );
    
}

export default ProjectCard;