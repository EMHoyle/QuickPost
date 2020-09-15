import React from 'react';
import HomeStyles from './HomeStyles';
import HomeContent from './HomeContent';

const Home = () => {
  const classes = HomeStyles();

  return (
    <div className={classes.root}>
      <main className={classes.content}>
            <div className={classes.toolbar}>
              <HomeContent/>
            </div>
      </main>
    </div>
  );
}

export default Home;