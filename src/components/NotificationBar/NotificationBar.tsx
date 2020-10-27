import React from 'react';

import classes from './NotificationBar.module.scss';

import Timer from './Timer/Timer';

const NotificationBar = React.memo(() => {
   // console.log('RENDER NOTIFICATION BAR');
   return (
      <div className={classes.NotificationBar}>
         <Timer />
      </div>
   );
});

export default NotificationBar;