import { Box,Heading } from "@chakra-ui/react"
import PropTypes from "prop-types";
import { SingleTask } from "../SingleTask";
import { useState } from "react";

export const TasksToBeDone = ({tasks, onCompleteTask}) => {
    //const [completedTasks, setCompletedTasks] = useState([]);

    const handleCompleteTask = (index) => {
        const task = tasks[index];
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        // setTasks(newTasks);
        // setCompletedTasks([...completedTasks, task]);
        onCompleteTask(newTasks, task);
      };

    return(
        <Box border="2px solid blue">
            <Heading>Tareas por realizar</Heading>
            {tasks.map((task, index) => (
                <SingleTask
                    key={index}
                    text={task}
                    onEdit={() => handleEditTask(index)}
                    onDelete={() => handleDeleteTask(index)}
                    onCompleted={() => handleCompleteTask(index)}
                />
        ))}
        </Box>
    )
  };

TasksToBeDone.propTypes ={
    tasks: PropTypes.array.isRequired,
    onCompleteTask: PropTypes.func.isRequired
}