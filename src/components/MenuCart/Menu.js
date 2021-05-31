import React from 'react';
import { Grid } from '@material-ui/core';
import MenuItem from './MenuItem/MenuItem';
import useStyles from './styles';
import { useGlobalContext } from '../../context';

// const menuItems = [
//   {
//     id: 1,
//     name: 'Beef Pizza',
//     describtion: 'beef, onion, tomato sauce, mushroom',
//     price: '$13.99',
//     img: 'https://www.smilepizza.com.ua/images/cache/1623/1_1500.jpg',
//   },
//   {
//     id: 2,
//     name: 'Chicken Pizza',
//     describtion: 'chicken, onion, tomato sauce, mushroom',
//     price: '$11.99',
//     img: 'https://www.licious.in/blog/wp-content/uploads/2020/12/BBQ-Chicken-Pizza.jpg',
//   },
//   {
//     id: 3,
//     name: 'FourCheese Pizza',
//     describtion: 'beef, onion, tomato sauce, mushroom',
//     price: '$16.99',
//     img: 'https://www.repstatic.it/content/nazionale/img/2020/02/13/164320515-2146304c-699f-4698-a160-67c4a25dcfd7.jpg',
//   },
// ];

const Menu = () => {
  const classes = useStyles();
  const { menuItems } = useGlobalContext();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify='center' spacing={4}>
        {menuItems.map((menuItem) => {
          return (
            <Grid item key={menuItem.id} xs={12} sm={6} md={4} lg={3}>
              <MenuItem menuItem={menuItem} />
            </Grid>
          );
        })}
      </Grid>
    </main>
  );
};

export default Menu;
