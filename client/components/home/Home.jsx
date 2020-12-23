import React from 'react';
import { Box } from '@material-ui/core';
import Presentation from './Presentation';
import Uncover from './Uncover';
import Picture from '../../assets/profile.png';
import Cover from '../../assets/cover1.png';
import './style.css';

function Home() {
  return (
    <Box id="home" height="100vh" display="flex" justifyContent="center" alignItems="center">
      <Box width="50%" display="flex" justifyContent="center" alignItems="center">
        <Uncover image={Picture} cover={Cover} />
      </Box>
      <Box width="50%">
        <Presentation />
      </Box>
    </Box>
  );
}

export default Home;
