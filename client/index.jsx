import React from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
// eslint-disable-next-line no-unused-vars
import i18n from './i18n';
import Home from './components/home/Home';
import './App.css';
import Skills from './components/skills';
import Education from './components/education';
import Experiences from './components/experiences';

const font = "'Amatic SCs', Regular 400";
const theme = createMuiTheme({
  typography: {
    fontFamily: font,
  },
});

const Index = () => (
  <ThemeProvider theme={theme}>
    <Home />
    <Skills />
    <Education />
    <Experiences />
  </ThemeProvider>
);

ReactDOM.render(<Index />, document.getElementById('root'));
