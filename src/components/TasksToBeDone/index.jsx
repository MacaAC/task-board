import { Box,Heading } from "@chakra-ui/react"
import PropTypes from "prop-types";
import { SingleTask } from "../SingleTask";

export const TasksToBeDone = ({ tasks, handleEditTask, handleDeleteTask, handleCompleteTask }) => {
  return (
    <Box borderRadius="10px" bg="#f2f2f2" padding="0.5rem" width="45%">
      <Heading as="h3" fontSize="1.5rem" margin="0 1rem 2rem 1rem" color="#666666" textAlign="center">
        Tareas por realizar
      </Heading>
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
  );
};

TasksToBeDone.propTypes ={
    tasks: PropTypes.array.isRequired,
    handleCompleteTask: PropTypes.func.isRequired,
    handleDeleteTask: PropTypes.func.isRequired,
    handleEditTask: PropTypes.func.isRequired


}