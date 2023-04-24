import { Box, Input, IconButton } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import PropTypes from "prop-types";



const AddTask = ({ newTask, handleChange, handleAddTask }) => {
  return (
    <Box
      display="flex"
      borderRadius="10px"
      bg="#f2f2f2"
      justifyContent="center"
      alignItems="center"
      padding="1rem"
    >
      <Input
        border="1px solid white"
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
  );
};

export default AddTask;
 AddTask.propTypes={
    newTask: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleAddTask: PropTypes.func.isRequired
 }
