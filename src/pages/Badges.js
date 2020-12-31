import React from 'react';
import { Link } from 'react-router-dom'
import './styles/Badges.css';
import api from '../api';
import PageLoading from '../components/PageLoading';
import ErrorPage from '../components/ErrorPage';
import BadgesList from '../components/BadgesList';
import confLogo from '../images/badge-header.svg'

class Badges extends React.Component {
    state = {
        loading: true,
        error: null,
        data: undefined,
    }

    componentDidMount () {
        this.fetchData()

        this.intervalId = setInterval(this.fetchData, 5000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    fetchData = async () => {
        this.setState({ loading: true, error: null });

        try {
            const data = await api.badges.list();
            this.setState({ loading: false, data: data })
        } catch (error) {
            this.setState({ loading: false, error: error })
        }
    }

    render() {

        if (this.state.loading === true && !this.state.data) {
            return <PageLoading />
        }

        if (this.state.error) {
            return <ErrorPage error={this.state.error}/>; 
        }

        return (
            <div>
                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img src={confLogo} alt="" className="Badges_conf-logo" />
                        </div>
                    </div>
                </div>

                <div className="Badges__container">
                    <div className="Badges__buttons">
                        <Link to="/badges/new" className='btn btn-primary'>Add badge</Link>
                    </div>

                    <div className="Badges__list">
                        <div className="Badges__container">
                            <BadgesList badges={this.state.data} />
                            {this.state.loading === true && (<p>Loading... <span role='img' aria-label='emoji'>⏰</span></p>)}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Badges;