import { Box, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { MdMoreVert } from "react-icons/md";
import PropTypes from "prop-types";
import { CompletedTasksList } from "../completedTasks";

export const CompletedTaskMenu = ({ tasks, handleEditCompletedTask, handleDeleteTask }) => {
  return (
    <Box borderRadius="10px" bg="#f2f2f2" padding="0.5rem" width="45%">
      <Menu>
        <MenuButton
          as={MdMoreVert}
          cursor="pointer"
          borderRadius="50%"
          width="2rem"
          height="2rem"
          color="#666666"
        />
        <MenuList>
          <MenuItem>Edit</MenuItem>
          <MenuItem>Delete</MenuItem>
        </MenuList>
      </Menu>
      <CompletedTasksList tasks={tasks} handleEditCompletedTask={handleEditCompletedTask} handleDeleteTask={handleDeleteTask} />
    </Box>
  );
};

CompletedTaskMenu.propTypes = {
  tasks: PropTypes.array.isRequired,
  handleEditCompletedTask: PropTypes.func.isRequired,
  handleDeleteTask: PropTypes.func.isRequired,
};
