import React, { Component } from 'react';

class Track extends Component {
  
  render () {
    const { moduleName } = this.props;

    const headingStyle = {
      backgroundColor: "dodgerblue",
      color: "white",
      padding: "10px",
    }

    const pStyle = {
      height: "100px",
      width: "100px",
      display: "inline-block",
      backgroundColor: "red",
      margin: "10px",
    }

    return (
      <div className="App">
        <h3 style={ headingStyle }>{ this.props.trackName }</h3>
        <div>
          <p style={ pStyle }>{ moduleName }</p>
          <p style={ pStyle }>step 2</p>
          <p style={ pStyle }>step 3</p>
          <p style={ pStyle }>step 4</p>
        </div>
      </div>
    );
  }
}

export default Track;
