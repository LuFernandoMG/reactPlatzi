import React from 'react';
import './styles/BadgeNew.css';
import Badge from '../components/Badge';
import PageLoading from '../components/PageLoading';
import BadgeForm from '../components/BadgeForm';
import heroImage from '../images/platziconf-logo.svg';
import api from '../api';

class BadgeNew extends React.Component {
    state = {
        loading: false,
        error: null,
        form: {
            firstName: '',
            lastName: '',
            email: '',
            jobTitle: '',
            twitter: '',
        }
    };

    handleChange = (e) => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            },
        });
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        this.setState({ loading: true, error: null });

        try {
            await api.badges.create(this.state.form);
            this.setState({ loading: false });
            this.props.history.push('/badges');
        } catch (error) {
            this.setState({ loading: false, error: error });
        }
    };

    render() {

        if (this.state.loading === true) {
            return (<PageLoading />);
        }

        return (
            <div>
                <div className='BadgeNew__hero'>
                    <img src={heroImage} alt="logo" className="img-fluid" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge
                                firstName={this.state.form.firstName || 'First Name'}
                                email={this.state.form.email}
                                lastName={this.state.form.lastName || 'Last Name'}
                                jobTitle={this.state.form.jobTitle || 'Job title'}
                                twitter={this.state.form.twitter || 'TwitterUser'}
                                error={this.state.error}
                            />
                        </div>
                        <div className="col">
                            <h1>New Attendant</h1>
                            <BadgeForm onChange={this.handleChange} onSubmit={this.handleSubmit} formValues={this.state.form} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BadgeNew;