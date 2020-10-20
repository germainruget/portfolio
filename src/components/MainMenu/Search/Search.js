import React, { useState, useEffect, useRef } from 'react';

import AppType from '../../../config/AppType';

import classes from './Search.module.scss';

// import AppIcon from '../../UI/AppIcon/AppIcon';
// import { AppsContext } from '../../../context/apps-context';

const Search = props => {
   const {filter} = props;
   const [searchInput, setSearchInput] = useState('');
   const inputRef = useRef('');

   useEffect(() => {
      const timer = setTimeout(() => {
         if (searchInput === inputRef.current.value) {
   
            let filteredApps = {};
            for(let app in AppType){
               const name = AppType[app].name.toLowerCase();
               const search = searchInput.toLowerCase();
               if (name.startsWith(search)) {
                  filteredApps[app] = AppType[app];
               }
            }
            filter(filteredApps);
         }
      }, 500)

      return () => clearTimeout(timer);
   }, [filter, searchInput]);


   return <input ref={inputRef} className={classes.Search} type="text" value={searchInput} onChange={(event) => setSearchInput(event.target.value)} />;
}

export default Search;