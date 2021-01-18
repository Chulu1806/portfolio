import React, { useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import { Box, Grid } from '@material-ui/core';
import '../../App.css';
import skillsList from './skillsList';
import Bar from './Bar';

function Skills() {
  const [visible, setVisible] = useState(false);
  const numCols = 2;
  const columns = Array.from(Array(numCols).keys());
  const numElts = skillsList.length / numCols;

  const onChange = (isVisible) => {
    setVisible(isVisible);
  };

  return (
    <Box p={8} style={{ background: '#2E455E', color: 'white' }}>
      <VisibilitySensor onChange={onChange} partialVisibility="bottom" offset={{ bottom: 0 }}>
        <Grid container justify="center" alignItems="stretch">
          { columns.map((c) => {
            const skillsToRender = skillsList.slice(c * numElts, (c * numElts) + numElts);
            return (
              <Grid key={c} item sm={12 / numCols}>
                {skillsToRender.map((s) => (
                  <Bar
                    key={s.id}
                    label={s.label}
                    value={s.value}
                    color="#979898"
                    visible={visible}
                  />
                ))}
              </Grid>
            );
          })}
        </Grid>
      </VisibilitySensor>
    </Box>
  );
}

export default Skills;
