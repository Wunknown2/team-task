import React, { createContext, useContext, useReducer } from 'react';
import { ACTIONS } from '../helpers/consts';

const postContext = createContext();
export const usePosts = () => useContext(postContext);

const INIT_STATE = {
	posts: [],
};

const reducer = (state = INIT_STATE, action) => {
	switch (action.type) {
		case ACTIONS.GET_POSTS:
			return { ...state, posts: action.payload };
		default:
			return state;
	}
};

export default function PostContextProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, INIT_STATE);
	const values = {};
	return <postContext.Provider value={values}>{children}</postContext.Provider>;
}
