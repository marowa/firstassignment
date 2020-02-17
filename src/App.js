import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import UserInput from './Components/UserInput/UserInput';
import UserOutput from './Components/UserOutput/UserOutput';
import Validation from './Components/Validation/Validation';
import Char from './Components/Char/Char';

class App extends Component{
  state={
    username: 'Marwa',
    userInput:''
  }

  inputChangeHandler=(event)=>{
    this.setState({userInput:event.target.value});

  }

  changeUsernameHandler=(event)=>{
    this.setState({username: event.target.value});
  }

  deleteCharHandler = (index)=>{
    const txt=this.state.userInput.split('');
    txt.splice(index,1);
    const updatedtxt=txt.join('');
    this.setState({userInput:updatedtxt});
  }

  render(){
    const CharList=this.state.userInput.split('').map((ch, index)=>{
      return <Char 
      character={ch} 
      key={index} 
      clicked={()=>this.deleteCharHandler(index)}/>
    });
    return(
      /*<div className="App">
        <UserInput 
        changed={this.changeUsernameHandler}
        value={this.state.username}/>
        <UserOutput  userName={this.state.username}/>
        <UserOutput  userName="Marowa"/>
      </div>*/
      <div>
        <input type="text" 
        onChange={this.inputChangeHandler}
        value={this.state.userInput}/>
        <p>{this.state.userInput}</p>
        <Validation inputLength={this.state.userInput.length}/>
        {CharList}
      </div>
    );
  };
}

export default App;
