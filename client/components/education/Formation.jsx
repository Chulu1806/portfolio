import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@material-ui/core';
import '../../App.css';
import { useTranslation } from 'react-i18next';

const font = "'News Cycle', bold";

function Formation({ item, position }) {
  const { t } = useTranslation();

  return (
    <Box>
      <Typography variant="h6" align={position} style={{ fontFamily: font, borderBottom: '1px solid black' }}>{t(item.establishment)}</Typography>
      <Typography align={position} style={{ fontFamily: font }}>
        {`${t(item.formation)} ${t(item.name)}`}
      </Typography>
    </Box>
  );
}

export default Formation;

Formation.propTypes = {
  item: PropTypes.shape({
    establishment: PropTypes.string,
    formation: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
  position: PropTypes.string.isRequired,
};
