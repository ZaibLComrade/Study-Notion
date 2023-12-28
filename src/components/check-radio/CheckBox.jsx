import PropTypes from "prop-types";

export default function CheckBox({ value }) {
	return <input type="checkbox" value={ value } className="w-5 h-5 bg-transparent border-2 focus:ring-0 border-rich-black-500 rounded-md text-yellow-50 focus:outline-rich-black-900"/>
}

CheckBox.propTypes = {
	value: PropTypes.any,
}
