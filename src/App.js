import React, { Component } from 'react';
import './App.css';
import Card from './components/Card'

/*
import portfileImg from './images/profile.jpg';
import logoImg from './images/logo.png';
const headline = "Learning React? Start Small.";
const name = "John Doe";
const message = "Pastry I love chocolate wafer danish. Biscuit apple pie fruitcake bear claw. Wafer jelly beans brownie tart I love.";
const footer="glorious.web.design"
*/

const members = [
  { name: "Amy",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    footer: "amy.com",
    headline: "Ut enim ad minim veniam",
    profileImg: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    logoImg: "http://pngimg.com/uploads/perfume/perfume_PNG10323.png"
  },
  { name: "Jack",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    footer: "jack.ca",
    headline: "Ut enim ad minim veniam",
    profileImg: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    logoImg: "http://pngimg.com/uploads/globe/globe_PNG58.png"
  },
  { name: "Hank",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    footer: "hank.co",
    headline: "Ut enim ad minim veniam",
    profileImg: "https://images.pexels.com/photos/36479/man-stress-male-face.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    logoImg: "http://pngimg.com/uploads/smiley/smiley_PNG193.png"
  }
];


class App extends Component {

  render() {
    let memberCardList;
    memberCardList = members.map(member => {
        return (
          <Card
            profileUrl={member.profileImg}
            logoUrl={member.logoImg}
            headline={member.headline}
            name={member.name}
            message={member.message}
            footer={member.footer} />
        )
    });

    return (
      <div className="App">
          {/* <Card
            profileUrl={portfileImg}
            logoUrl={logoImg}
            headline={headline}
            name={name}
            message={message}
            footer={footer}
          /> */}
          {memberCardList}
      </div>
    );
  }
}

export default App;
