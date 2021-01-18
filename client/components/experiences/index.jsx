import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Parallax from '../Parallax';
import Experiences from './Experiences';
import bg from '../../assets/bg3copy.png';
import '../../App.css';

const font = "'News Cycle', bold";
const theme = createMuiTheme({
  typography: {
    fontFamily: font,
  },
});

function Index() {
  return (
    <ThemeProvider theme={theme}>
      <div id="Portfolio">
        <Parallax
          image={bg}
          title="PORTFOLIO"
          bgColor="#2E455E"
          textColor="white"
        />
        <Experiences />
      </div>
    </ThemeProvider>

  );
}

export default Index;
