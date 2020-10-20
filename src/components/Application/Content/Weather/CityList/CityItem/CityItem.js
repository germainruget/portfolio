import React from 'react';

import classes from './CityItem.module.scss';

const CityItem = props => {
   return (
      <li className={classes.CityItem} id={props.id} onClick={props.click}>{props.name}</li>
   );
}

export default CityItem;