import PropTypes from "prop-types";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, FormLabel, FormControl, Input } from "@chakra-ui/react";

export const TaskModal = ({ tasks, editedTaskIndex, setEditedTaskIndex, setTasks }) => {
  return (
    <Modal isOpen={editedTaskIndex !== null} onClose={() => setEditedTaskIndex(null)}>
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
  );
};

export default TaskModal;
TaskModal.propTypes = {
    tasks: PropTypes.array.isRequired,
    editedTaskIndex: PropTypes.number.isRequired,
    setEditedTaskIndex: PropTypes.func.isRequired,
    setTasks: PropTypes.func.isRequired,
  };
  
  Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
  };
  