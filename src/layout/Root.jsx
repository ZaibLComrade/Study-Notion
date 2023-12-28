import {Outlet} from "react-router-dom";
import Navbar from "./Home/Navbar";

export default function Root() {
	return <div>
		<Navbar/>
		<Outlet/>
		<div className="">
		</div>
	</div>
}
