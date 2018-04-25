import React, { Component } from 'react';


class ProjectItem extends Component {
  render() {
    return (
     <li>
         <b>{this.props.project.title}</b> - {this.props.project.category}
     </li>
    );
  }
}

export default ProjectItem