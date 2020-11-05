export const html = `
.background
   .scene
      .stars
         - for (var x = 0; x < 4; x++)
            .star
         - for (var x = 0; x < 3; x++)
            .mini-planet
      .saturn-container
         .saturn
      .clouds
         - for (var x = 0; x < 4; x++)
            .cloud
      .planet
         .planet-layer-1
         .planet-layer-2
         .planet-layer-3
         .planet-shadow
      .mountains
         - for (var x = 1; x <= 3; x++)
            div(class='mountain-'+x)
         .mountain-3--far
      .space-ship-container
         .space-ship
            .space-ship-window
         .space-ship-wing.r
         .space-ship-wing.l
         .space-ship-reactor
         .beam-light
`;

export const css = `
/*-------------------------------------------*/
/*              Inspired by :                */
/* https://dribbble.com/shots/2636752-Rocket */
/*-------------------------------------------*/

// COLOR PALETTE
$dark-blue: #29284c;
$dark-red:#181644;
$light-blue:#78CCFF;
$light-grey:#ECF3FF;

//SIZES
$size: 400px;

html,
body {
  height: 100%;
  width: 100%;
  overflow: hidden;
  padding: 0;
  margin: 0;
}
html {
  box-sizing: border-box;
}
*,
*:before,
*:after {
   box-sizing: inherit;
}
* {
   position: absolute;
}
*:before,
*:after {
   content: "";
   position: absolute;
}

.background { 
   width:100%;
   height:100%;
   background:$dark-blue;
   display:flex;
   justify-content:center;
   align-items:center;
}

.scene {
   width:$size;
   height:700px;
   position:relative;
}

.clouds {
   width: $size;
   height:100px;
   bottom:($size / 2) + 10;
   z-index: 5;
   //background:red;
   //overflow:hidden;
   .cloud {
      border-radius:50%;
      background:linear-gradient(to top, #fff 70%, rgba(#fff, 0.5));
      
      animation: Cloud 10s infinite;
      animation-delay:-0.5s;
      //animation-play-state:paused;
      &:before, &:after{
         bottom:0;
         background:#fff;
         border-radius:50%;
         
      }
      &:before{
         width: 50%; height:50%;
         left:-35%;
      }
      &:after{
         width: 70%; height:70%;
         left:70%;
      }
      &:nth-child(1) {
         width: 50px; height:50px; bottom:0; left:20px; 
      }
      &:nth-child(2) {
         width: 80px; height:80px; bottom:0; left:100px;
         // transform:rotateY(180deg)
      }
      &:nth-child(3) {
         width: 60px; height:60px; bottom:0; right:25px;
         // transform:rotate3d(-0.1,1,0,180deg);
      }
      &:nth-child(4) {
         width: 70px; height:70px; bottom:0; right:120px;
         // transform:rotate3d(-0.1,1,0,180deg);
      }
   }
}

.planet {
   z-index: 999;
   background:$light-grey;
   height: $size / 1.8;
   width: $size;
   border-bottom-left-radius: $size;
   border-bottom-right-radius: $size;
   border-top-left-radius: 40px;
   border-top-right-radius: 40px;
   bottom:0;
   overflow:hidden;
   &-layer-1{
      background:#72CAFF;
      bottom:0;
      height:70%;
      width:100%;
      z-index: -1;
      &:before{
         animation: PlanetLayer 30s infinite linear;
         animation-delay:-3.75s;
         //animation-play-state:paused;
         width: 100px;
         height: 40px;
         background: #72CAFF;
         //left:-150px;
         top:-35px;
         border-top-left-radius:50px;
         border-top-right-radius:50px;
      }
      &:after{
         animation: PlanetLayer 30s infinite linear;
         animation-delay:-3.75s;
         //animation-play-state:paused;
         width: 40px;
         height: 40px;
         background: #59B7FC;
         margin-left:30px;
         top:-20px;
         //left:-150px;
         border-radius:50%;
      }
   }
   &-layer-2{
      bottom:0;
      height:70%;
      width:100%;
      z-index: -1;
      &:before{
         animation: PlanetLayer 30s infinite linear;
         animation-delay:-21.25s;
         //animation-play-state:paused;
         width: 80px;
         height: 40px;
         background: #72CAFF;
         //left:-150px;
         top:-35px;
         border-top-left-radius:50px;
         border-top-right-radius:50px;
      }
      &:after{
         animation: PlanetLayer 30s infinite linear;
         animation-delay:-21.25s;
         //animation-play-state:paused;
         width: 40px;
         height: 40px;
         background: #59B7FC;
         margin-left:20px;
         top:-20px;
         //left:-150px;
         border-radius:50%;
      }
   }
   &-layer-3{
      background:#59B7FC;
      bottom:0;
      height:50%;
      width:100%;
      z-index: -1;
      &:before{
         animation: PlanetLayer 30s infinite linear;
         //animation-play-state:paused;
         animation-delay:-10.5s;
         width: 100px;
         height: 40px;
         background: #72CAFF;
         //left:-150px;
         top:-5px;
         border-bottom-left-radius:50px;
         border-bottom-right-radius:50px;
      }
      &:after{
         animation: PlanetLayer 30s infinite linear;
         //animation-play-state:paused;
         animation-delay:-10.5s;
         width: 60px;
         height: 40px;
         background: #59B7FC;
         margin-left:20px;
         //left:-150px;
         top:-25px;
         border-top-left-radius:25%;
         border-top-right-radius:25%;
         border-bottom-left-radius:50%;
         border-bottom-right-radius:50%;
      }
   }

   &-shadow{
      width: 100%;
      height:100%;
      box-shadow: inset -40px -10px 0 rgba(0,0,0,0.2);
      border-bottom-left-radius: $size;
      border-bottom-right-radius: $size;
      border-top-left-radius: 40px;
      border-top-right-radius: 40px;
   }
}

.mountains {
   width:360px;
   height:150px;
   right:20px;
   bottom:$size / 1.8;
   .mountain-1{
      width: 130px;
      height:100%;
      background:darken($light-blue, 40%);
      border-top-left-radius: 45%;
      border-top-right-radius: 45%; 
      box-shadow: 15px 0px 0px 0px rgba($dark-blue,0.2);
      left:210px;
      z-index: 4;     
   }
   .mountain-2{
      width: 110px;
      height:80%;
      background:darken($light-blue, 25%);
      border-top-left-radius: 45%;
      border-top-right-radius: 45%;
      right:80px;
      bottom:0;
      box-shadow: 15px 0px 0px 0px rgba($dark-blue,0.2);
      z-index: 5;
   }
   .mountain-3{
      width: 100px;
      height:100px;
      //right:30px;
      background:$light-grey;
      border-top-left-radius: 50%;
      border-top-right-radius: 50%;
      box-shadow: 15px 0px 0px 0px rgba($dark-blue,0.2);
      bottom:-50px;
      z-index: 6;
      animation: Mountain-1 30s linear infinite;
      animation-delay: -11.25s;
      //animation-play-state:paused;
      box-sizing:content-box;
   }
   .mountain-3--far{
      width: 90px;
      height:90px;
      //right:30px;
      background:#ccc;
      border-top-left-radius: 50%;
      border-top-right-radius: 50%;
      bottom:-40px;
      z-index: 1;
      animation: Mountain-1--far 30s linear infinite;
      animation-delay: -11.25s;
      //animation-play-state:paused;
      box-sizing:content-box;
   }
}

.space-ship-container{
   bottom: $size;
   left:50px;
   width:120px;
   height:100px;
   display:flex;
   justify-content:center;
   animation: SpaceShip 10s infinite;
   animation-delay:-0.5s;
   z-index: 4;
   //animation-play-state:paused;
   .space-ship {
      z-index: 50;
      width:75%;
      height:100%;
      background:#74BAFB;
      clip-path: polygon( 10% 60%, 15% 45%, 20% 30%, 25% 20%, 30% 15%, 40% 5%, 45% 2%, 50% 0%, 55% 2%, 60% 5%, 70% 15%, 75% 20%, 80% 30%, 85% 45%, 90% 60%, 100% 100%, 0% 100% );
      border-radius:25px;
      overflow:hidden;
      display:flex;
      justify-content:center;
      box-shadow: inset 0px -10px 0px 0px rgba(0,0,0,0.5);
      &:before{
   
         content: "";
         position:absolute;
         width: 100%;
         height:120%;
         background:rgba(#A9D3FD, .5);
         top:-5px;
         left:-12px;
         transform:rotate(5deg);
         clip-path: polygon( 10% 60%, 15% 45%, 20% 30%, 25% 20%, 30% 15%, 40% 5%, 45% 2%, 50% 0%, 55% 2%, 60% 5%, 70% 15%, 75% 20%, 80% 30%, 85% 45%, 90% 60%, 100% 100%, 0% 100% );
      }
      &:after{
   
         content: "";
         position:absolute;
         width: 50%;
         height:100%;
         background:rgba($light-grey, .4);
         left:0;
      }
      .space-ship-window{
         top:30px;
         width:30px;
         height:30px;
         border: solid 3px #73B9FB;
         background:#214A8B;
         border-radius:50%;
         z-index: 999;
      }
   }
   
   .space-ship-wing{
      width: 35px;
      height: 35px;
      background:#2877CC;
      bottom:0;
      &.r{
         right:0;
         transform:rotate(15deg);
         border-top-right-radius:100%;
         border-bottom-right-radius:10%;
         border-bottom-left-radius:25%;
         box-shadow: inset -12px -4px 0px 0px #2D96F8;
         animation: SpaceShipWingsR 10s infinite;
         animation-delay:-0.5s;
         //animation-play-state:paused;
      }
      &.l{
         left:0;
         transform:rotate(-15deg);
         border-top-left-radius:100%;
         border-bottom-left-radius:10%;
         border-bottom-right-radius:25%;
         box-shadow: inset 12px -4px 0px 0px #2D96F8;
         animation: SpaceShipWingsL 10s infinite;
         animation-delay:-0.5s;
         //animation-play-state:paused;
      }
   }
   .space-ship-reactor{
      width: 30px;
      height:20px;
      box-shadow: inset 0px -4px 0px 0px #2D96F7;
      border-bottom-right-radius:45%;
      border-bottom-left-radius:45%;
      background:#2877CC;
      bottom:-10px;
      z-index: 1;
   }
   .beam-light{
      top:50px;
      width: 20px;
      height:280px;
      background:linear-gradient(rgba(255,255,255,1), rgba(255,255,255,0.5) 60%);
      box-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 50px #fff, 0 0 80px #fff, 0 0 100px #75e2fa, 0 0 150px #fff;
      border-bottom-left-radius:50%;
      border-bottom-right-radius:50%;
      animation: Beam 10s infinite;
      animation-delay:-0.5s;
      //animation-play-state:paused;
   }
}

.saturn-container{
   position:relative;
   z-index: 1;
   .saturn {
      width: 120px;
      height:120px;
      background:linear-gradient(to right, #D81B27, $dark-blue 80%);
      border-radius:50%;
      top:0;
      right:0;
      box-shadow: 10px 0px 0px 0px rgba($dark-blue, 0.5);
      &:before, &:after{
         content:"";
         position:absolute;
         width:200px;
         height:40px;
         top:45px;
         left:50%;
         margin-left:-100px;
         border-width:12px;
         border-style:solid;
         border-color: darken($light-blue, 35%);
         border-top: solid transparent;
         border-radius: 100%;
         transform:rotate(-15deg);
         box-shadow: 0px 15px 15px 0px rgba($dark-blue, 0.5);
      }
      &:after{
         border-top: solid darken($light-blue, 35%);
         z-index: -1;
      }
   }
}

.stars{
   width: 100%;
   height:200px;
   .star {
      position:absolute;
      &:after, &:before{
         content:"";
         top:-100%;
         margin-top:50%;
         width: 50%;
         height: 200%;
         background:#2E96F7;
         border-radius:45%;
         box-shadow: 0 0 5px #2E96F7;
      }
      &:before{
         transform:rotate(90deg);
      }
      &:nth-child(1){
         top: 10px; left: 10px; width: 10px; height: 10px;
         &:after, &:before{
            background:#fff;
            box-shadow: 0 0 5px #fff;
         }
      }      
      &:nth-child(2){
         top: 120px; left: -50px; width: 8px; height: 8px;
      }      
      &:nth-child(3){
         top: 80px; left: 150px; width: 10px; height: 10px;
      }
      &:nth-child(4){
         top: 30px; right: -100px; width:6px; height: 5px;
      }
   }
   .mini-planet{
      background:$light-blue;
      border-radius:50%;
      &:nth-child(5){
         background:#306CF2;
         top: 50px; left: -100px; width: 10px; height: 10px;
      }
      &:nth-child(6){
         background:#2D96F8;
         top: -40px; right: -40px; width: 30px; height: 30px;
      }
      &:nth-child(7){
         background:#fff;
         top: 80px; right: -80px; width: 15px; height: 15px;
      } 
   }
}


@keyframes Cloud {
   0% {
      transform:scale(.5, 0.5);
      background-position: 100% 50%;
      opacity:0;
      bottom:-50px;
   }
   10% {
      transform:scale(1);
      background-position: 100% 0%;
      opacity:1;
      bottom:0;
   }
   70% {
      transform:scale(1.2, 0.2);
      background-position: 100% 50%;
      opacity:0;
      bottom:-25px;
   }
   100% {
      transform:scale(1.2, 0.2);
      background-position: 100% 50%;
      opacity:0;
      bottom:-30px;
   }
}

@keyframes SpaceShip {
   0% {
      bottom: $size / 1.70;
   }
   20% {
      bottom: $size * 1.5;
   }
   50% {
      bottom: $size * 5;
   }
   70% {
      bottom: $size * 1.5;
   }
   100% {
      bottom: $size / 1.70;
   }
}

@keyframes Beam {
   0% {
      height: 180px;
   }
   20% {
      height: 400px;
      opacity:1;
   }
   35% {
      opacity:0;
   }
   50% {
      height:  $size * 5;
   }
   55% {
      height: 80px;
      opacity:0;
      box-shadow: none;
   }
   70% {
      height: 80px;
      opacity:1;
      background:rgba(255,255,255,1);
   }
   100% {
      height: 80px;
      background:rgba(255,255,255,1);
      box-shadow: 0 0 5px #fff, 0 0 30px #fff, 0 0 80px #fff, 0 0 120px #fff, 0 0 150px #75e2fa, 0 0 200px #fff;
   }
}

@keyframes SpaceShipWingsL {
   0% {
      transform:rotate(0)
   }
   20% {
      transform:rotate(-25deg)
   }
   80% {
      transform:rotate(-25deg)
   }
   100% {
      transform:rotate(0)
   }
}

@keyframes SpaceShipWingsR {
   0% {
      transform:rotate(0)
   }
   20% {
      transform:rotate(25deg)
   }
   80% {
      transform:rotate(25deg)
   }
   100% {
      transform:rotate(0)
   }
}

@keyframes PlanetLayer {
   0% {
      left:-150px;
   }
   50% {
      left:400px
   }
   100% {
      left:400px
   }
}

@keyframes Mountain-1 {
   0% {
      left:-50px;
      transform:scaleX(0);
   }
   10% {
      transform:scaleX(1);
   }
   40% {
      transform:scaleX(1);
   }
   50% {
      left:310px;
      transform:scaleX(0);
   }
   100% {
      transform:scaleX(0);
      left:310px
   }
   
}

@keyframes Mountain-1--far {
   0% {
      left:315px;
      transform:scaleX(0);
   }
   50% {
      left:315px;
      transform:scaleX(0);
   }
   60% {
      transform:scaleX(1);
   }
   90% {
      transform:scaleX(1);
   }
   100% {
      left:-50px;
      transform:scaleX(0);
   }
}
`;