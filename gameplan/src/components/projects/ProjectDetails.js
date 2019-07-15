import React from "react";

const ProjectDetails = props => {
  const id = props.match.params.id;
  return (
    <div className="container sectoin project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            corrupti deleniti quam non aliquid necessitatibus. Veritatis,
            placeat! Iure unde autem tempore. Doloremque aliquam reprehenderit
            esse ex dignissimos magni, asperiores voluptatem.
          </p>
        </div>
        <div className="card-action grey-lighten-4 grey-text">
          <div>Posted by Hassan Masoud</div>
          <div>3rd September, 2am</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
