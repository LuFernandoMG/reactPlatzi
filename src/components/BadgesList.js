import React from 'react';
import './styles/BadgesList.css';
import { Link } from 'react-router-dom';
import Gravatar from './Gravatar';

function useSearchBadges(badges) {
    
    const [ query, setQuery ] = React.useState('');
    const [ filteredBadges, setFilteredBadges ] = React.useState(badges)
    
    React.useMemo(() => { 
        const result = badges.filter(badge => {
        return `${badge.firstName} ${badge.lastName}`
            .toLowerCase()
            .includes(query.toLowerCase())
        });

        setFilteredBadges(result)
    }, [ badges, query ]);

    return { query, setQuery, filteredBadges }
}

function BadgesList(props) {
    const badges = props.badges;
    const { setQuery, query, filteredBadges } = useSearchBadges(badges);
    if (filteredBadges.length === 0) {
        return (
            <div>
            <div className="form-group">
                <label htmlFor="Search">Filter Badges</label>
                <input
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value);
                    }}
                    placeholder='Search Badge'
                    type="text"
                    name="Search"
                    id="Search"
                    className="form-control"
                />
            </div>
                <h3>No encontramos ningún badge</h3>
                <p>¿Por qué no pruebas a registrar una tú?</p>
                <Link to='/badges/new' className='btn btn-primary'>Registrar</Link>
            </div>
        )
    }
    return (
        <div className="BadgesList">
            <div className="form-group">
                <label htmlFor="Search">Filter Badges</label>
                <input
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value);
                    }}
                    placeholder='Search Badge'
                    type="text"
                    name="Search"
                    id="Search"
                    className="form-control"
                />
            </div>
            <ul className="list-unstyled">
                {filteredBadges.map((badge) => {
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
        </div>
    )
}

export default BadgesList;