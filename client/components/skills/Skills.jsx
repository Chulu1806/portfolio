import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import '../../App.css';
import { useTranslation } from 'react-i18next';
import skillsList from './skillsList';
import Bar from './Bar';

const font = "'Amatic SC', bold";

function Skills() {
  const numCols = 2;
  const columns = Array.from(Array(numCols).keys());
  const numElts = skillsList.length / numCols;
  const { t } = useTranslation();

  return (
    <Box m={2}>
      <Grid container alignItems="center">
        <Grid item sm={1}>
          <Typography
            variant="h3"
            style={{
              fontFamily: font, textOrientation: 'upright', writingMode: 'vertical-rl',
            }}
          >
            <b>{(t('skills')).toUpperCase()}</b>
          </Typography>
        </Grid>
        <Grid item sm={10}>
          <Grid container justify="center" alignItems="stretch">
            { columns.map((c) => {
              const skillsToRender = skillsList.slice(c * numElts, (c * numElts) + numElts);
              return (
                <Grid key={c} item sm={12 / numCols}>
                  {skillsToRender.map((s) => (
                    <Bar key={s.id} label={s.label} value={s.value} color="#2E455E" />
                  ))}
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Skills;
