import React, { useEffect} from 'react';

import IsLoadingHOC from './hoc/IsLoadingHOC';
import Desktop from './components/Desktop/Desktop';



const App = props => {
  const {setLoading} = props;

  useEffect(() => {
    setLoading(false);
  }, [setLoading]);

  console.log('RENDER APP');
  return  <Desktop/>;  
}

export default IsLoadingHOC(App, "Os is loading");
