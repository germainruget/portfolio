import React, {useState, Fragment} from 'react';

import LogoAnimationLoader from '../components/UI/LogoAnimationLoader/LogoAnimationLoader';

const IsLoadingHOC = (WrappedComponent, loadingMessage) => {
   function HOC(props) {
      const [isLoading, setLoading] = useState(true);

      const setLoadingState = isComponentLoading => {
         setLoading(isComponentLoading);
      }

      return (
         <Fragment>
            {isLoading && <LogoAnimationLoader message={loadingMessage} />}
            <WrappedComponent {...props} setLoading={setLoadingState} />
         </Fragment>
      )
   }

   return HOC;
}

export default IsLoadingHOC;