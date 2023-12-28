// Modules
import Logo from "../logo/Logo";
import { NavLink, Link } from "react-router-dom";
import Button from "../buttons/Button";

// Icons & images
import searchIcon from "../../assets/icons/search.svg";
import cartIcon from "../../assets/icons/cart.svg";
import defaultDP from "../../assets/Avatar/default_avatar.svg";

const linksList = [
	{ label: "Home", link: "/" },
	{ label: "About", link: "/about" },
	{ label: "Catalog", link: "/catalog" },
	{ label: "Contact Us", link: "/contact" },
];

export default function Navbar() {
	const activeStyle = "text-yellow-50 hover:text-yellow-100 font-semibold";

	return (
		<div className="mx-4 border-b border-rich-black-700">
			<nav className="container mx-auto navbar">
				<div className="navbar-start">
					<Link className="btn btn-ghost" to="/">
						<Logo type="dark" />
					</Link>
				</div>
				
				<div className="navbar-center gap-6">
					{linksList.map((item) => (
						<NavLink
							key={item}
							to={item.link}
							className={({ isActive }) => {
								return `leading-6 text-base 
										${isActive ? activeStyle : "text-rich-black-25"}
									`;
							}}
						>
							{item.label}
						</NavLink>
					))}
				</div>
				
				<div className="navbar-end gap-5">
					<button>
						<img src={ searchIcon }/>
					</button>
					<button>
						<img src={ cartIcon }/>
					</button>
					
					<div>
						{/* <Button paddingY={8} paddingX={12} type="secondary" text="Sign Up"/> */}
						<img src={ defaultDP } className="block w-8 h-8 rounded-full"/>
					</div>
				</div>
			</nav>
		</div>
	);
}
