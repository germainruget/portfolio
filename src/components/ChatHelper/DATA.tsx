import React from 'react';
import TourComp from '../TourComp/TourComp';
import OpenApp from './Message/OpenApp/OpenApp';

export const DATA = [
   {
      "id": 0,
      "question": <>Parles moi un peu plus de ce projet !</>,
      "responses": [
         <>Je me forme actuellement à React et ceci est mon outil de formation, mon "terrain de jeu" sur cette technologie.</>,
         <>Plus précisément, ce projet vise à partager mes réalisations professionnelles et mes créations personnelles.</>,
         <>Pour découvrir tout ça, je t'invite à suivre ce <TourComp type="link">pas-à-pas.</TourComp></>
      ]
   },
   {
      "id": 1,
      "question": <>Parles moi de toi.</>,
      "responses": [
         <>Je suis Germain Ruget, développeur web depuis 6 ans. Passioné par le Web et les nouvelles technologies, j'adore coder !</>,
         <>J'ai débuté en Freelance, principalement sur la création de sites sur Worpress. <OpenApp appName='Explorer'>Voici quelques-uns de <span style={{textDecoration:'underline'}}>mes projets.</span></OpenApp></>,
         <>J'ai par la suite intégré le pôle R&D d'une entreprise de logiciel RH. Et durant 3 ans, je me suis occupé des évolutions technique de l'application.</>,
         <OpenApp appName='PDFReader'>Pour plus de détail, consultes <span style={{textDecoration:'underline'}}>mon CV</span></OpenApp>
      ]
   },
   {
      "id": 2,
      "question": <>Comment puis je te contacter ?</>,
      "responses": [
         <>Par mail : <a style={{textDecoration:'underline', display:"inline-block"}} href='mailto:germainr.ruget@gmail.com'>germain.ruget@gmail.com</a></>,
         <>Mais aussi sur : <a rel="noopener noreferrer" style={{textDecoration:'underline', display:"inline-block"}} href='https://www.linkedin.com/in/germain-ruget' target='_blank'>Linkedin</a></>,
      ]
   }
]