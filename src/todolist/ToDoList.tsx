import { useState, ReactElement, useReducer } from 'react';
import ToDo from './ToDo'
import ToDoInput from './ToDoInput'
import './ToDoList.css';

interface Todo {
	uid?: string;
	text: string;
}

const getUid = () => window.crypto.randomUUID();

const todoReducer = (state, action) => {
	switch (action.type) {
		case 'add': 
			return [...state, {
				uid: getUid(),
				text: action.text
			}]
		case 'remove': 
			return state.filter(t=>t.uid !== action.uid);
	}
}

const getInitialState = () => []

function ToDoList() {

	const [state, dispatch] = useReducer(todoReducer, getInitialState());
	
	const addTodo = 	(text: string) => dispatch({ type: 'add', text });
	const removeTodo = 	(uid: string) => dispatch({ type: 'remove', uid });
	const submit = (formState:{text:string}) => addTodo(formState.text);

	

	return (
		<div className="todo-list">
			
			
				<ToDoInput submit={submit} />

				<ol>
					{state.length
					 ? state.map(({uid, text}) => (
							<ToDo 
								key={uid} 
								uid={uid}
								text={text}
								remove={removeTodo}
							/>
						))
					 : <p className="pt-5">Nothing to do!</p>}
				</ol>
		</div>
	);
}

export default ToDoList;