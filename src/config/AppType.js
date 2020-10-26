import React from 'react';

/** APPS **/
import Calculator from '../components/Application/Content/Calculator/Calculator';
import BurgerBuilder from '../components/Application/Content/BurgerBuilder/BurgerBuilder';
import LevainGame from '../components/Application/Content/LevainGame/LevainGame';
import Weather from '../components/Application/Content/Weather/Weather';

const AppType = {
   CALCULATOR: {name: 'Calculator', icon: 'Calculator', content: <Calculator/>, needLoader: false, appBar: true,},
   BURGER: {name: 'Burger', icon: 'Hamburger', content: <BurgerBuilder/>, needLoader: false, appBar: true, width: '500px'},
   LEVAINGAME: {name: 'Levain', icon: 'GameHandle', content: <LevainGame />, needLoader: true, appBar: false, width: '70%'},
   WEATHER: {name: 'Weather', icon: 'Sunny', content: <Weather/>, needLoader: false, appBar: false, width: '450px'},
   TEST1: {name: 'Test 1', icon: 'Sunny', content: <Weather/>, needLoader: false, appBar: false, width: '450px'},
   TEST2: {name: 'Test 2', icon: 'Sunny', content: <Weather/>, needLoader: false, appBar: false, width: '450px'}
}

export default AppType;