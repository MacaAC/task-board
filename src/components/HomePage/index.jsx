
import { useState, useContext } from "react";
import { Box, Heading, IconButton, VStack } from "@chakra-ui/react";
import { TasksToBeDone } from "../TasksToBeDone";
import { AddTask } from "../InputAddTask";
import { TaskModal } from "../Modal";
import { InputSelectLanguage } from "../InputselectLanguage";
import { Context } from "../../context/context";
import { generalTranslations } from "../../translations/generalTranslations";
import { useTranslate } from "../../hooks/useTranslate";
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Footer } from "../footer";
import PropTypes from "prop-types";


export const HomePage = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editedTaskIndex, setEditedTaskIndex] = useState(null)
  const context = useContext(Context);
  const translations = useTranslate(generalTranslations(context));

  const handleAddTask = () => {
    if (newTask.trim()) { 
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleEditTask = (index) => {
    setEditedTaskIndex(index)
  }

  const handleDeleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const changeTheme = () => {
    context.clearTheme
      ? context.setClearTheme(false)
      : context.setClearTheme(true);
  };

  return (
    <Box p={{ base: "2", md: "4", lg: "8" }}>
      <Box as="header" display="flex" justifyContent="space-between" alignItems="center" flexDirection={{ base: "column", md: "row" }}>
        <InputSelectLanguage />
        <IconButton
          _hover={{ background: "none" }}
          icon={
            context.clearTheme ? (
              <Box border="1px solid black" borderRadius="50%" padding="0.5rem" display="flex" justifyContent="center" alignItems="center">  <MoonIcon /></Box>
            ) : (
              <SunIcon />
            )
          }
          onClick={changeTheme}
          bg={"none"}
          color={context.clearTheme ? "black" : "white"}
        ></IconButton>
      </Box>
      <VStack spacing="8" alignItems="center">
        <Heading as="h1" mb="4" textAlign="center" margin="2rem" color={context.clearTheme ? "black" : "white"}>{translations.title}</Heading>
        <AddTask
          newTask={newTask}
          handleChange={handleChange}
          handleAddTask={handleAddTask}
        />
        <TasksToBeDone
          tasks={tasks}
          handleEditTask={handleEditTask}
          handleDeleteTask={handleDeleteTask}
        />
        {editedTaskIndex !== null && (
          <TaskModal tasks={tasks} editedTaskIndex={editedTaskIndex} setEditedTaskIndex={setEditedTaskIndex} setTasks={setTasks} />
        )}
      </VStack>
      <Footer/>

    </Box>
  );
};
AddTask.propTypes = {
  newTask: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleAddTask: PropTypes.func,
};
