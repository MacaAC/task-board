import PropTypes from "prop-types";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, FormLabel, FormControl, Input } from "@chakra-ui/react";
import { Context } from "../../context/context";
import { generalTranslations } from "../../translations/generalTranslations";
import { useTranslate } from "../../hooks/useTranslate";
import { useContext } from "react";

export const TaskModal = ({ tasks, editedTaskIndex, setEditedTaskIndex, setTasks }) => {

  const context = useContext(Context);
  const translations = useTranslate(generalTranslations(context));

  return (
    <Modal isOpen={editedTaskIndex !== null} onClose={() => setEditedTaskIndex(null)}>
        <ModalOverlay />
        <ModalContent>
            <ModalHeader>{translations.edit}</ModalHeader>
            <ModalBody>
            <FormControl>
                <FormLabel>{translations.task}</FormLabel>
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
                {translations.cancel}
            </Button>
            <Button
                colorScheme="green"
                onClick={() => setEditedTaskIndex(null)}
            >
                {translations.save}
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
  