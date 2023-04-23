// import {
//     Modal,
//     ModalOverlay,
//     ModalContent,
//     ModalHeader,
//     ModalBody,
//     ModalFooter,
//     Button,
//     FormLabel,
//     FormControl,
//     Input,
//   } from "@chakra-ui/react";
//   import { useState } from "react";
// import PropTypes from "prop-types";

  
//   export const EditTask = ({ isOpen, onClose, task, onSave }) => {
//     const [editedTask, setEditedTask] = useState(task);
  
//     const handleChange = (event) => {
//       setEditedTask(event.target.value);
//     };
  
//     return (
//       <Modal isOpen={isOpen} onClose={onClose}>
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>Editar tarea</ModalHeader>
//           <ModalBody>
//             <FormControl>
//               <FormLabel>Tarea</FormLabel>
//               <Input type="text" value={editedTask} onChange={handleChange} />
//             </FormControl>
//           </ModalBody>
//           <ModalFooter>
//             <Button colorScheme="blue" mr={3} onClick={onClose}>
//               Cancelar
//             </Button>
//             <Button colorScheme="green" onClick={() => onSave(editedTask)}>
//               Guardar
//             </Button>
//           </ModalFooter>
//         </ModalContent>
//       </Modal>
//     );
//   };
  
// EditTask.propTypes = {
//     task: PropTypes.string.isRequired,
//     isOpen: PropTypes.func.isRequired,
//     onClose: PropTypes.func.isRequired,
//     onSave: PropTypes.func.isRequired,
//   };