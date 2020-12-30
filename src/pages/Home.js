import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Home.css';
import stars from '../images/stars.svg';
import confLogo from '../images/badge-header.svg';

class Home extends React.Component {
    render() {
        return (
            <div className="Home">
                <img src={stars} alt='stars background' className='Home__imgBackground letf' />
                <img src={stars} alt='stars background' className='Home__imgBackground right' />
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6 col-12'>
                            <img src={confLogo} alt='Logo' className='Home__logo' />
                        </div>
                        <div className='col-md-6 col-12'>
                            <div className="Home__right">
                                <div className="Home__info">
                                    <h2 className='Home__title'>¡Bienvenidos a la conferencia más importante del año!</h2>
                                    <p className='Home__text'>En PlatziConf tenemos el gusto de recibir a todos aquellos que quieren cambiar el internet, unete a todos sus participantes y obtén tu propio Badge personalizado.</p>
                                </div>
                                <Link className='Home__Link btn btn-primary' to='/badges'>¡Quiero mi <b>Badge!</b></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default Home;