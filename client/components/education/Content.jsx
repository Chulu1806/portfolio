import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid } from '@material-ui/core';
import Duration from './Duration';
import Formation from './Formation';

function Content({ item }) {
  const isLeft = item.id % 2 === 0;
  return (
    <Box m={2}>
      <Grid container>
        <Grid item sm={6} style={{ borderRight: '1px solid black' }}>
          <Box m={3}>
            { isLeft
              ? <Duration item={item} position="right" />
              : <Formation item={item} position="right" />}
          </Box>
        </Grid>
        <Grid item sm={6}>
          <Box m={3}>
            { isLeft
              ? <Formation item={item} position="left" />
              : <Duration item={item} position="left" />}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Content;

Content.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    establishment: PropTypes.string,
    formation: PropTypes.string,
    name: PropTypes.string,
    start: PropTypes.number,
    end: PropTypes.number,
  }).isRequired,
};
