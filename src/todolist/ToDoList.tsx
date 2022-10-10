import { useState, ReactElement, useReducer } from 'react';
import ToDo from './ToDo.tsx'
import './ToDoList.css';
import * as crypto from 'crypto';



interface Todo {
	uid?: string;
	text: string;
}

const getTodoListItems = (todos: Array<Todo>) => todos.map(({uid, text}) => (
	<ToDo key={uid} uid={uid} text={text}/>
));

const initialState = () => {text: ""}

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

function ToDoList() {

	// todo: persist
	const [todos, setTodos] = useState<Array<Todo>>([]);
	
	const [formState, dispatch] = useReducer(todoFormReducer, initialState());
	
	const addTodo = (todoText: string) => setTodos([...todos, {
		uid: crypto.randomUUID(),
		text: todoText,
	}])

	return (
		<div className="todo-list">
			
			<input
				value={formState.text}
				onChange={e => dispatch({type: 'text', value: e.target.value })}
				type="text"
			/>
			<button 
				onClick={e => {addTodo(formState.text); dispatch({type: 'submit'})} }
			>Create</button>

			<ol>
				{getTodoListItems(todos)}
			</ol>
		</div>
	);
}

export default ToDoList;