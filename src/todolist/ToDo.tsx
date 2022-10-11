import './ToDo.css';


function ToDo({
	uid, text, remove
}) {
	return (
		<li className="todo-item" id={`todo-${uid}`}>
			
			<p className="grow">{text}</p>

			<button
			onClick={() =>remove(uid)}
			label="remove"
			type="text"
			>X</button>
		</li>
	);
}

export default ToDo;