import { Box, Heading } from "@chakra-ui/react"
import PropTypes from "prop-types";


export const CompletedTasksList = ({ tasks }) => {
  return (
    <Box border="2px solid red">
         <Heading as="h1" mb="4"> Tareas completadas </Heading>
         {tasks.map((task,i)=> <Box key={i}>{task}</Box>)}

    </Box>
  )
}

CompletedTasksList.propTypes = {
    tasks: PropTypes.array.isRequired,
  };