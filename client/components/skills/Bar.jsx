import React
// , { useState }
  from 'react';
import PropTypes from 'prop-types';
import {
  Box, Typography,
  // Grow,
} from '@material-ui/core';
// import { CSSTransition } from 'react-transition-group';
import '../../App.css';
import { Spring } from 'react-spring/renderprops';

const font1 = "'News Cycle', bold";

function Bar({
  label, value, color, visible,
}) {
  // const [progress, setProgress] = useState(0);
  const height = 20;
  const backStyle = {
    borderRadius: `${height / 2}px`,
    borderColor: '#E6E6E9',
    borderStyle: 'solid',
  };
  const frontStyle = {
    borderRadius: `${height / 2}px`,
    background: color,
  };

  return (
    <Box m={1} p={1} style={{ transformOrigin: 'center', rotate: '90deg' }}>
      <Typography variant="h6" style={{ fontFamily: font1 }}>{label}</Typography>
      <Box
        height="20px"
        style={backStyle}
        display="flex"
        alignItems="center"
      >
        { visible && (
        <Spring from={{ percent: 0 }} to={{ percent: value }}>
          {({ percent }) => (
            <Box
              height="15px"
              width={percent / 100}
              style={frontStyle}
            />
          )}
        </Spring>
        )}
      </Box>
    </Box>
  );
}

export default Bar;

Bar.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
};
