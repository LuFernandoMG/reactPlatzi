import React from 'react';
import { Link } from 'react-router-dom';
import error404 from '../images/img404.webp';
import './styles/NotFound.css';


class NotFound extends React.Component {
    render() {
        return (
            <div className="NotFound">
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <img src={error404} alt='Logo' className='NotFound__logo' />
                            <h2 className='NotFound__title'>Parece que hubo un error...</h2>
                            <p className='NotFound__text'>Esta página no existe, pero no te preocupes, nosotros te llevamos de nuevo a dónde debes.</p>
                            <Link className='btn btn-primary' to='/'>Volver</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NotFound;