import { useState,useContext } from "react";
import { Box, Heading,IconButton} from "@chakra-ui/react";
import { TasksToBeDone } from "../TasksToBeDone";
import {AddTask} from "../InputAddTask";
import {TaskModal} from "../Modal";
import { InputSelectLanguage } from "../InputselectLanguage";
import { Context } from "../../context/context";
import { generalTranslations } from "../../translations/generalTranslations";
import { useTranslate } from "../../hooks/useTranslate";
import { MoonIcon, SunIcon } from '@chakra-ui/icons'





export const HomePage = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editedTaskIndex, setEditedTaskIndex] = useState(null)
  const context = useContext(Context);
  const translations = useTranslate(generalTranslations(context));

  
  const handleAddTask = () => {
    setTasks([...tasks, newTask]);
    setNewTask("");
  };

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleEditTask = (index) =>{
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
    <Box p="4" >
        <Box as="header" display="flex">
            <InputSelectLanguage/>
                  <IconButton
                  _hover={{ background: "none" }}
                  icon={
                    context.clearTheme ? (
                      <Box border="1px solid black"  borderRadius="50%" padding="0.5rem" display="flex" justifyContent="center" alignItems="center">  <MoonIcon /></Box>
                    ) : (
                      <SunIcon />
                    )
                  }
                  onClick={changeTheme}
                  bg={"none"}
                  color={context.clearTheme ? "black" : "white"}
                ></IconButton>
        </Box>
        <Box display="flex" flexDirection="column" alignItems="center" >
            <Box  margin="1rem" padding="1rem">
                <Heading as="h1" mb="4" textAlign="center" margin="2rem" color={context.clearTheme ? "black" : "white"}> {translations.title}</Heading>
                    <AddTask
                        newTask={newTask}
                        handleChange={handleChange}
                        handleAddTask={handleAddTask}
                    />
            </Box>

            

            <Box display="flex" width="90%" justifyContent="center" alignItems="center" flexDirection="column" >
                <TasksToBeDone
                    tasks={tasks}
                    handleEditTask={handleEditTask}
                    handleDeleteTask={handleDeleteTask}
                />


                {editedTaskIndex !== null && (
                    <TaskModal tasks={tasks} editedTaskIndex={editedTaskIndex} setEditedTaskIndex={setEditedTaskIndex} setTasks={setTasks} />
                )}

            </Box>
      
        </Box>
      

    </Box>
  );
};

