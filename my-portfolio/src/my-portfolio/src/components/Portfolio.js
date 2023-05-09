import React from 'react';

function Portfolio() {
  return (
    <div>
      <h2>Portfolio</h2>
      <div className="project">
        <a href="https://www.example.com/project1" target="_blank" rel="noopener noreferrer">
          <img src="https://www.example.com/project1-thumbnail.jpg" alt="Project 1" />
          <p>Project 1</p>
        </a>
        <a href="https://github.com/myusername/project1" target="_blank" rel="noopener noreferrer">View on GitHub</a>
      </div>
      <div className="project">
        <a href="https://www.example.com/project2" target="_blank" rel="noopener noreferrer">
          <img src="https://www.example.com/project2-thumbnail.jpg" alt="Project 2" />
          <p>Project 2</p>
        </a>
        <a href="https://github.com/myusername/project2" target="_blank" rel="noopener noreferrer">View on GitHub</a>
      </div>
      <div className="project">
        <a href="https://www.example.com/project3" target="_blank" rel="noopener noreferrer">
          <img src="https://www.example.com/project3-thumbnail.jpg" alt="Project 3" />
          <p>Project 3</p>
        </a>
        <a href="https://github.com/myusername/project3" target="_blank" rel="noopener noreferrer">View on GitHub</a>
      </div>
    </div>
  );
}

export default Portfolio;
