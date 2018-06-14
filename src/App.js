import React, { Component } from 'react';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      Projects :[]
    }
  }
  componentWillMount(){
    this.setState({projects: [
      {
        title: 'Bussiness Website',
        category: 'Web Design'
      },
      {
        title: 'social App',
        category: 'Mobile Development'
      },
      {
        title:'Ecommerce Shopping Cart',
        category: 'Web Development'
      }
    ]});

  }

  handleAddProject(project){
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:projects });
  }
  render() {
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)} />
        <Projects projects={this.state.projects}/>
        
      </div>
    );
  }
}
 
export default App;
