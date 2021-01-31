import './App.css';
import React, { Component } from 'react';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {
  state = {
    users : [ 
      {id:0, name: 'Title1'},
      {id:1, name: 'Title2'},
      {id:2, name: 'Title3'},
    ]
  }


  titleChangeHandler = index => e =>{
    this.setState(state =>{
      const list = state.users.map(item => {
        if(item.id === index){
          item.name = e.target.value;
          return item;
        }
        else
          return item;
      });
      
      return list;
    })
  }
      
    
  
  render(){
    const listStyle = {
      listStyle: 'none',
      border: '1px solid #ccc',
      margin: '20px auto',
      paddingBottom : '50px',
      boxShadow: '0 5px 5px #888'
    }

    const unorderdList = {
      width: '40%',
      margin: 'auto',
    }

    

    return (
      <div className="App">
        <h1> Assignment I </h1>
        <hr/>
          
        <ul style={unorderdList}>
          {this.state.users.map((item, index) => (
            <li key={index} style={listStyle}>
              <UserOutput username= {item.name} />
              <UserInput changed={this.titleChangeHandler(index)} value={item.name}/>
            </li>
          ))}/
        </ul>

      </div>
    );
  }
}

export default App;
