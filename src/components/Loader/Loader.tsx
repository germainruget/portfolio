import { motion } from 'framer-motion';
import React from 'react'

import classes from './Loader.module.scss';

interface Props {
   onAnimationComplete: () => void;
}

const Loader: React.FC<Props> = ({ onAnimationComplete }) => {

   const icon = {
      hidden: {
         pathLength: 0,
         fill: "rgba(255, 255, 255, 0)"
      },
      visible: {
         pathLength: 1,
         fill: "rgba(255, 255, 255, 1)"
      }
   };

   return (
      <div
         className={classes.Container}>
         <div className={classes.Logo}>
            <motion.svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 420">
               <circle cx="210" cy="210" r="205" className={classes.PathClass} />
               <motion.path
                  variants={icon}
                  initial="hidden"
                  animate="visible"
                  onAnimationComplete={onAnimationComplete}
                  transition={{
                     default: { duration: 2, ease: "easeInOut" },
                     fill: { duration: 2, ease: [1, 0, 0.8, 1] }
                  }}
                  d="M1028.2,332.83l42-.12V394.4c-59.83,58.78-151.62,11.11-154.11-66.2-4.22-86.76,93.05-135.69,154.87-77.07"
                  transform="translate(-850.08 -162)"
                  className={classes.PathClass} />
               <motion.path
                  variants={icon}
                  initial="hidden"
                  animate="visible"
                  transition={{
                     default: { duration: 2, ease: "easeInOut" },
                     fill: { duration: 2, ease: [1, 0, 0.8, 1] }
                  }}
                  d="M1124.06,455.1l40.75,67.59m-94.62,0v-190h46.37a57,57,0,0,1,34.38,18.14q16.88,18.27,16.87,43.8,0,25.8-16.87,43.94c-7.84,8.42-26.88,16.53-26.88,16.53l-53.37.09"
                  transform="translate(-850.08 -162)"
                  className={classes.PathClass} />
            </motion.svg>
            <span className={classes.OS}>OS</span>
         </div>
      </div>
   );
}

export default Loader;