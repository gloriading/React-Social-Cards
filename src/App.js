import React, { Component } from 'react';
import './App.css';
import portfileImg from './images/profile.jpg';
import logoImg from './images/logo.png';
import Card from './components/Card'

const headline = "Learning React? Start Small.";
const name = "John Doe";
const message = "Thunderbird is a screw-top classic. Swine and wine pair well. The Romans named Sangiovese after the blood of Jupiter; that must have been some hangover.";

class App extends Component {

  render() {
    return (
      <div className="App">
          <Card
            profileUrl={portfileImg}
            logoUrl={logoImg}
            headline={headline}
            name={name}
            message={message}
          />
      </div>
    );
  }
}

export default App;
