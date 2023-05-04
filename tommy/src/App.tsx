import React from 'react';
import headshot from './images/ComebackPromo002 2.png';
import Box from '@mui/material/Box';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      <Box>
      <img className="headshot" src={headshot} alt="headshot" />
      </Box>


      <div className="clickableBackground">
      <Box>
        <p >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae amet laborum eius neque expedita cumque ipsam error esse ex? Tempore, aspernatur atque veritatis earum velit perferendis illum quae nobis illo.
        </p>
      </Box>
      </div>
    </div>
  );
}

export default App;
