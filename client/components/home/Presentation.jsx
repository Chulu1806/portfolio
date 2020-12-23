/* eslint-disable react/jsx-one-expression-per-line */
import { Typography } from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../App.css';

const font = "'Amatic SC', bold";

function Presentation() {
  const { t } = useTranslation();

  return (
    <div style={{ color: 'white', fontFamily: font, textShadow: 'black 3px 2px' }}>
      <Typography variant="h1"><b>{t('hi')}, </b></Typography>
      <Typography variant="h2"><b>{t('presentation')} Michelle Leano Martinet </b></Typography>
      <Typography variant="h4"><b>{t('do')}</b></Typography>
    </div>
  );
}

export default Presentation;
