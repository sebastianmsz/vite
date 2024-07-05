import { createContext } from "react";
import { TaskContextProps } from "./taskTypes";

const TaskContext = createContext<TaskContextProps | undefined>(undefined);

export default TaskContext;
