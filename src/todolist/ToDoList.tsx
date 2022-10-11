import { useState, ReactElement, useReducer } from 'react';
import ToDo from './ToDo'
import ToDoInput from './ToDoInput'
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

	const removeTodo = (uid: string) => setTodos(todos.filter(t => t.uid !== uid));

	const submit = (formState:{text:string}) => addTodo(formState.text);



	return (
		<div className="todo-list">
			
			<ToDoInput submit={submit} />

			<ol>
				{todos.length
				 ? todos.map(({uid, text}) => (
						<ToDo key={uid} uid={uid} text={text} remove={removeTodo}/>
					))
				 : <p className="pt-5">Nothing to do!</p>}
			</ol>
		</div>
	);
}

export default ToDoList;