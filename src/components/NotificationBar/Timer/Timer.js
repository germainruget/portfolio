import React, {useState, useEffect} from 'react';

import classes from './Timer.module.scss';

import Icon from '@icon-park/react/es/all';

const Timer = () => {
   const [time, setTime] = useState(new Date().toLocaleTimeString());
   const date = new Date().toLocaleDateString();

   useEffect(() => {
      const timerInterval = setInterval(() => {
         setTime(new Date().toLocaleTimeString());
      }, );

      return () => clearInterval(timerInterval);
   })

   return (
      <div className={classes.Timer}>
         <Icon type='CalendarThree' theme="outline" size="20"/><span className={classes.TimeDisplay}>{date}</span>
         <span className={classes.Separator}></span>
         <Icon type='Time' theme="outline" size="20"/><span className={classes.TimeDisplay}>{time}</span>
      </div>
   );
}

export default Timer;