import * as React from 'react';

import { Redirect, Route, Switch } from 'react-router-dom';

import classes from './FolderContent.module.scss';

import { DATA as WebData } from '../WebProject/DATA';
import { DATA as CSSData } from '../CSSProject/DATA/DATA';

import Backdrop from '../../../../UI/Backdrop/Backrop';
import WebProject from '../WebProject/WebProject';
import CSSProject from '../CSSProject/CSSProject';

export interface Props {
   active: boolean;
   toggleStructure: () => void;
   width:number;
}

const FolderContent: React.FC<Props> = ({ toggleStructure, active, width }) => {

   const webContent = Object.keys(WebData).map(key => {
      return (
         <Route path={WebData[key].path} key={WebData[key].title}>
            <WebProject title={WebData[key].title} content={WebData[key].content} screenshots={WebData[key].screenshots} />
         </Route>
      )
   });

   const cssContent = Object.keys(CSSData).map(key => {
      return (
         <Route path={CSSData[key].path} key={CSSData[key].title}>
            <CSSProject title={CSSData[key].title} html={CSSData[key].html} css={CSSData[key].css} preview={CSSData[key].preview} />
         </Route>
      )
   });


   return (
      <>
         <div className={classes.FolderContent}>
            {active && width < 1150 && <Backdrop active action={toggleStructure} />}
            <Switch>
               {webContent}
               {cssContent}
               <Redirect exact from='/' to='/ancor' />
            </Switch>
         </div>
      </>
   );
}

export default FolderContent;