import React, { Component } from 'react';
import './App.css';
import portfileImg from './images/profile.jpg';
import logoImg from './images/logo.png';
import Card from './components/Card'

const headline = "Learning React? Start Small.";
const name = "John Doe";
const message = "Pastry I love chocolate wafer danish. Biscuit apple pie fruitcake bear claw. Wafer jelly beans brownie tart I love.";
const footer="glorious.web.design"

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
            footer={footer}
          />
      </div>
    );
  }
}

export default App;
