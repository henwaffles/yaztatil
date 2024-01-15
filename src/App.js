import CountdownTimer from "./Components/CountdownTimer/CountdownTimer";
import './App.css'
import { Box } from '@chakra-ui/react';

function App() {
  return (
  
   <div className="App">
     <Box className="Box">
       <CountdownTimer countdownTimestampMs={1717841700000}/>
       
     </Box>
   </div>
  );
}

export default App;
