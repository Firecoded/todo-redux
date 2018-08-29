import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getSingleItem, deleteItem, resetError} from '../actions';

class ViewItem extends Component {
	componentDidMount() {
		const {id} = this.props.match.params;
		this.props.getSingleItem(id);
	}
	componentWillUnmount() {
		this.props.resetError();
	}
	handleDelete(){
		this.props.deleteItem(this.props.match.params.id);
	}
	render() {
		console.log(this.props.item)
		if(this.props.error){
			return (
				<h2 className = 'center red-text'>{this.props.error}<button onClick = {()=>{this.props.history.push('/');}}className = 'btn red'>GTFO!</button></h2>
			)
		}
		const {title, details} = this.props.item;
		return (
			<div>
				<h1 className = 'center light-blue-text light-blue-darken-3'>View Item </h1>
				<div className = 'card cyan lighten-5 '>
					<div className = 'card-content light-blue-text light-blue-accent-4'><span className = 'indigo-text indigo-darken-2'>Title: </span>{title}
						<button onClick = {()=>{this.props.history.push('/');}}className = 'btn green darken-4 right'>Back to List</button>
					</div>
					<div className = 'card-content light-blue-text light-blue-accent-4'><span className = 'indigo-text indigo-darken-2'>Details: </span>{details}
						<button className = 'btn red darken-2 right' onClick = {this.handleDelete.bind(this)}>Delete Item</button>
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state){
	return {
		item: state.list.single,
		error: state.list.error
	}
}
export default connect(mapStateToProps, {
getSingleItem: getSingleItem,
deleteItem: deleteItem,
resetError: resetError
})(ViewItem);
