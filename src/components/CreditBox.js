import React, {Component} from 'react';

const CreditBox = props => (
  <div className="credit-box">
    <img src={props.profileImg} alt={props.name} className="profile-img" />
    <p className="profile-name"> {props.name}</p>
  </div>
);


export default CreditBox;
