import React from 'react';

class BadgeForm extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form was submitted');
        console.log(this.state);
    }

    handleClick = (e) => {
        console.log('There was a click on the button')
    }
    
    render() {
        return(
            <div>
                <h1>New Attendant</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input onChange={this.props.onChange} value={this.props.formValues.firstName} className='form-control' id='firstName' name='firstName' type="text"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input onChange={this.props.onChange} value={this.props.formValues.lastName} className='form-control' id='lastName' name='lastName' type="text"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input onChange={this.props.onChange} value={this.props.formValues.email} className='form-control' id='email' name='email' type="email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="jobTitle">Job Title</label>
                        <input onChange={this.props.onChange} value={this.props.formValues.jobTitle} className='form-control' id='jobTitle' name='jobTitle' type="text"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="twitter">Twitter</label>
                        <input onChange={this.props.onChange} value={this.props.formValues.twitter} className='form-control' id='twitter' name='twitter' type="text"/>
                    </div>
                    <button type='submit' onClick={this.handleClick} className="btn btn-primary">Save</button>
                    </form>
            </div>
        )
    }
}

export default BadgeForm;