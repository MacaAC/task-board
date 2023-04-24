import { useState } from "react";
import { Box, Heading} from "@chakra-ui/react";
import { TasksToBeDone } from "../TasksToBeDone";
import { CompletedTasksList } from "../completedTasks";
import {AddTask} from "../InputAddTask";
import {TaskModal} from "../Modal";



export const HomePage = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [completedTasks, setCompletedTasks] = useState([]);
  const [editedTaskIndex, setEditedTaskIndex] = useState(null)


  const handleCompleteTask = (index) => {
    const task = tasks[index];
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
    setCompletedTasks([...completedTasks, task]);
  };

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

  return (
    <Box p="4" >
        <Box display="flex" flexDirection="column" alignItems="center" >
            <Box  margin="1rem" padding="1rem">
                <Heading as="h1" mb="4" textAlign="center" margin="2rem"> Mi organizador de tareas </Heading>
                    <AddTask
                        newTask={newTask}
                        handleChange={handleChange}
                        handleAddTask={handleAddTask}
                    />
            </Box>

            <Box display="flex" width="90%" justifyContent="space-around">
                <TasksToBeDone
                    tasks={tasks}
                    handleEditTask={handleEditTask}
                    handleDeleteTask={handleDeleteTask}
                    handleCompleteTask={handleCompleteTask}
                />
                <CompletedTasksList
                    tasks={completedTasks}
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

