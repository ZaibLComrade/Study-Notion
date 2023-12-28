import PropTypes from "prop-types";

export default function Button({ type, text, clickFn }) {
	const common_btn_classes = "space-x-2 p-3 rounded-lg"
	
	// Note: Primary button has the color of accent
	let btnTypeStyle = ""
	if(type === "primary") btnTypeStyle = "bg-yellow-50 focus:shadow-primary-focus hover:bg-yellow-100 hover:text-rich-black-800 shadow-primary-btn text-rich-black-900";
	if(type === "secondary") btnTypeStyle = "bg-rich-black-800 border-rich-black-700 text-rich-black-5 border";
	if(type === "border") btnTypeStyle = "bg-transparent border border-rich-black-700 text-rich-black-200";
	if(type === "outline") btnTypeStyle = "text-rich-black-5";
	
	return <button 
		onClick={ clickFn }
		className={`${common_btn_classes} ${btnTypeStyle}`}
	>
		{ text }
	</button>
}

Button.propTypes = {
	text: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	clickFn: PropTypes.func,
}
