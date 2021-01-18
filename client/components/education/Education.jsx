import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import VisibilitySensor from 'react-visibility-sensor';
import educationList from './educationList';
import Content from './Content';

function Education() {
  const [visible, setVisible] = useState(false);

  const onChange = (isVisible) => {
    setVisible(isVisible);
  };

  return (
    <Box p={6}>
      <VisibilitySensor onChange={onChange} partialVisibility="bottom" offset={{ bottom: 0 }}>
        <Box>
          {educationList.map((e) => <Content key={e.id} item={e} visible={visible} />)}
        </Box>
      </VisibilitySensor>
    </Box>
  );
}

export default Education;
