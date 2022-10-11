 import {useReducer, ReactElement} from 'react';
 import './ToDoInput.css'

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

function ToDoInput({
 	submit
 }): ReactElement {

	const [formState, dispatch] = useReducer(todoFormReducer, initialState());

	const onSubmit = e => {
					e.preventDefault();
					submit(formState);
					dispatch({type: 'submit'})
				}

 	return (
 		<form
 			id="new-todo-form"
 			onSubmit={onSubmit}
 		>
			<input
				className="border-black border-2"
				value={formState.text}
				onChange={e => dispatch({type: 'text', value: e.target.value })}
				type="text"
			/>
			<button 
				className="px-3"
				disabled={!formState.text}
				type="submit"
			>Create</button>
		</form>
	);
 }

 export default ToDoInput;
