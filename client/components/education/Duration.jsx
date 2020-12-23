import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@material-ui/core';
import '../../App.css';

const font = "'News Cycle', bold";

function Duration({ item, position }) {
  return (
    <Box>
      <Typography variant="subtitle1" align={position} style={{ fontFamily: font }}>
        {`${item.start} - ${item.end}`}
      </Typography>
    </Box>
  );
}

export default Duration;

Duration.propTypes = {
  item: PropTypes.shape({
    start: PropTypes.number,
    end: PropTypes.number,
  }).isRequired,
  position: PropTypes.string.isRequired,
};
