import React from "react";
import PropTypes from "prop-types";

const ProjectSummary = props => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text-darken-3">
        <span className="card-title">Project Title</span>
        <p>Posted by Hassan Masoud</p>
        <p className="grey-text">3rd September, 2am</p>
      </div>
    </div>
  );
};

ProjectSummary.propTypes = {};

export default ProjectSummary;
