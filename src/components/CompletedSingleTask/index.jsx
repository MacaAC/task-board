import { Box, IconButton, Flex,Text } from "@chakra-ui/react";
import { DeleteIcon,  EditIcon } from "@chakra-ui/icons";
import PropTypes from "prop-types";

export const CompletedSingleTask = ({ text, onDelete, onEdit }) => {


  return (
    <Flex justify="space-between" alignItems="center" mb={2} >
        <Box as="p" mr={4} border="1px solid white" padding="0.5rem" width="100%"  borderRadius="1rem" display="flex">
            <Box width="65%"><Text>{text}</Text></Box>
            <Flex>
                <IconButton
                    size="sm"
                    aria-label="Edit Task"
                    icon={<EditIcon/>}
                    onClick={onEdit}
                    mr={2}
                    width="15%"
                />
                <IconButton
                    size="sm"
                    aria-label="Delete task"
                    icon={<DeleteIcon />}
                    onClick={onDelete}
                    colorScheme="red"
                    width="15%"
                />
            </Flex>
    
        </Box>
  </Flex>
        
  );
}

CompletedSingleTask.propTypes = {
  text: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};


