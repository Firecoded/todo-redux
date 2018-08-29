import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getAllListData} from '../actions';
import {Link} from 'react-router-dom';

class List extends Component {
	componentDidMount() {
		this.props.getAllListData();
	}


	render() {
		const listElements = this.props.list.map(item => {
			return (
				<li className = 'collection-item' key = {item._id} >
					<Link to = {`/item/${item._id}`} className = 'collection-item cyan lighten-5  blue-text blue-accent-2'>{item.title}</Link>
				</li>)
		});
		return (
			<div>
				<h1 className ='center light-blue-text light-blue-darken-3'>Redux Todo</h1>
				<div className = 'row'>
					<div className = 'col s12 right-align'>
						<Link to = '/add' className = 'btn green accent-4'>Add Item</Link>
					</div>
				</div>
				<ul className = 'collection'>
					{listElements}
				</ul>
			</div>	
		);
	}
}

function mapStateToProps(state){
	return {
		list: state.list.all
	}
}

export default connect(mapStateToProps, {getAllListData: getAllListData})(List);
