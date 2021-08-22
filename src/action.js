import {CHANGE_SEARCH_FIELD} from './constants'

export const serSearchField = (text)=>({
	type:'CHANGE_SEARCH_FIELD',
	paylod:text
})