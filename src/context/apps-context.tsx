import React, { useState, useCallback } from 'react';

import AppType from '../config/AppType';

export interface Config {
   name: string;
   content: JSX.Element;
   width: string;
   needLoader: boolean;
   onMobile: boolean;
   active?: boolean;
   reduce?: boolean;
   open?: boolean;
}

type ContextProps = {
   appsConfig: Array<Config>;
   config: (appName: string) => Config | null;
   close: (appName: string) => void;
   open: (appName: string) => void;
   reduce: (appName: string) => void;
   onFront: (appName: string) => void;
}

export const AppsContext = React.createContext<ContextProps>({
   appsConfig: [],
   close: () => {},
   open: () => {},
   config: () => null,
   reduce: () => {},
   onFront: () => {}
});

const AppsContextProvider: React.FC = (props) => {

   const [configs, setConfigs] = useState<Array<Config>>([]);

   const getAppIndex = useCallback((appName) => configs.findIndex((config: Config) => config.name === appName), [configs]);

   const getAppConfigByName = (appName: string):Config | null => {
      const appIndex = getAppIndex(appName);
      let appConfig = null;
      if (appIndex >= 0) {
         appConfig = configs[appIndex]
      }
      return appConfig;
   }

   const defineAppContent = (appName: string): Config | undefined => {
      let config;
      for (let app in AppType) {
         if (AppType[app].name === appName) {
            config = { name: appName, content: AppType[app].content, width: AppType[app].width, needLoader: AppType[app].needLoader, onMobile: AppType[app].onMobile };
            break;
         }
      }
      return config;
   }

   const openApp = useCallback((appName: string) => {
      //Check if app Exist in the state
      const appExist = configs.filter(config => config.name === appName);

      //Set other apps to inactive
      for (let app in configs) {
         if (configs[app].name !== appName) {
            configs[app].active = false;
         }
      }

      //If not, Mount the APP
      if (appExist.length <= 0) {
         const appConf = defineAppContent(appName);
         if (appConf !== undefined) {
            const newApp: Config = { ...appConf, open: true, active: true };
            setConfigs([...configs, newApp]);
         }
      }
      //Else, open it
      else {
         const appIndex = getAppIndex(appName);
         const newConfig = [...configs];
         //if open, reduce it
         if (newConfig[appIndex].active === true) {
            newConfig[appIndex].open = true;
            newConfig[appIndex].reduce = true;
            newConfig[appIndex].active = false;
         }
         else {
            newConfig[appIndex].open = true;
            newConfig[appIndex].active = true;
            newConfig[appIndex].reduce = false;
         }
         setConfigs(newConfig);
      }
   }, [configs, getAppIndex]);

   //Close app, but stay in the state
   const reduceApp = useCallback((appName) => {
      const appIndex = getAppIndex(appName);
      const newConfig = [...configs];
      newConfig[appIndex].open = true;
      newConfig[appIndex].reduce = true;
      newConfig[appIndex].active = false;
      setConfigs(newConfig);
   }, [configs, getAppIndex]);

   //Close app, but stay in the state
   const closeApp = useCallback((appName) => {
      const appIndex = getAppIndex(appName);
      const newConfig = [...configs];
      newConfig.splice(appIndex, 1);
      setConfigs(newConfig);
   }, [configs, getAppIndex]);


   const appOnFront = useCallback((appName) => {
      const appIndex = getAppIndex(appName);
      const newConfig = [...configs];

      if (newConfig[appIndex].active) return;

      for (let app in newConfig) {
         if (newConfig[app].name !== appName) {
            newConfig[app].active = false;
         }
      }
      newConfig[appIndex].active = true;
      setConfigs(newConfig);
   }, [configs, getAppIndex]);

   return (
      <AppsContext.Provider value={{ appsConfig: configs, open: openApp, close: closeApp, reduce: reduceApp, config: getAppConfigByName, onFront: appOnFront }}>
         {props.children}
      </AppsContext.Provider>
   )
}

export default AppsContextProvider;