import React from 'react';
import { useTranslation } from 'react-i18next';
// import VisibilitySensor from 'react-visibility-sensor';
import Parallax from '../Parallax';
import Skills from './Skills';
import bg from '../../assets/bg2.png';

function Index() {
  const { t } = useTranslation();

  return (
    <div id={(t('skills'))}>
      <Parallax
        image={bg}
        title={(t('skills')).toUpperCase()}
        bgColor="#C59CA0"
        textColor="white"
      />
      <Skills />
    </div>

  );
}

export default Index;
