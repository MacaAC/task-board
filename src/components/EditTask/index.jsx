import { useState } from "react";
import {
  IconButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { EditIcon } from "@chakra-ui/icons";

export const EditTask = ({ task }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [editedTask, setEditedTask] = useState(task);

  const handleSubmit = (e) => {
    e.preventDefault();
    //onSave(editedTask);
    onClose();
  };

  return (
    <>
      <IconButton
        icon={<EditIcon />}
        aria-label="Editar tarea"
        onClick={onOpen}
      />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Editar tarea</ModalHeader>
          <ModalBody>
            <FormControl>
              <FormLabel>Nueva tarea</FormLabel>
              <Input
                value={editedTask}
                onChange={(e) => setEditedTask(e.target.value)}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
              Guardar
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancelar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};



EditTask.propTypes = {
    task: PropTypes.string.isRequired,
    //onSave: PropTypes.func.isRequired,
  };
  