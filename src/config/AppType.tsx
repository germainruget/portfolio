import React from 'react';

/** APPS **/
import Calculator from '../components/Application/Content/Calculator/Calculator';
import BurgerBuilder from '../components/Application/Content/BurgerBuilder/BurgerBuilder';
import LevainGame from '../components/Application/Content/LevainGame/LevainGame';
import Weather from '../components/Application/Content/Weather/Weather';
import PDFReader from '../components/Application/Content/PDFReader/PDFReader';
import Explorer from '../components/Application/Content/Explorer/Explorer';
interface Config {
   name: string;
   icon: string;
   content: JSX.Element;
   needLoader: boolean;
   onMobile: boolean;
   appBar: boolean;
   width: string;
   height?: string;
}

export interface Apps {
   [key: string]: Config;
}


const AppType:Apps = {
   CALCULATOR: { name: 'Calculator', icon: 'Calculator', content: <Calculator />, needLoader: false, onMobile: true, appBar: false, width: '200px'},
   BURGER: { name: 'Burger', icon: 'Hamburger', content: <BurgerBuilder />, needLoader: false, onMobile: true, appBar: false, width: '500px' },
   LEVAINGAME: { name: 'Levain', icon: 'GameHandle', content: <LevainGame />, needLoader: true, onMobile: false, appBar: false, width: '70%' },
   WEATHER: { name: 'Weather', icon: 'Sunny', content: <Weather />, needLoader: false, onMobile: true, appBar: false, width: '450px' },
   PDFREADER: { name: 'PDFReader', icon: 'FilePdf', content: <PDFReader />, needLoader: true, onMobile: true, appBar: true, width: '', height:'100%' },
   EXPLORER: { name: 'Explorer', icon: 'FolderOpen', content: <Explorer />, needLoader: false, onMobile: true, appBar: true, width: '100%', height:'100%' },
}

export default AppType;