import React from 'react';
import './styles/BadgeNew.css';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import heroImage from '../images/badge-header.svg';

class BadgeNew extends React.Component {
    state = { form: {
            firstName: '',
            LastName: '',
            email: '',
            jobTitle: '',
            twitter: '',
    } };

    handleChange = (e) => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            },
        });
    };

    render() {
        return (
            <div>
                <div className='BadgeNew__hero'>
                    <img src={heroImage} alt="logo" className="img-fluid" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge firstName={this.state.form.firstName} email={this.state.form.email} lastName={this.state.form.lastName} jobTitle={this.state.form.jobTitle} urlImage='https://www.gravatar.com/avatar?d=identicon' twitter={this.state.form.twitter} />
                        </div>
                        <div className="col">
                            <BadgeForm onChange={this.handleChange} formValues={this.state.form} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BadgeNew;