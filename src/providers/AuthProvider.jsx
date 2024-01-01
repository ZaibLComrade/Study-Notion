import auth from "../config/firebase.config";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
} from "firebase/auth";

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
	const [user, setUser] = useState({});
	const [loading, setLoading] = useState(true);
	
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (loggedInUser) => {
			setUser(loggedInUser);
			
			// If user is logged in
			if (loggedInUser) {
				console.log(loggedInUser);
			} else { // If user is not logged in
				console.log(loggedInUser);
			}
			
			setLoading(false);
		});
		
		return () => unsubscribe();
	}, []);
	
	const registerUser = (email, password) => {
		setLoading(false);
		return createUserWithEmailAndPassword(auth, email, password);
	};
	
	const loginUser = (email, password) => {
		setLoading(false);
		return signInWithEmailAndPassword(auth, email, password);
	}
	
	const logoutUser = () => {
		setLoading(false);
		return signOut(auth);
	}
	
	const authInfo = {
		user,
		loading,
		setLoading,
		registerUser,
		loginUser,
		logoutUser,
	};

	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
}

AuthProvider.propTypes = {
	children: PropTypes.node,
};
