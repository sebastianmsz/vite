import React from "react";
import { useTasks } from "../context/useTasks";
import TaskItem from "./TaskItem";

const TaskList: React.FC = () => {
	const { tasks } = useTasks();

	return (
		<div>
			{tasks.map((task) => (
				<TaskItem
					key={task.id}
					id={task.id}
					text={task.text}
					completed={task.completed}
				/>
			))}
		</div>
	);
};

export default TaskList;
