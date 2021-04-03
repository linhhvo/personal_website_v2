import React from 'react';
import classes from './Background.module.css';

export const Background = () => {
  return (
    <div className={classes.container}>
      <div className={classes.ellipse1}></div>
      <div className={classes.ellipse2}></div>
      <div className={classes.ellipse3}></div>
      <div className={classes.ellipse4}></div>
      <div className={classes.ellipse5}></div>
    </div>
  );
};
