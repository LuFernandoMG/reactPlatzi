import React from 'react';
import { Link } from 'react-router-dom';
import Badge from '../components/Badge';
import DeleteBadgeModal from '../components/DeleteBadgeModa';
import confLogo from '../images/platziconf-logo.svg';

// function useIncreaseCount(max) {
//     const [ count, setCount ] = React.useState(0)

//     if (count > max) {
//         setCount(0);
//     }

//     return [count, setCount];
// }

function BadgeDetails(props) {
    // const [ count, setCount ] = useIncreaseCount(4);
    const badge = props.badge;
    return (
        <div>
            <div className="BadgeDetails__hero">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <img src={confLogo} alt="Logo conf" />
                        </div>
                        <div className="col-6 BadgeDetails__hero-attendant-name">
                            <h1>{badge.firstName} {badge.lastName}</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Badge
                            firstName={badge.firstName}
                            lastName={badge.lastName}
                            email={badge.email}
                            twitter={badge.twitter}
                            jobTitle={badge.jobTitle}
                        />
                    </div>
                    <div className="col">
                        <h2>Actions</h2>
                        <div>
                            <div>
                                {/* <button onClick={() => {
                                    setCount(count + 1)}} className="m-3 btn btn-primary">
                                    Increase Count {count}
                                </button> */}
                                <Link to={`/badges/${badge.id}/edit`} className='btn btn-primary mb-4'>
                                    Edit
                                </Link>
                            </div>
                            <div>
                                <button onClick={props.onOpenModal} className='btn btn-danger mb-4'>
                                    Delete
                                </button>
                                <DeleteBadgeModal 
                                onClose={props.onCloseModal} 
                                isOpen={props.modalIsOpen} 
                                onDeleteBadge={props.onDeleteBadge}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BadgeDetails;