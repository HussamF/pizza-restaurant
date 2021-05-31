import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from '@material-ui/core';
import Logo from '../../assets/logo.png';

import { ShoppingCart } from '@material-ui/icons';
import useStyles from './styles';
import { useGlobalContext } from '../../context';
function MenuNav() {
  const { cart } = useGlobalContext();
  const classes = useStyles();
  return (
    <>
      <AppBar position='fixed' className={classes.appBar} colo='inherit'>
        <Toolbar>
          <Typography variant='h6' className={classes.title} color='inherit'>
            <img
              src={Logo}
              alt='Commerce.js'
              height='25px'
              className={classes.image}
            />
            GreatePizza
          </Typography>
          <div className={classes.grow} />
          <div className={classes.button}>
            <IconButton aria-label='show cart items' color='inherit'>
              <Badge badgeContent={cart.total_items}>
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default MenuNav;
