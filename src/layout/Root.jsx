import {Outlet} from "react-router-dom";
import Navbar from "./Home/Navbar";
import Button from "../components/buttons/Button";

export default function Root() {
	return <div>
		<Navbar/>
		<Outlet/>
		<div className="">
			<Button type="primary" text="Hello World"/>
			<Button type="secondary" text="Hello World"/>
			<Button type="border" text="Hello World"/>
			<Button type="outline" text="Hello World"/>
		</div>
	</div>
}
