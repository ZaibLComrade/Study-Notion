import PropTypes from "prop-types";

export default function FooterColumn({ title, listArr=[] }) {
	// ListArr must contain array of objects in this format: [ {text: "", link: ""} ]
	
	const headingClasses = "text-rich-black-100 font-base font-semibold leading-6"
	const bodyLinkClasses = "text-rich-black-400 text-sm font-normal leading-[22px]"
	
	return <div className="space-y-3">
		<h4 className={ headingClasses }>{ title }</h4>
		<ul className={ `${bodyLinkClasses} space-y-2` }>
			{ listArr.map(listItem => <li key={ listItem }><a href={ listItem.link }>{ listItem.text }</a></li>) }
		</ul>
	</div>
}

FooterColumn.propTypes = {
	title: PropTypes.string,
	listArr: PropTypes.array,
}
