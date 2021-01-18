import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import Parallax from '../Parallax';
import Education from './Education';
import bg from '../../assets/bg1.png';
import '../../App.css';

const font = "'News Cycle', bold";
const theme = createMuiTheme({
  typography: {
    fontFamily: font,
  },
});

function Index() {
  const { t } = useTranslation();

  return (
    <ThemeProvider theme={theme}>
      <div id={(t('education'))}>
        <Parallax
          image={bg}
          title={(t('education')).toUpperCase()}
          bgColor="#808291"
          textColor="white"
        />
        <Education />
      </div>
    </ThemeProvider>

  );
}

export default Index;
