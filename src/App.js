import React, { Component } from 'react';
import Projects from './components/Projects'
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

  render() {

    console.log(this.state)
    
    return (
      <div >
        <Projects projects={this.state.projects} />
      </div>
    );
  }
}

export default App;
