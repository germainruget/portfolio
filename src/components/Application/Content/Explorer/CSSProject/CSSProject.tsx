import React from 'react';
import { useRouteMatch, NavLink, Switch, Route, Redirect } from 'react-router-dom';
import useComponentResize from '../../../../../hooks/useComponentSize';

import CodePreview from './CodePreview/CodePreview';
import classes from './CSSProject.module.scss';

export interface Props {
   html: string;
   css: string;
   preview: string;
   title: string;
}

const CSSProject: React.FC<Props> = ({ title, html, css, preview }) => {

   let { path, url } = useRouteMatch();
   const containerRef = useComponentResize();

   let scale = containerRef.boundingBox.height / 1150;

   return (
      <>
         <h2>{title}</h2>
         <ul className={classes.Header}>
            <li><NavLink activeClassName={classes.Active} to={`${url}/preview`}>Preview</NavLink></li>
            <li><NavLink activeClassName={classes.Active} to={`${url}/css`}>CSS</NavLink></li>
            <li><NavLink activeClassName={classes.Active} to={`${url}/html`}>HTML</NavLink></li>
         </ul>
         <div style={{ padding: '10px', background: 'rgb(44, 44, 44)', overflow: 'auto' }}>
            <Switch>

               <Route path={`${path}/preview`}>
                  <div ref={containerRef.setRef} className={classes.PreviewContainer}>
                     <div
                        style={{ transform: `scale(${scale})` }}
                        className={classes.Preview}
                        dangerouslySetInnerHTML={{ __html: preview }}
                     ></div>
                  </div>
               </Route>
               <Route path={`${path}/css`} >
                  <div className={classes.ViewContainer}>
                     <CodePreview language="scss" content={css} />
                  </div>
               </Route>
               <Route path={`${path}/html`} >
                  <div className={classes.ViewContainer}>
                     <CodePreview language="pug" content={html} />
                  </div>
               </Route>
               <Redirect exact from={path} to={`${path}/preview`} />
            </Switch>
         </div>

      </>
   );
}



export default CSSProject;