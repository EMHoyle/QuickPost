import React from 'react';
import HomeStyles from './HomeStyles';
import HomeContent from './HomeContent';
import MainDrawer from '../Main/Main';

const Home = () => {
  const classes = HomeStyles();

  return (
    <div className={classes.root}>
      <main className={classes.content}>
            <div className={classes.toolbar}>
              <MainDrawer/>
              <HomeContent/>
            </div>
      </main>
    </div>
  );
}

export default Home;