import React, { useState } from 'react';

import classes from './NotificationBar.module.scss';

import Timer from './Timer/Timer';
import TourComp from '../TourComp/TourComp';

const NotificationBar = React.memo(() => {
   return (
      <div className={classes.NotificationBar}>
         <TourComp type="icon"/>
         <Timer />
      </div>
   );
});

export default NotificationBar;