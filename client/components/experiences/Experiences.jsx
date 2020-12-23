/* eslint-disable no-unused-vars */
import React from 'react';
import {
  Box, Card, CardContent, CardHeader, CardMedia, GridList, GridListTile,
  List, ListItem, ListItemIcon, ListItemText, Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import { FiberManualRecord } from '@material-ui/icons';
import { useTranslation } from 'react-i18next';
import experiencesList from './experiencesList';
import '../../App.css';

const font = "'News Cycle', bold";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  font: {
    fontFamily: font,
  },
}));

function Experiences() {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Box width={1} display="flex" justifyContent="center">
      {/* <List>
        {experiencesList.map((item) => (
          <ListItem key={item.id}>
            <ListItemIcon>
              <FiberManualRecord />
            </ListItemIcon>
            <ListItemText
              primary={(
                <Box>
                  <Typography variant="h6" style={{ fontFamily: font, width: 'fit-content' }}>
                    {`${item.company} - ${item.section}`}
                  </Typography>
    <Typography style={{ fontFamily: font, marginBottom: '15px' }}>{t('internship')}</Typography>
                </Box>
              )}
              secondary={(
                <>
                  <Typography
                    component="span"
                    variant="body1"
                    style={{ fontFamily: font }}
                  >
                    {t(item.work)}
                  </Typography>
                </>
          )}
            />
          </ListItem>
        ))}
      </List> */}
      <GridList cellHeight={460}>
        {experiencesList.map((item) => (
          <GridListTile key={item.id}>
            <Card className={classes.root}>
              <CardHeader
                className={classes.font}
                title={item.title}
                subheader={item.section}
              />
              {console.log(item.img)}
              <CardMedia
                className={classes.media}
                image={item.img}
                title={item.title}
              />
              <CardContent className={classes.media}>
                <Typography variant="body1" style={{ fontFamily: font }}>
                  {t(item.work)}
                </Typography>
              </CardContent>
            </Card>
          </GridListTile>
        ))}
      </GridList>
    </Box>
  );
}

export default Experiences;
