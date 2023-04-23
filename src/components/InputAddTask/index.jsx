import { Box, Heading, IconButton, Input } from "@chakra-ui/react"
import { AddIcon } from "@chakra-ui/icons"
import { useState } from "react";
 
export const InputAddTask = () => {

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    const handleAddTask = () => {
        setTasks([...tasks, newTask]);
        setNewTask("");
    };
    const handleChange = (event) => {
        setNewTask(event.target.value);
    };
return (
    <Box>
        <Heading as="h1" mb="4"> Añadir tarea </Heading>
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
    </Box>
  )
}
