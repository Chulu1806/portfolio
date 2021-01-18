import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  BottomNavigation, BottomNavigationAction, ClickAwayListener,
  Grow, MenuItem, MenuList, Paper, Popper, withStyles,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import '../../App.css';
import { Translate } from '@material-ui/icons';

const font = "'Amatic SC', bold";

const useStyles = makeStyles({
  root: {
    background: 'transparent',
  },
});

const Action = withStyles({
  root: {
    fontFamily: font,
    color: 'white',
    fontSize: '25px',
  },
  selected: {
    color: 'rgb(171,135,139)',
    textDecoration: 'underline',
    textDecorationColor: 'white',
  },
  label: {
    fontSize: '25px',
  },
})(BottomNavigationAction);

const Item = withStyles({
  root: {
    fontSize: '25px',
    fontFamily: font,
    background: 'transparent',
    color: 'white',
  },
})(MenuItem);

function Navigator() {
  // eslint-disable-next-line no-unused-vars
  const { t, i18n } = useTranslation();
  const classes = useStyles();
  const [value, setValue] = useState(4);
  const [open, setOpen] = React.useState(false);

  const anchorRef = React.useRef(null);

  const handleClose = (event, index) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    i18n.changeLanguage(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        if (newValue !== 4) document.getElementById(newValue).scrollIntoView();
        setValue(newValue);
      }}
      className={classes.root}
      showLabels
    >
      <Action value={t('home')} label={t('home')} />
      <Action value={t('skills')} label={t('skills')} />
      <Action value={t('education')} label={t('education')} />
      <Action value="Portfolio" label="Portfolio" />
      <Action
        value={4}
        ref={anchorRef}
        style={{ color: 'white' }}
        aria-controls={open ? 'menu-list-grow' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        icon={(
          <Translate />
        )}
      />
      <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
        {({ TransitionProps, placement }) => (
          <Grow
              // eslint-disable-next-line react/jsx-props-no-spreading
            {...TransitionProps}
            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom', background: 'transparent' }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList style={{ background: 'transparent' }} autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                  <Item onClick={(event) => handleClose(event, 'en')}>English</Item>
                  <Item onClick={(event) => handleClose(event, 'es')}>Español</Item>
                  <Item onClick={(event) => handleClose(event, 'fr')}>Français</Item>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </BottomNavigation>
  );
}

export default Navigator;
