import React, { Component } from 'react';
import Projects from './components/Projects'
import AddProjects from './components/AddProjects'
import './App.css';

class App extends Component {
  
  constructor(){
    super();
    this.state = {
      projects: []
    }
  }

  componentWillMount(){

    this.setState({projects:[
      {
        title: "Digital Crafts",
        category: "Coding Boot Camp"
      },
      {
        title: "U of H",
        category: "Houston Pubblic University"
      },
      {
        title: "U.T.",
        category: "Texas Public University"
      }
    ]})
    
  }

  handleAddProject(project){
    console.log("what is being sent to us")
    console.log(project)

    let projects  = this.state.projects;
    projects.push(project);
    this.setState({projects:projects})
  }

  render() {

    console.log(this.state)
    
    return (
      <div >
        <Projects projects={this.state.projects} />
        <AddProjects addProjects={this.handleAddProject.bind(this)} />
      </div>
    );
  }
}

export default App;
