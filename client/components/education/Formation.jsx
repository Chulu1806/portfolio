import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
// import { Spring } from 'react-spring/renderprops';
import { useSpring, animated } from 'react-spring';

function Formation({ item, position, visible }) {
  const { t } = useTranslation();
  const props = useSpring({
    to: { borderBottom: visible ? 'solid black' : 'solid white', letterSpacing: visible ? '3px' : '1px' },
    from: { borderBottom: 'solid white', letterSpacing: '1px', transition: 'border 1s, letter-spacing 0.25s' },
  });
  const props1 = useSpring({
    to: { letterSpacing: visible ? '2px' : '1px' },
    from: { letterSpacing: '1px', transition: 'border 1s, letter-spacing 0.25s' },
  });

  return (
    <Box>
      <Box display="flex" justifyContent={position === 'left' ? 'flex-start' : 'flex-end'}>
        <animated.div style={{ ...props, width: 'fit-content' }}>
          <Typography variant="h6" align={position}>
            {t(item.establishment)}
          </Typography>
        </animated.div>
      </Box>
      <animated.div style={{ ...props1 }}>
        <Typography align={position}>
          {`${t(item.formation)} ${t(item.name)}`}
        </Typography>
      </animated.div>
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
  visible: PropTypes.bool.isRequired,
};
