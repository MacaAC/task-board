import { Box, IconButton, Flex,Text, Checkbox } from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import PropTypes from "prop-types";
import { useState } from "react";

export const SingleTask = ({ text, onDelete, onEdit }) => {
  const [isChecked, setIsChecked] = useState(false);
  const bg = isChecked ? "green.500" : "inherit";


  return (
    <Flex justify="space-between" alignItems="center" mb={2} >
        <Box as="p" bg={bg} mr={4} border="1px solid white" padding="0.5rem" width="100%"  borderRadius="1rem" display="flex"justifyContent="space-around">
          <Box width="65%"><Text>{text}</Text></Box>
          
            <Box width="30%" display="flex" justifyContent="space-around" alignItems="center" >
                <Checkbox isChecked={isChecked} onChange={() => setIsChecked(!isChecked)}/>
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
            </Box>
        </Box>
  </Flex>

  );
}

SingleTask.propTypes = {
  text: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};


