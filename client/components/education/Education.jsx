import React from 'react';
import {
  Box, Grid, Typography,
} from '@material-ui/core';
import '../../App.css';
import { useTranslation } from 'react-i18next';
import educationList from './educationList';
import Content from './Content';

const font = "'Amatic SC', bold";

function Education() {
  const { t } = useTranslation();

  return (
    <Box>
      <Grid container alignItems="center">
        <Grid item sm={1}>
          <Typography
            variant="h4"
            style={{
              fontFamily: font, textOrientation: 'upright', writingMode: 'vertical-rl',
            }}
          >
            <b>{(t('education')).toUpperCase()}</b>
          </Typography>
        </Grid>
        <Grid item sm={10}>
          {educationList.map((e) => <Content key={e.id} item={e} />)}
        </Grid>
      </Grid>
    </Box>
  );
}

export default Education;
