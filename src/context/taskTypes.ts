interface Task {
	id: number;
	text: string;
	completed: boolean;
}

interface TaskContextProps {
	tasks: Task[];
	addTask: (text: string) => void;
	toggleTask: (id: number) => void;
	removeTask: (id: number) => void;
}

export { Task, TaskContextProps };
