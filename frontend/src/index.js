import { ChakraProvider, ColorModeScript,extendTheme } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import store from './redux/store';
import {Provider as ReduxProvider} from "react-redux" 


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);


const theme = extendTheme({
  brand: {
     100: "#f7fafc",
     
     500: "#12abef",
    
     900: "#1a202c",
  },
});


root.render(
  <StrictMode>
      <ReduxProvider store={store}>
          <ChakraProvider theme={theme}>
              <ColorModeScript />
              <App />
          </ChakraProvider>
        
     </ReduxProvider>
 </StrictMode> 
);

 

