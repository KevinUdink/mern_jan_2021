import React, { Component } from 'react';

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0,
      dislikes: 0,
      projName: this.props.ProjectName,
      desc: this.props.desc,
    }
  }

  like = () => {
    this.setState( { 'likes': this.state.likes + 1 } );
  }

  dislike = () => {
    this.setState( { 'dislikes': this.state.dislikes + 1})
  }

  render() {
    const { desc } = this.props;

    const projectStyle = {
      border: "1px solid black",
      textAlign: "center",
      display: "inline-block",
      width: "350px",
      margin: "15px"
    }

    return (
      <div style={ projectStyle }>
        <h5>{ this.state.projName }</h5>
        <button onClick={ this.like }>Like Project</button>
        <button onClick={ this.dislike }>Dislike Project</button>
        <p>Net Likes: { 
          this.state.likes - this.state.dislikes < 0 ?
            0
            : this.state.likes - this.state.dislikes
          }</p>
        <p>Likes: { this.state.likes }</p>
        <p>Dislikes: { this.state.dislikes }</p>
        <p>Description:</p>
        <p>{ desc }</p>
      </div>
    )
  }
}

export default Project;
