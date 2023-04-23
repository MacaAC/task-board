import { Heading, Box } from "@chakra-ui/react"
import { InputAddTask } from "../InputAddTask"
import { TasksToBeDone } from "../TasksToBeDone"
import { useState } from "react"

export const Interfaz = () => {

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");


    const handleAddTask = () => {
      setTasks([...tasks, newTask]);
      setNewTask("");
    };
  return (
    <Box display="flex" flexDirection="column">
        <Heading as="h1" textAlign="center">My Task List</Heading>
        <Box display="flex" flexDirection="row" justifyContent="space-around">
            <InputAddTask onAddTask={handleAddTask} />
            <TasksToBeDone tasks={tasks} />
            <Box border="2px solid green">
                <Heading>Tareas Realizadas</Heading>
            </Box>
        </Box>
    </Box>
  )
}
