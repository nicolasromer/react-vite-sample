import { useState, ReactElement, useReducer } from 'react';
import ToDo from './ToDo'
import TodoInput from './TodoInput'
import './ToDoList.css';

interface Todo {
	uid?: string;
	text: string;
}

const getTodoListItems = (todos: Array<Todo>) => todos.map(({uid, text}) => (
	<ToDo key={uid} uid={uid} text={text}/>
));

function ToDoList() {

	// todo: persist
	const [todos, setTodos] = useState<Array<Todo>>([]);
	
	const addTodo = (todoText: string) => setTodos([...todos, {
		// move to server side
		uid: window.crypto.randomUUID(),
		text: todoText,
	}])

	return (
		<div className="todo-list">
			
			<TodoInput submit={(formState:{text:string}) => addTodo(formState.text)}/>

			<ol>
				{getTodoListItems(todos)}
			</ol>
		</div>
	);
}

export default ToDoList;