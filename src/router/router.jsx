import Root from "../layout/Root"
import { createBrowserRouter } from "react-router-dom";
import Home from "../layout/home/Home";

// Router for page navigation
const router = createBrowserRouter([
	{
		path: "/",
		element: <Root/>,
		children: [
			{
				path: "/",
				element: <Home/>,
			},
		]
	},
	{ path: "/login", element: <div>This is login page</div> },
	{ path: "/register", element: <div>This is login page</div> },
])

export default router;
