import React, { useState } from 'react';

import classes from './TourComp.module.scss';

import Tour from 'reactour';
import Icon from '@icon-park/react/es/all';

const steps = [
   {
      selector: '[data-tour="menu"]',
      content: "Ici, c'est le menu principal...",
      stepInteraction: false,
      action: (node: any) => { node.click() }
   },
   {
      selector: '[data-tour="main-menu"]',
      content: "Tu retrouveras toutes mes applications, projets...",
   },
   {
      selector: '[data-tour="icons-apps"]',
      content: 'Toutes les applications ouvertes, ou importantes sont toujours disponible ici, même une fois minimisée',
      action: () => {
         let elem = document.querySelector('[data-tour="menu"]') as HTMLElement;
         elem.click()
      }
   },
   {
      selector: '[data-tour="settings"]',
      content: 'Ici, tu retrouveras quelques paramètres pour personnaliser le bureau',
   },
   {
      selector: '[data-tour="chat"]',
      content: "Pour continuer ou masquer la conversation, c'est là !",
   },
   {
      selector: '[data-tour="help"]',
      content: "Et pour refaire un tour à tout moment c'est ici",
   },
   {
      content: "Merci et bonne visite !",
   }
];

interface Props {
   type: 'icon' | 'link';
}

const TourComp: React.FC<Props> = ({ type = "icon", children }) => {

   const [isTourOpen, setIsTourOpen] = useState(false);

   let action = <Icon data-tour="help" type='Help' theme="outline" size="20" style={{ marginTop: '5px', cursor:'pointer' }} onClick={() => setIsTourOpen(true)} />
   if (type === "link") action = <span className={classes.OpenApp} onClick={() => setIsTourOpen(true)}>{children}</span>
   return (
      <>
         {action}
         <Tour
            steps={steps}
            isOpen={isTourOpen}
            onRequestClose={() => setIsTourOpen(false)}
         />
      </>
   );
}

export default TourComp;