import React from 'react';

import classes from './CityList.module.scss';

import CityItem from './CityItem/CityItem';

const CITY_LIST = [
   {name: 'Lyon', id: 2996944},
   {name: 'Marseille', id: 6447142},
   {name: 'Paris', id: 6455259},
   {name: 'London', id: 2643743},
   {name: 'Madrid', id: 3117735},
   {name: 'Berlin', id: 4348460},
];

const CityList = props => {
   
   const list = CITY_LIST.map(city => {
      return <CityItem click={() => props.changeCity(city.id)} name={city.name} key={city.id} />
   })


   return ( 
      <ul className={classes.CityList}>
         {list}
      </ul>
    );
}

export default CityList;