import React from "react";
import { useTasks } from "../context/useTasks";

interface TaskItemProps {
	id: number;
	text: string;
	completed: boolean;
}

const TaskItem: React.FC<TaskItemProps> = ({ id, text, completed }) => {
	const { toggleTask, removeTask } = useTasks();

	return (
		<div>
			<input
				type="checkbox"
				checked={completed}
				onChange={() => {
					toggleTask(id);
				}}
			/>
			<span style={{ textDecoration: completed ? "line-through" : "none" }}>
				{text}
			</span>
			<button
				onClick={() => {
					removeTask(id);
				}}
			>
				Delete
			</button>
		</div>
	);
};

export default TaskItem;
