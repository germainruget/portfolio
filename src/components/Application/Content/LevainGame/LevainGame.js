import React from "react";
import Unity, { UnityContent } from 'react-unity-webgl';

const LevainGame = (props) => {
   
   const unitContent = new UnityContent(
      "WebGL/Build/WebGL.json",
      "WebGL/Build/UnityLoader.js",
   );
   console.log(props);
   unitContent.on("loaded", () => {
      props.loadApp(false);
   });

   return (
      <Unity unityContent={unitContent} />
   )
};

export default LevainGame;