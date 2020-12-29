import React from 'react';
import './styles/BadgesList.css';

class BadgesList extends React.Component {

    render() {
        return (
            <ul className="list-unstyled BadgesList">
                {this.props.badges.map((badge) => {
                    return (
                        <li key={badge.id} className='BadgesList__element'>
                            <div className="row">
                                <div className="col-3">
                                    <img src={badge.avatarUrl} alt='avatar' />
                                </div>
                                <div className="col-9">
                                    <p>{badge.jobTitle}</p>
                                    <span>
                                        <h3>{badge.firstName} <br /> {badge.lastName} </h3>
                                        <button className='btn btn-primary'>Ver más</button>
                                    </span>
                                    <div className='BadgesList__element-twitter'>
                                        <small>@{badge.twitter}</small>
                                    </div>
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        )
    }
}

export default BadgesList;