import React from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

const Home: React.FC = () => {
	return (
		<div className="container">
			<h1>Task Manager</h1>
			<TaskForm />
			<TaskList />
		</div>
	);
};

export default Home;
