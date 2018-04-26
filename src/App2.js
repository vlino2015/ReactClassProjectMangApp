import React, { Component } from 'react';

class App2 extends Component {

    constructor(){
        super();
        this.state= {val:0}
    }

    update(){
        this.setState({val: this.state.val + 1})
    }

    componentDidMount(){
        console.log("ComoponentDidMount")
    }
    componentWillMount(){
        console.log("ComponentWillMount");
    }

    

    render(){
        console.log("rendered")

        return(

            <button onClick={this.update.bind(this)}>{this.state.val}</button>
        )

    }
}

export default App2