import './ToDo.css';


function ToDo({
	id, text
}) {
	return (
		<li className="flex justify-left" id={`todo-${id}`}>
			
			<p className="grow">{text}</p>

			<button className="text-bold px-3 " type="text">X</button>
		</li>
	);
}

export default ToDo;