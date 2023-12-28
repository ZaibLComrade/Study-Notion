import PropTypes from "prop-types";

// TODO: Create an experimental dynamic radio input and modify as per requirement

export default function Radio({ name }) {
	return <input type="radio" name={ name } className="radio radio-warning radio-sm"/>
}

Radio.propTypes = {
	name: PropTypes.string,
}
