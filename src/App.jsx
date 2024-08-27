// eslint-disable-next-line no-unused-vars
import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import UserPage from "./Pages/UserPage";
import ErrorPage from "./Pages/ErrorPage";
import UserProfile from "./Pages/UserProfile";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";

import MainLayout from "./Pages/Layouts/MainLayout";
import SimpleLayout from "./Pages/Layouts/SimpleLayout";

const App = () => {
	return (
		<>
			<Routes>
				<Route element={<MainLayout />}>
					<Route path="/" element={<HomePage />} />
					<Route path="/user-details/:userId" element={<UserPage />} />
					<Route path="/profile" element={<UserProfile />} />
				</Route>
				<Route element={<SimpleLayout />}>
					<Route path="/login" element={<LoginPage />} />
					<Route path="/sign-up" element={<SignupPage />} />
					<Route path="*" element={<ErrorPage />} />
				</Route>
			</Routes>
		</>
	);
};

export default App;
