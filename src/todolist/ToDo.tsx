import Button from './Button';
import './ToDo.css';


function ToDo({
	uid, text, remove
}) {
	return (
		<li className="todo-item" id={`todo-${uid}`}>
			
			<p className="grow">{text}</p>

			<Button
			handleClick={() =>remove(uid)}
			label="remove"
			text="done"
			type="primary"
			/>
		</li>
	);
}

export default ToDo;