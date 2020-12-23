import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@material-ui/core';
import '../../App.css';

const font1 = "'News Cycle', bold";

function Bar({ label, value, color }) {
  // const [progress, setProgress] = useState(0);
  const height = 20;
  const backStyle = {
    borderRadius: `${height / 2}px`, backgroundColor: 'transparent', borderColor: '#E6E6E9', borderStyle: 'solid',
  };
  const frontStyle = { borderRadius: `${height / 2}px`, backgroundColor: color };

  // const onMouseEvent = () => {
  //   for (let i = 0; i <= value; i += 1) {
  //     setProgress(i);
  //   }
  // };

  return (
    <Box m={1} p={1}>
      <Typography variant="h6" style={{ fontFamily: font1 }}>{label}</Typography>
      <Box
        height="20px"
        style={backStyle}
        display="flex"
        alignItems="center"
      >
        <Box height="15px" width={value / 100} style={frontStyle} />
      </Box>
    </Box>
  );
}

export default Bar;

Bar.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};
