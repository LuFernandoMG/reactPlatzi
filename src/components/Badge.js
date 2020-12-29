import React from 'react';
import './styles/Badge.css';
import '../global.css';
import confLogo from '../images/badge-header.svg';

class Badge extends React.Component {
  render() {


    return (
      <div className='Badge'>
        <div className='Badge__header'>
          <img src={confLogo} alt="Logo de la conferencia" />
        </div>

        <div className='Badge__section-name'>
          <img className='Badge__avatar' src={this.props.urlImage} alt="Avatar" />
          <h1>
            {this.props.firstName} <br /> {this.props.lastName}
          </h1>
        </div>

        <div className='Badge__section-info'>
          <p>{this.props.jobTitle}</p>
          <p>@{this.props.twitter}</p>
        </div>

        <div className='Badge__footer'>#platziconf</div>
      </div>
    );
  }
}

export default Badge;
