import React, { useState } from 'react';
import { Box, Grid } from '@material-ui/core';
import experiencesList from './experiencesList';
import Item from './Item';

function Experiences() {
  const [expanded, setExpanded] = useState(false);
  const onClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box display="flex" justifyContent="center" p={6} style={{ background: '#2E455E', color: 'white' }}>
      <Grid container spacing={2}>
        {experiencesList.map((item) => (
          <Item key={item.id} item={item} expanded={expanded} onClick={onClick} />
        ))}
      </Grid>
    </Box>
  );
}

export default Experiences;
