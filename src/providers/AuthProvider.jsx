import auth from "../config/firebase.config";
import PropTypes from "prop-types";
import { createContext, useEffect } from "react";
import {onAuthStateChanged} from "firebase/auth";

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
	
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, () => {
			console.log(auth);
		})
		
		return () => unsubscribe();
	}, [])
	
	const authInfo = {
		test: "This is a test string",
	}
	
	return <AuthContext.Provider value={ authInfo }>
		{ children }
	</AuthContext.Provider>
}

AuthProvider.propTypes = {
	children: PropTypes.node,
}
