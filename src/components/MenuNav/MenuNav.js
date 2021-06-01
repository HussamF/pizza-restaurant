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
import { Link, useLocation } from 'react-router-dom';
function MenuNav() {
  const { cart } = useGlobalContext();
  const classes = useStyles();
  const location = useLocation();
  return (
    <>
      <AppBar position='fixed' className={classes.appBar} colo='inherit'>
        <Toolbar>
          <Typography
            component={Link}
            to='/'
            variant='h6'
            className={classes.title}
            color='inherit'
          >
            <img
              src={Logo}
              alt='Commerce.js'
              height='25px'
              className={classes.image}
            />
            GreatePizza
          </Typography>
          <div className={classes.grow} />
          {location.pathname === '/menu' && (
            <div className={classes.button}>
              <IconButton
                component={Link}
                to='/cart'
                aria-label='show cart items'
                color='inherit'
              >
                <Badge badgeContent={cart.total_items}>
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}

export default MenuNav;
