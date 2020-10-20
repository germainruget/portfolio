import React, { Fragment } from 'react';
import Icon from '@icon-park/react/es/all';

import classes from './WeatherDisplay.module.scss';

import Loader from '../../../../UI/Loader/Loader';

const WeatherDisplay = props => {
   console.log(props.data)
   let weather = <Loader />

   if (!props.loading) {
      weather = (
         <Fragment>
            <h3>{props.data.name}</h3>
            <span className={classes.Temp}>
               <span className={classes.MainTemp}>{props.data.temp.toFixed(0)}°C</span>
               <Icon type={props.data.icon} theme="outline" size='50' />
            </span>
            <div className={classes.Description}>{props.data.description}</div>
            <div>Min / Max : <strong>{props.data.temp_min.toFixed(0)}°C</strong> / <strong>{props.data.temp_max.toFixed(0)}°C</strong></div>
         </Fragment>
      )
   }

   return (
      <div className={classes.WeatherDisplay}>
         {weather}
      </div>
   );
}

export default WeatherDisplay;