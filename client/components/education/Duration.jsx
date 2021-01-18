import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@material-ui/core';

function Duration({ item, position }) {
  return (
    <Box>
      <Typography variant="subtitle1" align={position}>
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
