 import {useReducer, ReactElement} from 'react';

const initialState = () => ({text: ""});

function todoFormReducer(state, action) {
	switch (action.type) {
		case 'text':
			return {...state, text: action.value};
		case 'submit':
			return initialState();
    	default:
      		throw new Error();
	}
}

function TodoInput({
 	submit
 }): ReactElement {

	const [formState, dispatch] = useReducer(todoFormReducer, initialState());

 	return (
 		<div id="new-todo">
			<input
				className="border-black border-2"
				value={formState.text}
				onChange={e => dispatch({type: 'text', value: e.target.value })}
				type="text"
			/>
			<button 
				className="px-3"
				disabled={!formState.text}
				onClick={e => {
					submit(formState);
					dispatch({type: 'submit'})
				}}
			>Create</button>
		</div>
	);
 }

 export default TodoInput;
