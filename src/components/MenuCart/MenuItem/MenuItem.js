import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import useStyles from './styles';
import { useGlobalContext } from '../../../context';
const MenuItem = ({ menuItem }) => {
  const { addToCart } = useGlobalContext();
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={menuItem.media.source}
        title={menuItem.name}
      />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography varian='h5' gutterBottom>
            {menuItem.name}
          </Typography>
          <Typography varian='h5'>
            {menuItem.price.formatted_with_symbol}
          </Typography>
        </div>
        <Typography
          dangerouslySetInnerHTML={{ __html: menuItem.description }}
          variant='body2'
          color='textSecondary'
        />
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton
          aria-label='Add to Cart'
          onClick={() => addToCart(menuItem.id, 1)}
        >
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default MenuItem;
