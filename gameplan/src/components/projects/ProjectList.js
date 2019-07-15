import React from "react";
import PropTypes from "prop-types";

const ProjectList = props => {
  return (
    <div className="project-list section">
      <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text-darken-3">
          <span className="card-title">Project Title</span>
          <p>Posted by Hassan Masoud</p>
          <p className="grey-text">3rd September, 2am</p>
        </div>
      </div>
      <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text-darken-3">
          <span className="card-title">Project Title</span>
          <p>Posted by Hassan Masoud</p>
          <p className="grey-text">3rd September, 2am</p>
        </div>
      </div>
      <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text-darken-3">
          <span className="card-title">Project Title</span>
          <p>Posted by Hassan Masoud</p>
          <p className="grey-text">3rd September, 2am</p>
        </div>
      </div>
    </div>
  );
};

ProjectList.propTypes = {};

export default ProjectList;
