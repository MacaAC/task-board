// import { Box } from "@chakra-ui/react";
// import backgroundImage from "../../assets/bg.jpg"

// import PropTypes from 'prop-types';

// const AppBackground = ({ children }) => (
//   <Box
//     backgroundImage={`url(${backgroundImage})`}
//     backgroundSize="cover"
//     backgroundPosition="center"
//     height="100vh"
//   >
//     {children}
//   </Box>
// );

// export default AppBackground;

// AppBackground.propTypes = {
//   children: PropTypes.node.isRequired,
// };




import { Box } from "@chakra-ui/react";
import backgroundImage from "../../assets/bg.jpg";
import darkBackgroundImage from "../../assets/darkMode.jpg"
import PropTypes from 'prop-types';
import { useContext } from "react";
import { Context } from "../../context/context";

const AppBackground = ({ children }) => {
  const context = useContext(Context);
  return (
    <Box
      backgroundImage={`url(${context.clearTheme ? backgroundImage : darkBackgroundImage })`}
      backgroundSize="cover"
      backgroundPosition="center"
      height="100vh"
    >
      {children}
    </Box>
  );
}

export default AppBackground;

AppBackground.propTypes = {
  children: PropTypes.node.isRequired,
};
