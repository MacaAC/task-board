import { Box, Heading } from "@chakra-ui/react"
import PropTypes from "prop-types";

export const CompletedTasksList = ({ tasks  }) => {
  return (
    <Box borderRadius="10px" bg="#f2f2f2" padding="0.5rem" width="45%">
         <Heading as="h3" fontSize="1.5rem" margin="0 1rem 2rem 1rem" color="#666666" textAlign="center"> Tareas completadas </Heading>
         {tasks.map((task,i)=> <Box key={i} mr={4} border="1px solid white" padding="0.5rem" margin="0.5rem" width="100%"  borderRadius="1rem" display="flex">{task}</Box>)}
        

    </Box>
  )
}

CompletedTasksList.propTypes = {
    tasks: PropTypes.array.isRequired,
    handleDeleteTask: PropTypes.func.isRequired,
    // handleEditTask: PropTypes.func.isRequired
  };