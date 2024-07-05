import React from "react";
import { TaskProvider } from "./context/TaskProvider";
import Home from "./pages/Home";
import "./assets/styles/main.css";

const App: React.FC = () => {
	return (
		<TaskProvider>
			<Home />
		</TaskProvider>
	);
};

export default App;
