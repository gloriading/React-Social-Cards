import React, {Component} from 'react';
import Logo from './Logo';
import Headline from './Headline';
import CreditBox from './CreditBox';
import MessageBox from './MessageBox';
import FooterBox from './FooterBox';


export default class Card extends Component {

  render(){
    return(
      <div className="card">
        <div className="card-header">
          <Logo logo={this.props.logoUrl} />
          <Headline headline={this.props.headline} />
          <CreditBox
            profileImg={this.props.profileUrl} name={this.props.name}/>
        </div>
        <div className="card-body">
          <Headline headline={this.props.headline} />
          <MessageBox message={this.props.message} />
          <FooterBox footer={this.props.footer} />
        </div>
      </div>
    );
  }
}
