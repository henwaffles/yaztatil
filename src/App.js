import CountdownTimer from "./Components/CountdownTimer/CountdownTimer";
import './App.css'
import { Box } from '@chakra-ui/react';

function App() {
  return (
  
   <div className="App">
     <Box className="Box">
       <CountdownTimer countdownTimestampMs={1655476200000}/>
       
     </Box>
   </div>
  );
}

export default App;
