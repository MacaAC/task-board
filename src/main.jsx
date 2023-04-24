import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ContextProvider } from "./provider/ContextProvider";
import { ChakraProvider } from "@chakra-ui/react";


ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <ChakraProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ChakraProvider>
  </ContextProvider>

)
