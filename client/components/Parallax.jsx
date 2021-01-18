import React from 'react';
import PropTypes from 'prop-types';
import {
  Box, Fab, List, ListItem, ListItemText, Popover, Typography,
  withStyles,
} from '@material-ui/core';
import '../App.css';
import { Menu } from '@material-ui/icons';
import { useTranslation } from 'react-i18next';

const font = "'Amatic SC', bold";

const Item = withStyles({
  root: {
    fontSize: '25px',
    fontFamily: font,
    letterSpacing: '2px',
    color: 'white',
  },
})(ListItem);

const Pop = withStyles({
  paper: {
    background: 'rgb(14,33,49)',
    padding: '15px',
  },
})(Popover);

function Parallax(props) {
  const {
    title, image, bgColor, textColor,
  } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  // const [value, setValue] = React.useState(title);
  const { t } = useTranslation();

  const links = [
    t('home'),
    t('skills'),
    t('education'),
    'Portfolio',
  ];

  const anchorRef = React.useRef(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    // document.getElementById(newValue).scrollIntoView();
    // setValue(value);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleGoTo = (value) => {
    document.getElementById(value).scrollIntoView();
    setAnchorEl(null);
  };
  // const handleToggle = () => {
  //   setOpen((prevOpen) => !prevOpen);
  // };

  const styles = {
    parallax: {
      backgroundImage: `url(${image})`,
      minHeight: '350px',
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    },
    border: {
      backgroundColor: bgColor,
      color: textColor,
      padding: '18px',
      fontFamily: font,
      letterSpacing: '10px',
    },
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <Box style={styles.parallax} display="flex" justifyContent="center" alignContent="center">
      <Box display="flex" alignItems="center" justifyContent="center" alignContent="center" flexGrow={1}>
        <Typography variant="h3" style={styles.border}>{title}</Typography>
      </Box>
      <Box mr={1} mt={3} alignSelf="flex-start">
        <Fab
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleClick}
        >
          <Menu />
        </Fab>
        <Pop
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <List component="nav" aria-label="secondary mailbox folders">
            {
              links.map((link) => (
                <Item key={link} button onClick={() => handleGoTo(link)}>
                  <ListItemText primary={link} />
                </Item>
              ))
            }
          </List>
        </Pop>
      </Box>
    </Box>
  );
}
export default Parallax;

Parallax.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
};
