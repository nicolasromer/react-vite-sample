import {useContext} from 'react'
import ThemeContext from '../ThemeContext'
import Button from './Button';
import './ToDo.css';


function ToDo({
	uid, text, remove
}) {

	const theme = useContext(ThemeContext);

	return (
		<li className={`todo-item theme-${theme}`} id={`todo-${uid}`}>
			
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