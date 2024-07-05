import React, { useState } from "react";
import { useTasks } from "../context/useTasks";

const TaskForm: React.FC = () => {
	const [text, setText] = useState("");
	const { addTask } = useTasks();

	const handleSubmit = (e: React.FormEvent): void => {
		e.preventDefault();
		if (text.trim()) {
			addTask(text);
			setText("");
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				value={text}
				onChange={(e) => {
					setText(e.target.value);
				}}
				placeholder="Add a new task"
			/>
			<button type="submit">Add Task</button>
		</form>
	);
};

export default TaskForm;
