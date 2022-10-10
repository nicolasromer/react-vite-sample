import './ToDo.css';


function ToDo({
	uid, text, remove
}) {
	return (
		<li className="flex justify-left" id={`todo-${uid}`}>
			
			<p className="grow">{text}</p>

			<button
			onClick={() =>remove(uid)}
			label="remove"
			className="text-bold px-3"
			type="text"
			>X</button>
		</li>
	);
}

export default ToDo;