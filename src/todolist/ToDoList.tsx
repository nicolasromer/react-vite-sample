import { useState, ReactElement, useReducer } from 'react';
import ToDo from './ToDo'
import TodoInput from './TodoInput'
import './ToDoList.css';

interface Todo {
	uid?: string;
	text: string;
}

function ToDoList() {

	// todo: persist
	const [todos, setTodos] = useState<Array<Todo>>([]);
	
	const addTodo = (todoText: string) => setTodos([...todos, {
		// move to server side
		uid: window.crypto.randomUUID(),
		text: todoText,
	}])

	const submit = (formState:{text:string}) => addTodo(formState.text);

	return (
		<div className="todo-list">
			
			<TodoInput submit={submit} />

			<ol>
				{todos.map(({uid, text}) => (
					<ToDo key={uid} uid={uid} text={text}/>
				))}
			</ol>
		</div>
	);
}

export default ToDoList;