import { useState } from "react";
import { Box, Heading, Input, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, FormLabel, FormControl } from "@chakra-ui/react";
import { TasksToBeDone } from "../TasksToBeDone";
import { CompletedTasksList } from "../completedTasks";
import { AddTask} from "../InputAddTask"



export const TaskList = () => {
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
                
                
                {/* <Box borderRadius="10px" bg="#f2f2f2" padding="0.5rem" width="45%">
                    <Heading as="h3" fontSize="1.5rem" margin="0 1rem 2rem 1rem" color="#666666" textAlign="center">Tareas por realizar</Heading>
                    {tasks.map((task, index) => (
                        <SingleTask
                            key={index}
                            text={task}
                            onEdit={() => handleEditTask(index)}
                            onDelete={() => handleDeleteTask(index)}
                            onCompleted={() => handleCompleteTask(index)}
                        />
                    ))}
                </Box> */}
                 <TasksToBeDone
                  tasks={tasks}
                  handleEditTask={handleEditTask}
                  handleDeleteTask={handleDeleteTask}
                  handleCompleteTask={handleCompleteTask}
                />
                <CompletedTasksList tasks={completedTasks} />

                {editedTaskIndex !== null && (
  <Modal isOpen={true} onClose={() => setEditedTaskIndex(null)}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>Editar tarea</ModalHeader>
      <ModalBody>
        <FormControl>
          <FormLabel>Tarea</FormLabel>
          <Input
            type="text"
            value={tasks[editedTaskIndex]}
            onChange={(event) => {
              const newTasks = [...tasks];
              newTasks[editedTaskIndex] = event.target.value;
              setTasks(newTasks);
            }}
          />
        </FormControl>
      </ModalBody>
      <ModalFooter>
        <Button
          colorScheme="blue"
          mr={3}
          onClick={() => setEditedTaskIndex(null)}
        >
          Cancelar
        </Button>
        <Button
          colorScheme="green"
          onClick={() => setEditedTaskIndex(null)}
        >
          Guardar
        </Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
)}

            </Box>
      
        </Box>
      

    </Box>
  );
};

