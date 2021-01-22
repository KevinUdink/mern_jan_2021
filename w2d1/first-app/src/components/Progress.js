import React, { Component } from 'react';

class Progress extends Component {
  render() {
    const boxStyling = {
      display: "inline-block",
      verticalAlign: "top",
      marginTop: "20px",
      height: "400px",
      width: "350px",
      backgroundColor: "green",
      color: "white",
    }

    return (
      <div style={boxStyling}>
        <h3>Instructor Kevin</h3>
      </div>
    )
  }
}

export default Progress;