import React from 'react';
import classes from './ProjectDisplay.module.scss';

import Masonry from 'react-masonry-css'


export interface Props {
   title: string;
   content: JSX.Element;
   screenshots: Array<string>;
}

const ProjectDisplay: React.FC<Props> = ({ title, content, screenshots }) => {

   const breakpointColumnsObj = {
      default: 3,
      1000: 2,
      500: 1
   };

   const images = screenshots.map((image, index) => {
      return <img className={classes.Images} src={image} alt='' key={index}/>;
   });

   return (
      <div>
         <h2>{title}</h2>
         <div>{content}</div>
         <Masonry
            breakpointCols={breakpointColumnsObj}
            className={classes.MasonryGrid}
            columnClassName={classes.MasonryGridColumn} >
            {images}
         </Masonry>
      </div>
   );
}

export default ProjectDisplay;