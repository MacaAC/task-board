import { useState } from "react";
import { Box, Heading, Input, IconButton, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, FormLabel, FormControl } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { SingleTask } from "../SingleTask";
import { CompletedTasksList } from "../completedTasks";



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
    console.log(tasks[index])//string
    setEditedTaskIndex(index)//numero
  }

  const handleDeleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <Box p="4">
      <Heading as="h1" mb="4">
        Añadir tarea
      </Heading>
      <Input
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
      <Box>
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
  );
};
