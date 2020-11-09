import React from 'react';
import TourComp from '../TourComp/TourComp';
import OpenApp from './Message/OpenApp/OpenApp';

export const DATA = [
   {
      "id": 0,
      "question": <>Parles moi de toi.</>,
      "responses": [
         <>Je m'appel Germain Ruget et je suis développeur web depuis 6 ans.</>,
         <>Passioné par le Web et le monde du numérique en général, j'adore coder !</>,
         <>J'ai commencer par travailler en Freelance, principalement sur la création de sites sur Worpress.</>,
         <OpenApp appName='Explorer'>Si tu veux voir quelqu'un de mes projets <span style={{textDecoration:'underline'}}>c'est par ici !</span></OpenApp>,
         <>Puis j'ai travaillé 3 ans dans une entreprise de logiciel RH dans le pole R&D. Ma mission principale était de  m'occuper des évolutions technique de l'application.</>,
         <OpenApp appName='PDFReader'>D'ailleurs tu peux aussi consulter mon CV <span style={{textDecoration:'underline'}}>en cliquant là !</span></OpenApp>
      ]
   },
   {
      "id": 1,
      "question": <>Ou suis-je ?</>,
      "responses": [
         <>Ce projet à vocation de partager mes créations et passes temps dans le monde du numérique.</>,
         <>Mon projet actuel est de me former à React, ceci est mon outil de formation, mon "terrain de jeux" sur cette techno.</>,
         <>Sous la forme d'un OS, je t'invite à parcourir et découvir mon environnement de développeur, mes créations et expériences...</>,
         <><TourComp type="link">Si tu veux un tour rapide d'ailleurs click ici !</TourComp></>
      ]
   },
   {
      "id": 2,
      "question": <>Comment puis je te contacter ?</>,
      "responses": [
         <>Par mail : <a style={{display:"inline-block"}} href='mailto:germainr.ruget@gmail.com'>germain.ruget@gmail.com</a></>,
         <>Mais aussi sur : <a style={{display:"inline-block"}} href='https://www.linkedin.com/in/germain-ruget' target='_blank'>Linkedin</a></>,
      ]
   }
]