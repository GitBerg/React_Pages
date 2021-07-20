import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
    state = {
      name: 'Berg',
      counter: 0
    };

  handleAClick = (event) =>{
    event.preventDefault();
    const{ counter } = this.state;
    this.setState({counter: counter + 1})
  }

  handlePClick = () => {
    const { name } = this.state;
    this.setState({name:'Gutto'});
  }
   
  render() {
    const { name, counter } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p onClick={this.handlePClick}>
            {name} {counter}
          </p>
          <a
            onClick={this.handleAClick}
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gutemberg 
          </a>
        </header>
      </div>
    );
  }
}

export default App;
