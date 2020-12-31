import React from 'react';
import './styles/BadgesList.css';
import { Link } from 'react-router-dom';
import Gravatar from './Gravatar';

class BadgesList extends React.Component {

    render() {

        if (this.props.badges.length === 0) {
            return (
                <div>
                    <h3>No encontramos ningún badge</h3>
                    <p>¿Por qué no pruebas a registrar una tú?</p>
                    <Link to='/badges/new' className='btn btn-primary'>Registrar</Link>
                </div>
            )
        }
        return (
            <ul className="list-unstyled BadgesList">
                {this.props.badges.map((badge) => {
                    return (
                        <li key={badge.id} className='BadgesList__element'>
                            <div className="row">
                                <div className="col-3">
                                    <Gravatar email={badge.email} alt='avatar' />
                                </div>
                                <div className="col-9">
                                    <p>{badge.jobTitle}</p>
                                    <span>
                                        <Link className='text-reset text-decoration-none' to={`/badges/${badge.id}`}><h3>{badge.firstName} <br /> {badge.lastName} </h3></Link>
                                        <Link to={`/badges/${badge.id}/edit`} className='btn btn-primary'>Editar</Link>
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