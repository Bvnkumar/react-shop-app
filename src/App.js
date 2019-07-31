import React from 'react';
import logo from './logo.svg';
import './App.css';

class LoginSample extends React.Component {
  constructor(){
    super();
    this.state={name:''}
  }
  componentWillMount(){
    fetch('http://localhost:3001').then(results=>{
return results.json()
    }).then(data=>{
      console.log("data",data)
      this.setState({name:data.name})
    })
  }
  render(){
    return (<div>Hello, this is {this.state.name}</div>)
  }
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default LoginSample;
