import React, { Component } from 'react';
import uuid from 'uuid'
import PropTypes from 'prop-types'


class AddProjects extends Component {

    constructor(){
        super();
        this.state = {
            newProject:{}
        }
    }
    static defaultProps = {
        categories: ['Coding Boot Camp', 'Houston Pubblic University', 'Texas Public University']
    }

    handleSubmit(e){
        
        console.log("submitted");
        console.log(this.refs.title.value);
        e.preventDefault();

        //this.setState({}, callback)

        if(this.refs.title.value === ''){
            alert('title is required')
        }else{
            this.setState({newProject:{
                id: uuid.v4(),
                title: this.refs.title.value,
                category: this.refs.category.value
            }},  function(){
                
                this.props.addProjects(this.state.newProject);
            })
        }

    }

  render() {

    let  categoryOptions = this.props.categories.map(category =>{
            
        return <option key={category} value={category}>{category}</option>

    })
    return (
    <div>
        <h1>Add Projects</h1>

        <form onSubmit={this.handleSubmit.bind(this)}>
           <div>
               <label>Title</label><br />
               <input type="text" ref="title"/>
          </div>

          <div>
               <label>Category</label><br />
               <select ref="category">
                   
                    {categoryOptions}
               </select>
          </div> 
          <input type="submit" value="submit"/>
        </form>
     </div>
    );
  }
}

AddProjects.propTypes = {
    categories: PropTypes.array,
    addProject: PropTypes.func
}

export default AddProjects