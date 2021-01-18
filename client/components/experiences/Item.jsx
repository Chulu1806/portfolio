import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardContent, CardHeader, CardMedia, CardActionArea, CardActions,
  Grid, Collapse, Typography, Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
// import { LinkIcon } from '@material-ui/icons/Link';
// import { useSpring, animated } from 'react-spring';

const useStyles = makeStyles(() => ({
  media: {
    height: 200,
  },
}));

function Item({ item, expanded, onClick }) {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Grid item sm={4}>
      <Card onClick={onClick} style={{ height: '100%' }}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={item.img}
            title={item.title}
          />
        </CardActionArea>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardHeader
            title={item.title}
            subheader={item.section}
          />
          <CardContent>
            <Typography paragraph>{t(item.work)}</Typography>
          </CardContent>
          {item.link && (
          <CardActions>
            <Button href={t(item.link)}>{t('link')}</Button>
          </CardActions>
          )}
        </Collapse>
      </Card>
    </Grid>
  );
}

export default Item;

Item.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    section: PropTypes.string,
    img: PropTypes.string,
    work: PropTypes.string,
    link: PropTypes.string,
  }).isRequired,
  expanded: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
