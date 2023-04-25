import { Box,Heading } from "@chakra-ui/react"
import PropTypes from "prop-types";
import { SingleTask } from "../SingleTask";
import { Context } from "../../context/context";
import { generalTranslations } from "../../translations/generalTranslations";
import { useTranslate } from "../../hooks/useTranslate";
import { useContext } from "react";

export const TasksToBeDone = ({ tasks, handleEditTask, handleDeleteTask }) => {
  const context = useContext(Context);
  const translations = useTranslate(generalTranslations(context));

  return (
    <Box borderRadius="10px" bg="#f2f2f2" padding="0.5rem" maxWidth="700px" width="100%" margin="0 auto">
      <Heading as="h3" fontSize="1.5rem" margin="0 1rem 2rem 1rem" color="#666666" textAlign="center">
        {translations.subtitle}
      </Heading>
      {tasks.map((task, index) => (
        <SingleTask
          key={index}
          text={task}
          onEdit={() => handleEditTask(index)}
          onDelete={() => handleDeleteTask(index)}
        />
      ))}
    </Box>
  );
};

TasksToBeDone.propTypes ={
    tasks: PropTypes.array.isRequired,
    handleDeleteTask: PropTypes.func.isRequired,
    handleEditTask: PropTypes.func.isRequired


}