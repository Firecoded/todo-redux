import types from './types';
import axios from 'axios';

const BASE_URL = 'http://api.reactprototypes.com';
const API_KEY = '?key=c618_fire';

export function getAllListData(){
	const resp = axios.get(`${BASE_URL}/todos${API_KEY}`);


	return {
		type: types.GET_ALL_LIST_DATA,
		payload: resp 
	};
}

export function addItemToList(item){
	const resp = axios.post(`${BASE_URL}/todos${API_KEY}`, item);

	return {
		type: types.ADD_ITEM_TO_LIST,
		payload: resp
	};
}
