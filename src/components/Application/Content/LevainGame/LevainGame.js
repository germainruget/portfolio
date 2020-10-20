import React from "react";
import Unity, { UnityContent } from 'react-unity-webgl';


const LevainGame = () => {

   const unitContent = new UnityContent(
      "WebGL/Build/WebGL.json",
      "WebGL/Build/UnityLoader.js",
   )

   return <Unity unityContent={unitContent} />;
};

export default LevainGame;