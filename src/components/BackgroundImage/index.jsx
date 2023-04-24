import { Box } from "@chakra-ui/react";
import backgroundImage from "../../assets/bg.jpg"

import PropTypes from 'prop-types';

const AppBackground = ({ children }) => (
  <Box
    backgroundImage={`url(${backgroundImage})`}
    backgroundSize="cover"
    backgroundPosition="center"
    height="100vh"
  >
    {children}
  </Box>
);

export default AppBackground;

AppBackground.propTypes = {
  children: PropTypes.node.isRequired,
};




