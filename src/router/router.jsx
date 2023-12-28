import Root from "../layout/Root"
import { createBrowserRouter } from "react-router-dom";

// Router for page navigation
const router = createBrowserRouter([
	{
		path: "/",
		element: <Root/>,
		children: [
			{
				path: "/",
				element: <div>This is root</div>
			},
		]
	},
	{ path: "/login", element: <div>This is login page</div> },
	{ path: "/register", element: <div>This is login page</div> },
])

export default router;
