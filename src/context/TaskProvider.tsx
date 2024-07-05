import React, { ReactNode, useState } from "react";
import { Task } from "./taskTypes";
import TaskContext from "./taskContext";

export const TaskProvider: React.FC<{ children: ReactNode }> = ({
	children,
}): JSX.Element => {
	const [tasks, setTasks] = useState<Task[]>([]);

	const addTask = (text: string): void => {
		const newTask = { id: Date.now(), text, completed: false };
		setTasks((prevTasks) => [...prevTasks, newTask]);
	};

	const toggleTask = (id: number): void => {
		setTasks((prevTasks) =>
			prevTasks.map((task) =>
				task.id === id ? { ...task, completed: !task.completed } : task,
			),
		);
	};

	const removeTask = (id: number): void => {
		setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
	};

	return (
		<TaskContext.Provider value={{ tasks, addTask, toggleTask, removeTask }}>
			{children}
		</TaskContext.Provider>
	);
};
