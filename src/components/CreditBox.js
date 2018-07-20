import React, {Component} from 'react';

const CreditBox = props => (
  <div className="creditbox">
    <img src={props.profileImg} alt={props.name} className="profile-img" />
    <div>
      <p>
        {props.name}
      </p>
    </div>
  </div>
);


export default CreditBox;
