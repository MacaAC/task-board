import { Heading, Box, Input,Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, FormLabel, FormControl  } from "@chakra-ui/react"
import { InputAddTask } from "../InputAddTask"
import { TasksToBeDone } from "../TasksToBeDone"
import { useState } from "react"

export const Interfaz = () => {

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [editedTaskIndex, setEditedTaskIndex] = useState(null)


    const handleTaskCompleted = (newTasks, completedTask) => {
        setTasks(newTasks);
        setNewTask(completedTask);
    };
    const handleAddTask = () => {
        setTasks([...tasks, newTask]);
        setNewTask("");
    };
    const handleDeleteTask = (newTasks) => {
        setTasks(newTasks);
    };
    const handleEditTask = (index) =>{
        setEditedTaskIndex(index)//numero
    }
  return (
    <Box display="flex" flexDirection="column">
        <Heading as="h1" textAlign="center">My Task List</Heading>
        <Box display="flex" flexDirection="row" justifyContent="space-around">
            <InputAddTask onAddTask={handleAddTask} />
            <TasksToBeDone tasks={tasks} onCompleteTask={handleTaskCompleted} onDeleteTask={handleDeleteTask} onEditTask={handleEditTask} />
            
            <Box border="2px solid green">
                <Heading>Tareas Realizadas</Heading>
            </Box>

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
  )
}
