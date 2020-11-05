export const preview = `
<style>
/*-------------------------------------------*/
/*              Inspired by :                */
/* https://dribbble.com/shots/2636752-Rocket */
/*-------------------------------------------*/
.container {
  width:  1150px;
  height: 1150px;
  overflow: hidden;
  padding: 0;
  margin: 0;
}

.container {
  box-sizing: border-box;
}

.container *,
.container *:before,
.container *:after {
  box-sizing: inherit;
}

.container * {
  position: absolute;
}

.container *:before,
.container *:after {
  content: "";
  position: absolute;
}

.background {
  width: 1150px;
  height: 1150px;
  background: #29284c;
  display: flex;
  justify-content: center;
  align-items: center;
}

.scene {
  width: 400px;
  height: 700px;
  position: relative;
}

.clouds {
  width: 400px;
  height: 100px;
  bottom: 210px;
  z-index: 5;
}
.clouds .cloud {
  border-radius: 50%;
  background: linear-gradient(to top, #fff 70%, rgba(255, 255, 255, 0.5));
  animation: Cloud 10s infinite;
  animation-delay: -0.5s;
}
.clouds .cloud:before, .clouds .cloud:after {
  bottom: 0;
  background: #fff;
  border-radius: 50%;
}
.clouds .cloud:before {
  width: 50%;
  height: 50%;
  left: -35%;
}
.clouds .cloud:after {
  width: 70%;
  height: 70%;
  left: 70%;
}
.clouds .cloud:nth-child(1) {
  width: 50px;
  height: 50px;
  bottom: 0;
  left: 20px;
}
.clouds .cloud:nth-child(2) {
  width: 80px;
  height: 80px;
  bottom: 0;
  left: 100px;
}
.clouds .cloud:nth-child(3) {
  width: 60px;
  height: 60px;
  bottom: 0;
  right: 25px;
}
.clouds .cloud:nth-child(4) {
  width: 70px;
  height: 70px;
  bottom: 0;
  right: 120px;
}

.planet {
  z-index: 999;
  background: #ECF3FF;
  height: 222.2222222222px;
  width: 400px;
  border-bottom-left-radius: 400px;
  border-bottom-right-radius: 400px;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  bottom: 0;
  overflow: hidden;
}
.planet-layer-1 {
  background: #72CAFF;
  bottom: 0;
  height: 70%;
  width: 100%;
  z-index: -1;
}
.planet-layer-1:before {
  animation: PlanetLayer 30s infinite linear;
  animation-delay: -3.75s;
  width: 100px;
  height: 40px;
  background: #72CAFF;
  top: -35px;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
}
.planet-layer-1:after {
  animation: PlanetLayer 30s infinite linear;
  animation-delay: -3.75s;
  width: 40px;
  height: 40px;
  background: #59B7FC;
  margin-left: 30px;
  top: -20px;
  border-radius: 50%;
}
.planet-layer-2 {
  bottom: 0;
  height: 70%;
  width: 100%;
  z-index: -1;
}
.planet-layer-2:before {
  animation: PlanetLayer 30s infinite linear;
  animation-delay: -21.25s;
  width: 80px;
  height: 40px;
  background: #72CAFF;
  top: -35px;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
}
.planet-layer-2:after {
  animation: PlanetLayer 30s infinite linear;
  animation-delay: -21.25s;
  width: 40px;
  height: 40px;
  background: #59B7FC;
  margin-left: 20px;
  top: -20px;
  border-radius: 50%;
}
.planet-layer-3 {
  background: #59B7FC;
  bottom: 0;
  height: 50%;
  width: 100%;
  z-index: -1;
}
.planet-layer-3:before {
  animation: PlanetLayer 30s infinite linear;
  animation-delay: -10.5s;
  width: 100px;
  height: 40px;
  background: #72CAFF;
  top: -5px;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
}
.planet-layer-3:after {
  animation: PlanetLayer 30s infinite linear;
  animation-delay: -10.5s;
  width: 60px;
  height: 40px;
  background: #59B7FC;
  margin-left: 20px;
  top: -25px;
  border-top-left-radius: 25%;
  border-top-right-radius: 25%;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
}
.planet-shadow {
  width: 100%;
  height: 100%;
  box-shadow: inset -40px -10px 0 rgba(0, 0, 0, 0.2);
  border-bottom-left-radius: 400px;
  border-bottom-right-radius: 400px;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
}

.mountains {
  width: 360px;
  height: 150px;
  right: 20px;
  bottom: 222.2222222222px;
}
.mountains .mountain-1 {
  width: 130px;
  height: 100%;
  background: #006aab;
  border-top-left-radius: 45%;
  border-top-right-radius: 45%;
  box-shadow: 15px 0px 0px 0px rgba(41, 40, 76, 0.2);
  left: 210px;
  z-index: 4;
}
.mountains .mountain-2 {
  width: 110px;
  height: 80%;
  background: #009af8;
  border-top-left-radius: 45%;
  border-top-right-radius: 45%;
  right: 80px;
  bottom: 0;
  box-shadow: 15px 0px 0px 0px rgba(41, 40, 76, 0.2);
  z-index: 5;
}
.mountains .mountain-3 {
  width: 100px;
  height: 100px;
  background: #ECF3FF;
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  box-shadow: 15px 0px 0px 0px rgba(41, 40, 76, 0.2);
  bottom: -50px;
  z-index: 6;
  animation: Mountain-1 30s linear infinite;
  animation-delay: -11.25s;
  box-sizing: content-box;
}
.mountains .mountain-3--far {
  width: 90px;
  height: 90px;
  background: #ccc;
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  bottom: -40px;
  z-index: 1;
  animation: Mountain-1--far 30s linear infinite;
  animation-delay: -11.25s;
  box-sizing: content-box;
}

.space-ship-container {
  bottom: 400px;
  left: 50px;
  width: 120px;
  height: 100px;
  display: flex;
  justify-content: center;
  animation: SpaceShip 10s infinite;
  animation-delay: -0.5s;
  z-index: 4;
}
.space-ship-container .space-ship {
  z-index: 50;
  width: 75%;
  height: 100%;
  background: #74BAFB;
  clip-path: polygon(10% 60%, 15% 45%, 20% 30%, 25% 20%, 30% 15%, 40% 5%, 45% 2%, 50% 0%, 55% 2%, 60% 5%, 70% 15%, 75% 20%, 80% 30%, 85% 45%, 90% 60%, 100% 100%, 0% 100%);
  border-radius: 25px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  box-shadow: inset 0px -10px 0px 0px rgba(0, 0, 0, 0.5);
}
.space-ship-container .space-ship:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 120%;
  background: rgba(169, 211, 253, 0.5);
  top: -5px;
  left: -12px;
  transform: rotate(5deg);
  clip-path: polygon(10% 60%, 15% 45%, 20% 30%, 25% 20%, 30% 15%, 40% 5%, 45% 2%, 50% 0%, 55% 2%, 60% 5%, 70% 15%, 75% 20%, 80% 30%, 85% 45%, 90% 60%, 100% 100%, 0% 100%);
}
.space-ship-container .space-ship:after {
  content: "";
  position: absolute;
  width: 50%;
  height: 100%;
  background: rgba(236, 243, 255, 0.4);
  left: 0;
}
.space-ship-container .space-ship .space-ship-window {
  top: 30px;
  width: 30px;
  height: 30px;
  border: solid 3px #73B9FB;
  background: #214A8B;
  border-radius: 50%;
  z-index: 999;
}
.space-ship-container .space-ship-wing {
  width: 35px;
  height: 35px;
  background: #2877CC;
  bottom: 0;
}
.space-ship-container .space-ship-wing.r {
  right: 0;
  transform: rotate(15deg);
  border-top-right-radius: 100%;
  border-bottom-right-radius: 10%;
  border-bottom-left-radius: 25%;
  box-shadow: inset -12px -4px 0px 0px #2D96F8;
  animation: SpaceShipWingsR 10s infinite;
  animation-delay: -0.5s;
}
.space-ship-container .space-ship-wing.l {
  left: 0;
  transform: rotate(-15deg);
  border-top-left-radius: 100%;
  border-bottom-left-radius: 10%;
  border-bottom-right-radius: 25%;
  box-shadow: inset 12px -4px 0px 0px #2D96F8;
  animation: SpaceShipWingsL 10s infinite;
  animation-delay: -0.5s;
}
.space-ship-container .space-ship-reactor {
  width: 30px;
  height: 20px;
  box-shadow: inset 0px -4px 0px 0px #2D96F7;
  border-bottom-right-radius: 45%;
  border-bottom-left-radius: 45%;
  background: #2877CC;
  bottom: -10px;
  z-index: 1;
}
.space-ship-container .beam-light {
  top: 50px;
  width: 20px;
  height: 280px;
  background: linear-gradient(white, rgba(255, 255, 255, 0.5) 60%);
  box-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 50px #fff, 0 0 80px #fff, 0 0 100px #75e2fa, 0 0 150px #fff;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  animation: Beam 10s infinite;
  animation-delay: -0.5s;
}

.saturn-container {
  position: relative;
  z-index: 1;
}
.saturn-container .saturn {
  width: 120px;
  height: 120px;
  background: linear-gradient(to right, #D81B27, #29284c 80%);
  border-radius: 50%;
  top: 0;
  right: 0;
  box-shadow: 10px 0px 0px 0px rgba(41, 40, 76, 0.5);
}
.saturn-container .saturn:before, .saturn-container .saturn:after {
  content: "";
  position: absolute;
  width: 200px;
  height: 40px;
  top: 45px;
  left: 50%;
  margin-left: -100px;
  border-width: 12px;
  border-style: solid;
  border-color: #007ac5;
  border-top: solid transparent;
  border-radius: 100%;
  transform: rotate(-15deg);
  box-shadow: 0px 15px 15px 0px rgba(41, 40, 76, 0.5);
}
.saturn-container .saturn:after {
  border-top: solid #007ac5;
  z-index: -1;
}

.stars {
  width: 100%;
  height: 200px;
}
.stars .star {
  position: absolute;
}
.stars .star:after, .stars .star:before {
  content: "";
  top: -100%;
  margin-top: 50%;
  width: 50%;
  height: 200%;
  background: #2E96F7;
  border-radius: 45%;
  box-shadow: 0 0 5px #2E96F7;
}
.stars .star:before {
  transform: rotate(90deg);
}
.stars .star:nth-child(1) {
  top: 10px;
  left: 10px;
  width: 10px;
  height: 10px;
}
.stars .star:nth-child(1):after, .stars .star:nth-child(1):before {
  background: #fff;
  box-shadow: 0 0 5px #fff;
}
.stars .star:nth-child(2) {
  top: 120px;
  left: -50px;
  width: 8px;
  height: 8px;
}
.stars .star:nth-child(3) {
  top: 80px;
  left: 150px;
  width: 10px;
  height: 10px;
}
.stars .star:nth-child(4) {
  top: 30px;
  right: -100px;
  width: 6px;
  height: 5px;
}
.stars .mini-planet {
  background: #78CCFF;
  border-radius: 50%;
}
.stars .mini-planet:nth-child(5) {
  background: #306CF2;
  top: 50px;
  left: -100px;
  width: 10px;
  height: 10px;
}
.stars .mini-planet:nth-child(6) {
  background: #2D96F8;
  top: -40px;
  right: -40px;
  width: 30px;
  height: 30px;
}
.stars .mini-planet:nth-child(7) {
  background: #fff;
  top: 80px;
  right: -80px;
  width: 15px;
  height: 15px;
}

@keyframes Cloud {
  0% {
    transform: scale(0.5, 0.5);
    background-position: 100% 50%;
    opacity: 0;
    bottom: -50px;
  }
  10% {
    transform: scale(1);
    background-position: 100% 0%;
    opacity: 1;
    bottom: 0;
  }
  70% {
    transform: scale(1.2, 0.2);
    background-position: 100% 50%;
    opacity: 0;
    bottom: -25px;
  }
  100% {
    transform: scale(1.2, 0.2);
    background-position: 100% 50%;
    opacity: 0;
    bottom: -30px;
  }
}
@keyframes SpaceShip {
  0% {
    bottom: 235.2941176471px;
  }
  20% {
    bottom: 600px;
  }
  50% {
    bottom: 2000px;
  }
  70% {
    bottom: 600px;
  }
  100% {
    bottom: 235.2941176471px;
  }
}
@keyframes Beam {
  0% {
    height: 180px;
  }
  20% {
    height: 400px;
    opacity: 1;
  }
  35% {
    opacity: 0;
  }
  50% {
    height: 2000px;
  }
  55% {
    height: 80px;
    opacity: 0;
    box-shadow: none;
  }
  70% {
    height: 80px;
    opacity: 1;
    background: white;
  }
  100% {
    height: 80px;
    background: white;
    box-shadow: 0 0 5px #fff, 0 0 30px #fff, 0 0 80px #fff, 0 0 120px #fff, 0 0 150px #75e2fa, 0 0 200px #fff;
  }
}
@keyframes SpaceShipWingsL {
  0% {
    transform: rotate(0);
  }
  20% {
    transform: rotate(-25deg);
  }
  80% {
    transform: rotate(-25deg);
  }
  100% {
    transform: rotate(0);
  }
}
@keyframes SpaceShipWingsR {
  0% {
    transform: rotate(0);
  }
  20% {
    transform: rotate(25deg);
  }
  80% {
    transform: rotate(25deg);
  }
  100% {
    transform: rotate(0);
  }
}
@keyframes PlanetLayer {
  0% {
    left: -150px;
  }
  50% {
    left: 400px;
  }
  100% {
    left: 400px;
  }
}
@keyframes Mountain-1 {
  0% {
    left: -50px;
    transform: scaleX(0);
  }
  10% {
    transform: scaleX(1);
  }
  40% {
    transform: scaleX(1);
  }
  50% {
    left: 310px;
    transform: scaleX(0);
  }
  100% {
    transform: scaleX(0);
    left: 310px;
  }
}
@keyframes Mountain-1--far {
  0% {
    left: 315px;
    transform: scaleX(0);
  }
  50% {
    left: 315px;
    transform: scaleX(0);
  }
  60% {
    transform: scaleX(1);
  }
  90% {
    transform: scaleX(1);
  }
  100% {
    left: -50px;
    transform: scaleX(0);
  }
}

</style>
<div class="container">
<div class="background">
  <div class="scene">
    <div class="stars">
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="mini-planet"></div>
      <div class="mini-planet"></div>
      <div class="mini-planet"></div>
    </div>
    <div class="saturn-container">
      <div class="saturn"></div>
    </div>
    <div class="clouds">
      <div class="cloud"></div>
      <div class="cloud"></div>
      <div class="cloud"></div>
      <div class="cloud"></div>
    </div>
    <div class="planet">
      <div class="planet-layer-1"></div>
      <div class="planet-layer-2"></div>
      <div class="planet-layer-3"></div>
      <div class="planet-shadow"></div>
    </div>
    <div class="mountains">
      <div class="mountain-1"></div>
      <div class="mountain-2"></div>
      <div class="mountain-3"></div>
      <div class="mountain-3--far"></div>
    </div>
    <div class="space-ship-container">
      <div class="space-ship">
        <div class="space-ship-window"></div>
      </div>
      <div class="space-ship-wing r"></div>
      <div class="space-ship-wing l"></div>
      <div class="space-ship-reactor"></div>
      <div class="beam-light"></div>
    </div>
  </div>
</div>
</div>
`