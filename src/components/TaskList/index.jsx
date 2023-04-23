import { useState } from "react";
import { Box, Heading, Input, IconButton } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { SingleTask } from "../SingleTask";

export const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [completedTasks, setCompletedTasks] = useState([]);

    const handleCompleteTask = (index) => {
        const task = tasks[index];
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
        setCompletedTasks([...completedTasks, task]);
      };


    const handleAddTask = () => {
        setTasks([...tasks, newTask]);
        setNewTask("");
    };

    const handleChange = (event) => {
        setNewTask(event.target.value);
    };
    const handleDeleteTask = (index) => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    };

    return (
        <Box p="4">
            <Heading as="h1" mb="4">Añadir tarea</Heading>
            <Input
                placeholder="Escribe tu tarea aquí"
                value={newTask}
                onChange={handleChange}
                mr="2"
            />
            <IconButton
                icon={<AddIcon />}
                aria-label="Añadir tarea"
                onClick={handleAddTask}
            />
            <Box>
                {tasks.map((task, index) => (
                    <SingleTask key={index} text={task}  onDelete={() => handleDeleteTask(index)} onComplete={() => handleCompleteTask(index)}/>
                ))}
            </Box>
        </Box>
    );
}
