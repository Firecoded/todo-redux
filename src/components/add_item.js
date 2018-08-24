import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {addItemToList} from '../actions';

class AddItem extends Component {

	handleAddItem = async (values) => {
		console.log(this.props)
		await this.props.addItemToList(values);
		this.props.history.push('/');
	}

	renderInput({label, input, meta: {touched, error}}){
		return(
			<div className = 'row'>
				<div className = 'col s12'>
					<label>{label}</label>
					<input {...input} type = 'text'/>
					<p className = 'red-text'>{touched && error}</p>
				</div>
			</div>
		)
	}

	render(){
		const {handleSubmit} = this.props;

		return (
			<div>
				<h1 className = 'center'>Add Item</h1>
					<div className = 'row'>
					<div className = 'col s12 right-align'>
						<Link to = '/' className = 'btn green darken-4'>Back to List</Link>
					</div>
				</div>
				<div className = 'row'>
					<form onSubmit = {handleSubmit(this.handleAddItem)} className = 'col s12 m8 offset-m2'>
						<Field name = "title"  label = 'Title' component = {this.renderInput}/>
						<Field name = "details" label = 'Details' component = {this.renderInput}/>
						<button className = 'btn red'>Add</button>
					</form>
				</div>	
			</div>	
		);
	}
}

function validate(values){
	const {title, details} = values;
	const errors = {};
	if(!title){
		errors.title = "Type something into title";
	}
	if(!details){
		errors.details = "Type something into Details"
	}
	return errors;
}

AddItem = reduxForm({
	form: 'add-item',
	validate: validate
})(AddItem);

export default connect(null, {addItemToList})(AddItem);
