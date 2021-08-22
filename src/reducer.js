import {CHANGE_SEARCH_FIELD} from './constants';
const intialState={
	searchfield:'';
}

export const searchRobots =(state=intialState,action={})=>{
	switch(action.type){
		case CHANGE_SEARCH_FIELD:
			return Object.assign({},state,searchfield:action.payload);
		default :
			return state;
	}
}