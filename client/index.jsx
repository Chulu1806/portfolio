import React from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import ReactVisibilitySensor from 'react-visibility-sensor';
// eslint-disable-next-line no-unused-vars
import i18n from './i18n';
import Home from './components/home/Home';
import './App.css';
import Skills from './components/skills/Skills';
import Education from './components/education/Education';
import Experiences from './components/experiences/Experiences';

const font = "'Amatic SCs', Regular 400";
const theme = createMuiTheme({
  typography: {
    fontFamily: font,
  },
});

const Index = () => {
  const onChange = (isVisible) => {
    console.log(`is visible : ${isVisible}`);
  };
  return (
    <ThemeProvider theme={theme}>
      <Home />
      <div
        style={{
          backgroundImage: "url('https://wallpapercave.com/wp/wp2445772.jpg')",
          minHeight: '500px',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      />
      <ReactVisibilitySensor onChange={onChange}>
        <Skills />
      </ReactVisibilitySensor>
      <div
        style={{
          backgroundImage: "url('https://webpuccino.com/wp-content/uploads/2017/12/coffee-code.jpg')",
          minHeight: '500px',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      />
      <Education />
      <div
        style={{
          backgroundImage: "url('https://cdn.pixabay.com/photo/2016/11/29/06/18/home-office-1867761_1280.jpg')",
          minHeight: '500px',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      />
      <Experiences />
    </ThemeProvider>
  );
};

ReactDOM.render(<Index />, document.getElementById('root'));
