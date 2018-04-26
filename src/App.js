import React, { Component } from 'react';
import Projects from './components/Projects'
import AddProjects from './components/AddProjects'

import uuid from 'uuid'
import './App.css';

class App extends Component {
  
  constructor(){
    super();
    this.state = {
      projects: [],
      todos: []
    }
  }

  //this.setState({}, callfunction)

  getToDos(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => this.setState({todos:data}, function(){
      console.log(this.state)
    }))
  }

  getProjects(){
    this.setState({projects:[
      {
        id: uuid.v4(),
        title: "Digital Crafts",
        category: "Coding Boot Camp"
      },
      {
        id: uuid.v4(),
        title: "U of H",
        category: "Houston Pubblic University"
      },
      {
        id: uuid.v4(),
        title: "U.T.",
        category: "Texas Public University"
      }
    ]})
  }

  componentWillMount(){

    this.getProjects()
    this.getToDos()
    
  }

  componentDidMount(){
    this.getToDos()

  }

  handleAddProject(project){
    console.log("what is being sent to us")
    console.log(project)

    let projects  = this.state.projects;
    projects.push(project);
    this.setState({projects:projects})
  }

  handleDeleteProject(id){

    console.log(id);
    let projects = this.state.projects;

    let index = projects.findIndex(x => x.id === id);

    projects.splice(index, 1);

    this.setState({projects:projects})
  }
  render() {

    console.log(this.state)
    
    return (
      <div >
        <Projects onDelete={this.handleDeleteProject.bind(this)} projects={this.state.projects} />
        <AddProjects addProjects={this.handleAddProject.bind(this)} />
      </div>
    );
  }
}

export default App;
