import PropTypes from "prop-types";
import logoDark from "../../assets/logo/logo-dark.svg";
import logoLight from "../../assets/logo/logo-light.svg";
import logoEmail from "../../assets/logo/logo-email.svg";

export default function Logo({ type }) {
	if(type === "dark") return <img src={ logoDark }/>
	if(type === "light") return <img src={ logoLight }/>
	if(type === "email") return <img src={ logoEmail }/>
}

Logo.propTypes = {
	type: PropTypes.string.isRequired,
}
