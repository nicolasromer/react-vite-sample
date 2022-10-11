import './Button.css';

function Button({
	type, label, text, handleClick
}) {

	return (
			<button
				onClick={handleClick}
				className={`button type-${type}`}
				label={label}
				type={type}
			>{text}</button>
	)
}	

export default Button;