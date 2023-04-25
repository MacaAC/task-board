// import { Box } from "@chakra-ui/react";
// import backgroundImage from "../../assets/bg.jpg";
// import darkBackgroundImage from "../../assets/darkMode.jpg"
// import PropTypes from 'prop-types';
// import { useContext } from "react";
// import { Context } from "../../context/context";

// const AppBackground = ({ children }) => {
//   const context = useContext(Context);
//   return (
//     <Box
//       backgroundImage={`url(${context.clearTheme ? backgroundImage : darkBackgroundImage })`}
//       backgroundSize="100%"
//       backgroundRepeat="repeat"
//       backgroundPosition="center"
//       height="100vh"
//     >
//       {children}
//     </Box>
//   );
// }

// export default AppBackground;

// AppBackground.propTypes = {
//   children: PropTypes.node.isRequired,
// };

import { Box } from "@chakra-ui/react";
import PropTypes from 'prop-types';
import { useContext } from "react";
import { Context } from "../../context/context";

const AppBackground = ({ children }) => {
  const context = useContext(Context);
  const bgColors = context.clearTheme ? "linear-gradient(to bottom right, #F8BBD0, #FF7043)" : "linear-gradient(to bottom right, #5E35B1, #212121)";
  return (
    <Box
      background={bgColors}
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
