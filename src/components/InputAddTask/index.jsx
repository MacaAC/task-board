import { Box, Input, IconButton } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import PropTypes from "prop-types";
import { Context } from "../../context/context";
import { generalTranslations } from "../../translations/generalTranslations";
import { useTranslate } from "../../hooks/useTranslate";
import { useContext } from "react";



export const AddTask = ({ newTask, handleChange, handleAddTask }) => {
  const context = useContext(Context);
  const translations = useTranslate(generalTranslations(context));
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
        placeholder={translations.placeholder}
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

 AddTask.propTypes={
    newTask: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleAddTask: PropTypes.func.isRequired
 }
