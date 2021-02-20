import React from 'react';
import classes from './Dashboard.module.css';
import profile_pic from '../assets/profile.png';

import {Github} from './icons/Github';
import {Linkedin} from './icons/Linkedin';
import {Email} from './icons/Email';
import {ThemeLight} from './icons/ThemeLight';


export const Dashboard = () => {
  return (
    <div className={classes.container}>
      <div className={classes.profile}>

        <img className={classes.profilePic} src={profile_pic} alt="an illustration of myself" width="130px" height="130px" />
        <p>Linh Vo</p>

        <div className={classes.iconContainer}>
          <Github />
          <Linkedin />
          <Email />
        </div>

        <ThemeLight />
      </div>
    </div>

  );
};