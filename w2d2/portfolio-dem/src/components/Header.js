import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to my Portfolio</h1>
        <div>
          <button>Home</button>
          <button>Projects</button>
          <button>About Me</button>
          <button>Contact Me</button>
        </div>
      </div>
    );
  }
}

export const numberOfProjects = 3;
export default Header;