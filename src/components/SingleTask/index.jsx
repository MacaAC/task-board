import { Box, IconButton, Flex } from "@chakra-ui/react";
import { DeleteIcon, CheckIcon, EditIcon } from "@chakra-ui/icons";
import PropTypes from "prop-types";
//import { useState } from "react";

export const SingleTask = ({ text, onDelete, onCompleted, onEdit }) => {


  return (
    <Flex justify="space-between" alignItems="center" mb={2}>
        <Box as="p" mr={4}>
            {text}
        </Box>
        <Flex>
            <IconButton
                size="sm"
                aria-label="Complete task"
                icon={<CheckIcon />}
                onClick={onCompleted}
                mr={2}
            />
             <IconButton
                size="sm"
                aria-label="Edit Task"
                icon={<EditIcon/>}
                onClick={onEdit}
                mr={2}
            />
            <IconButton
                size="sm"
                aria-label="Delete task"
                icon={<DeleteIcon />}
                onClick={onDelete}
                colorScheme="red"
            />
        </Flex>
    </Flex>
  );
}

SingleTask.propTypes = {
  text: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onCompleted: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};


