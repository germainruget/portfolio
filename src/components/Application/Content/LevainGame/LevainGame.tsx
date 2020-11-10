import React, { useState } from "react";
import Unity, { UnityContent } from 'react-unity-webgl';

import Levain from '../../../../assets/images/levain.jpg';

import LogoAnimationLoader from "../../../UI/LogoAnimationLoader/LogoAnimationLoader";

import classes from './LevainGame.module.scss';

const LevainGame: React.FC = () => {

   const [openApp, setOpenApp] = useState(false);
   const [loadedApp, setLoadedApp] = useState(false);

   const unitContent = new UnityContent(
      "WebGL/Build/WebGL.json",
      "WebGL/Build/UnityLoader.js",
   );

   unitContent.on("loaded", () => {
      //APP LOADED
      setLoadedApp(true);
   });

   const Launcher = (
      <div className={classes.Launcher}>
         <div className={classes.Infos}>
            <h2>Levain</h2>
            <div style={{ display: 'flex' }}>
               <div style={{ flex: '0 0 200px' }}>
                  <strong>Détails</strong>
                  <ul>
                     <li>Engine : Unity</li>
                     <li>Code : C#</li>
                     <li>Modèle : Blender</li>
                     <li>UI : Illustrator</li>
                  </ul>
               </div>
               <div>
                  <strong>Description</strong>
                  <p>Jeux crée en 72h en solo dans le cadre de la compétion <a style={{ display: 'inline-block', color:'#979797' }} rel="noopener noreferrer" target="_blank" href="https://ldjam.com/events/ludum-dare/46/levain-my-needy-friend">Ludum Dare 46</a> sur le thème suivant : "Keep it alive"</p>
                  <i>Le jeux nécessite WebGl pour être lancé</i>
               </div>
            </div>
            <div style={{ width: '100%', textAlign: 'center' }}>
               <button className={classes.ButtonLaunch} onClick={() => setOpenApp(true)}>Launch</button>
            </div>
         </div>
         <div className={classes.Preview}>
            <img alt="game preview" width={300} src={Levain} />
         </div>
      </div>
   )

   return (
      <>
         {!openApp && Launcher}
         { openApp && !loadedApp && <LogoAnimationLoader message="Loading..." />}
         { openApp && <Unity unityContent={unitContent} />}
      </>
   )
}

export default LevainGame;
