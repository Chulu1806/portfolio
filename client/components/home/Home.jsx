import React from 'react';
import { Box, Grid } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import Presentation from './Presentation';
import Uncover from './Uncover';
import Picture from '../../assets/profile.png';
import Cover from '../../assets/cover1.png';
import './style.css';
import Navigator from './Navigator';

function Home() {
  const { t } = useTranslation();
  return (
    <div id={t('home')}>
      <Box
        id="home"
        height="100vh"
      >
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          style={{ height: '100%' }}
        >
          <Grid item sm={6} style={{ height: '100%' }}>
            <Box display="flex" width={1} height={1} justifyContent="center">
              <Box alignSelf="center">
                <Uncover image={Picture} cover={Cover} />
              </Box>
            </Box>
          </Grid>
          <Grid item sm={6} style={{ height: '100%' }}>
            <Box display="flex" flexDirection="column" height={1}>
              <Box height={0.3} m={3}>
                <Navigator />
              </Box>
              <Box height={0.7}>
                <Presentation />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Home;
