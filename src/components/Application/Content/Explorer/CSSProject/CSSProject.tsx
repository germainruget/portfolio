import React, { useState, useRef } from 'react';
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
   const [currCode, setCurrCode] = useState<'css' | 'html' | 'preview'>('preview');

   const containerRef = useComponentResize();

   let scale = containerRef.boundingBox.height / 1150;

   const Prev = (
      <div ref={containerRef.setRef} className={classes.PreviewContainer}>
         <div
            style={{ transform: `scale(${scale})` }}
            className={classes.Preview}
            dangerouslySetInnerHTML={{ __html: preview }}
         ></div>
      </div>
   )
   return (
      <>
         <h2>{title}</h2>
         <ul className={classes.Header}>
            <li onClick={() => setCurrCode('preview')}>Preview</li>
            <li onClick={() => setCurrCode('css')}>CSS</li>
            <li onClick={() => setCurrCode('html')}>HTML</li>
         </ul>
         <div className={classes.ViewContainer}>
            {currCode === 'css' && <CodePreview language="scss" content={css} />}
            {currCode === 'html' && <CodePreview language="pug" content={html} />}
         </div>

         {currCode === 'preview' && Prev}

      </>
   );
}



export default CSSProject;