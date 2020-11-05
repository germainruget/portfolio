export const html = `
.poster
   .background
      .top-title
         p WILLIAM H.ROBERTS
         .straps
            - for (var x = 0; x <= 6; x++)
               div(class='strap--'+x)
         h1 FUTURECITY
         .bottom-top-title
            h3 VOL 1
            h2 A NOVEL FROM THE 22ND CENTURY
            h3 NO 7
      .top-scene
         .planet
         .planet
      .middle-scene
         .planet
      .large-circles
         .circle
         .circle
      .bottom-scene
         - for (var x = 0; x < 3; x++)
            .strap
      .bottom-title
         p DUNE PUBLISHING HOUSE
      .border
      .planes
         - for (var x = 0; x < 4; x++)
            .plane
               .beam
      .stars
         - for (var x = 1; x <= 80; x++)
            .star
   .city-scene
      .low-buildings-left
         .low-circle-buildings-left
            .circle-building
               .flat-part
            .circle-building
               .flat-part
         .low-triangle-buildings-left
            .triangle-building
            .triangle-building
      .towers
         - for (var x = 1; x <= 4; x++)
            .tower
      .building-container
         - for (var x = 1; x <= 2; x++)
            .building-left
               .straps
                  - for (var y = 3; y <= 12; y++)
                     div(class='strap--'+y)
               - for (var z = 1; z <= 3; z++)
                  div(class='triangle-left-part--'+z)
      .building-center
         .roof
            .antenna
            - for (var x = 1; x <= 3; x++)
               div(class='roof-layer--'+x)
         - for (var x = 1; x <= 3; x++)
            div(class='triangle--'+x)
      .building-right
         .straps
            - for (var x = 1; x <= 10; x++)
               div(class='strap--'+x)
      .high-buildings
         - for (var x = 1; x <= 3; x++)
            .high-building
               .hover-straps
                  - for (var y = 1; y <= 50; y++)
                     .strap
      .circle-buildings-right
         - for (var y = 1; y <= 3; y++)
            .circle-building
               .circle-building-inner-half
                  - for (var x = 1; x <= 20; x++)
                     div(class='straps--'+x)
               .circle-building-inner-square
                  - for (var x = 1; x <= 20; x++)
                     div(class='straps--'+x)

`;

export const css = `
/* ------------------------------------------------------ */
/*                FROM DRIBBLE BY : studioMUTI            */
/* https://dribbble.com/shots/2914597-F-U-T-U-R-E-C-I-T-Y */
/* ------------------------------------------------------ */

@import url('https://fonts.googleapis.com/css?family=Saira+Extra+Condensed:100');

html,
body {
   font-family: 'Saira Extra Condensed', sans-serif;
   height: 100%;
   min-height: 100%;
   width: 100%;
   padding: 0;
   margin: 0;
   display:flex;
   justify-content:center;
}
html {
   box-sizing: border-box;
   background:#000218;
}
*, *:before, *:after {
   box-sizing: inherit;
}
* {
   position: absolute;
}
*:before, *:after {
   content: "";
   position: absolute;
}

h1, h2, h3, p{
   margin:0;
}

.poster{
   margin:50px 0;
   height:1150px;
   width: 880px;
   background:green;
   display:flex;
   justify-content:center;
   overflow:hidden;
   .background{
      height:100%;
      width:100%;
      display:flex;
      align-items:center;
      justify-content:center;
      .bottom-title{
         width: 100%;
         height:80px;
         background:#2E222E;
         bottom:0;
      }
      .bottom-scene{
         width: 100%;
         height:300px;
         background:#E98765;
         bottom:80px;
         border-top:50px solid #E65B42;
         box-shadow: 0 -40px 0 0 rgba(#E65B42, .2);
         .strap{
            width: 100%;
            height:5px;
            background:#E65B42;
            top:70px;
            &:nth-child(2){
               top:140px;
               opacity:0.4
            }
            &:nth-child(3){
               height:10px;
               top:160px;
               opacity:0.9
            }
         }
      }
      .middle-scene{
         width: 100%;
         height:280px;
         background:#824253;
         bottom:380px;
         .planet{
            width: 250px;
            height: 250px;
            border-radius:50%;
            left:80px;
            bottom:-40px;
            background:linear-gradient(to right, #D8483F, rgba(#814153, 0.2));
         }
      }
      .stars{
         width: 90%;
         height:400px;
         top:50px;
         @for $i from 1 through (80) {
            .star:nth-of-type(#{$i}) {
               $size:random(6) + px;
               border-radius:50%;
               background:#E4775B;
               top: percentage(random(100) / 100);
               left: percentage(random(100) / 100);
               width: $size; height: $size;
               animation: Star infinite 4s linear;
               animation-delay: random(5)+s;
            }
         }
      }
      .planes{
         width: 90%;
         height:535px;
         top:235px;
         overflow:hidden;
         .plane{
            transform:scale(0.8);
            $size: 10px;
            border-left:  $size / 1.25 solid transparent;
            border-right:  $size / 1.25 solid transparent;
            border-bottom:  $size * 4 solid #E87B5B;
            display:flex;
            justify-content:center;
            bottom:-100px;
            &:before{
               background:#E87B5B;
               width:$size / 2.5;
               top:0px;
               height:$size * 4.25;
            }
            &:after{
               background:#DA3632;
               width:$size / 5;
               top:-$size * 1.75;
               height:$size * 6; 
            }
            .beam{
               width: $size * 0.3;
               height: 400px;
               top:$size * 5;
               background-image: linear-gradient(#EA654A, rgba(#EA654A, 0.3) 40%, transparent);
            }
            &:nth-of-type(1){
               left:100px;
               animation: Plane 6s infinite ease-in;
               //animation-play-state:paused;
               animation-delay:-2.2s;
            }
            &:nth-of-type(2){
               left:200px;
               animation: Plane 8s infinite ease-in;
               //animation-play-state:paused;
               animation-delay:-2.7s;
            }
            &:nth-of-type(3){
               left:250px;
               animation: Plane 5s infinite ease-in;
               //animation-play-state:paused;
               animation-delay:-2.07s;
            }
            &:nth-of-type(4){
               right:95px;
               animation: Plane 7s infinite ease-in;
               //animation-play-state:paused;
               animation-delay:-1.9s;
               transform:scale(1.2);
            }
         }
      }
      .top-scene{
         width: 100%;
         height: 240px;
         background:#45263B;
         bottom:660px;
         .planet{
            z-index: 10;
            width: 50px;
            height: 50px;
            border-radius:50%;
            right:160px;
            bottom:20px;
            background:linear-gradient(35deg, #D97455, #D97455 5%, rgba(#814153, 0.2));
            &:nth-child(2){
               bottom:110px;
               right:100px;
               width: 100px;
               height: 100px;
            }
         }
      }
      .top-title{
         display:flex;
         justify-content:center;
         align-items:center;
         flex-direction:column;
         width: 100%;
         height: 250px;
         background:#2E222E;
         bottom:900px;
         text-align:center;
         & * {
            z-index: 10;
            position:relative;
         }
         & p {
            top:40px;
            letter-spacing:5px;
            transform:scaleY(1.4);
            color:#D93832;
            font-weight:bold;
         }
         & h1{
            top:20px;
            font-size:7em;
            letter-spacing:25px;
            margin-right:-25px;
            transform:scaleY(1.4);
            color:#D93832;
            text-shadow: 3px 0 0 #EA7A59;
            &:after{
               content:"";
               width: 95%;
               height:60%;
               left:10px;
               top:45px;  
               background:#2E222E;  
               z-index: -10;
            }
         }
         .straps{
            width: 90%;
            height:100px;
            position:absolute;
            z-index: 50;
            margin-top:-10px;
            @for $i from 1 through 6   {
               .strap--#{$i}{
                  width: 100%;
                  height:5px / $i;
                  margin:8px  0;
                  background:#2E222E;
                  position:relative;
               }
            }
         }
         .bottom-top-title{
            display:flex;
            flex-direction:row;
            width: 70%;
            justify-content:space-between;
            align-items:flex-end;
            bottom:4px;
            & h2{
               letter-spacing:5px;
               background:darken(#2E222E, 5%);
               padding: 0 10px;
               color:#E98864;
            }
            & h3{
               font-size:1em;
               background:#DF513D;
               border-right:solid 8px #EC7C59;
               letter-spacing:4px;
               padding: 0 5px;
            }
         }
      }
      .large-circles{
         z-index: 10;
         width: 1100px;
         height: 1100px;
         display:flex;
         justify-content:center;
         align-items:center;
         bottom:-220px;
         .circle{
            width: 100%;
            height:100%;
            background:rgba(#E77F5D, 0.1);
            border-top-left-radius:50%;
            border-top-right-radius:50%;
            &:nth-child(2){
               width: 85%;
               height: 85%;
            }
         }
      }
      .bottom-title{
         display:flex;
         justify-content:center;
         p {
            font-size:1.1em;
            top:12px;
            font-weight:bold;
            letter-spacing:5px;
            padding: 0 10px;
            background:darken(#2E222E, 5%);
            color:#E98864;
         }
      }
      .border{
         $color:#EA654A;
         width: 95%;
         height:96%;
         z-index: 10;
         &:after{
            width: 100%;
            height:85%;
            border-top: 5px solid $color;
            background-image: 
            linear-gradient($color, transparent),
            linear-gradient($color, transparent);
            background-size: 5px 100%;
            background-position: 0 0, 100% 0;
            background-repeat: no-repeat; 
            
         }
         &:before{
            width: 100%;
            height:4%;
            bottom:0;
            border-bottom: 5px solid $color;
            background-image: 
            linear-gradient(transparent, $color),
            linear-gradient(transparent, $color);
            background-size: 5px 100%;
            background-position: 0 0, 100% 0;
            background-repeat: no-repeat; 
            
         }
      }

   }
   &:after{
      content: "";
      height:100%;
      width: 100%;
      z-index: 9999;
      background: url("http://api.thumbr.it/whitenoise-500x500.png?background=3e8a5e00&noise=545454&density=50&opacity=30")
   }
}

.city-scene {
   width: 880px;
   height:880px;
   display:flex;
   bottom: 80px;
   align-items:flex-end;
   overflow:hidden;
}

.building-center {
   $width: 120px;
   $height:700px;
   width: $width;
   height:$height;
   background:#16102D;
   bottom:0;
   display:flex;
   justify-content:center;
   position:relative;
   .roof{
      width: 100%;
      display:flex;
      justify-content:center;
      .antenna {
         width: 4px;
         height:60px;
         background:#EC8060;
         top:-105px;
      }
      &-layer--1{
         width: 100%;
         height:15px;
         background:#EC8060;
         top:-15px;
         border-top:solid 5px #512337;
      }
      &-layer--2{
         width: 85%;
         height:15px;
         background:#EC8060;
         top:-30px;
         border-top:solid 5px #512337;
      }
      &-layer--3{
         width: 65%;
         height:15px;
         background:#EC8060;
         top:-45px;
         border-top:solid 5px #512337;
      }
   }
   .triangle {
      width: 0; 
      height: 0; 
      &--1{
         border-left: $width / 2 solid transparent;
         border-right: $width / 2 solid transparent;
         border-top: $height solid #EF8C63;
         &:after{
            width: 0; 
            height: 0;
            top:-$height;
            right:-$width / 2;
            border-right: $width / 2 solid transparent;
            border-top: $height solid #E55B3C;        
         }
      }
      &--2{
         border-left: $width / 2 solid transparent;
         border-right: $width / 2 solid transparent;
         border-top: $height * .6 solid #E65E3F;
         &:after{
            width: 0; 
            height: 0;
            top:-$height * .6;
            right:-$width / 2;
            border-right: $width / 2 solid transparent;
            border-top: $height * .6 solid #D82F2D;        
         }
      }
      &--3{
         border-left: $width / 2 solid transparent;
         border-right: $width / 2 solid transparent;
         border-top: $height * .2 solid #53232F;
         &:after{
            width: 0; 
            height: 0;
            top:-$height * .2;
            right:-$width / 2;
            border-right: $width / 2 solid transparent;
            border-top: $height * .2 solid #2B171E;        
         }
      }
   }
}

.building-container{
   position:relative;
   width: 150px;
   height: 480px;
   display:flex;
}

.building-left{
   $width: 250px;
   $height:480px;
   width: ($width / 2) + 25;
   height:$height;
   right:0;
   //position:relative;
   .straps{
      width: ($width / 2) + 25;
      height:$height;
      clip-path: polygon(150px 0%, 125px 0%, 0% 100%, 100% 100%);
      z-index: 50;
      @for $i from 3 through 12   {
         .strap--#{$i}{
            width: 100%;
            height:1px * $i;
            background:rgba(14,7,28,0.6);
            z-index: 99;
            margin: 5px * $i 0;
            position:relative;
         }
      }
   }
   &:after{
      width: 25px;
      height:$height;
      background:#DB3A2E;
      border-right:12.5px solid #F0825F;
      right:0;
   }
   .triangle-left-part--1{
      border-left: $width / 2 solid transparent;
      border-bottom: $height solid #201E4C;
      right:25px; bottom:0;
   }
   .triangle-left-part--2{
      border-left: ($width / 2) * .7 solid transparent;
      border-bottom: $height * .7 solid #1C1531;
      right:25px; bottom:0;
   }
   .triangle-left-part--3{
      border-left: ($width / 2) *.4 solid transparent;
      border-bottom: $height * .4 solid #0E071C;
      right:25px; bottom:0;
   }
   &:nth-child(1){
      bottom:-80px;
      right:80px;
      transform:scale(0.9)
   }
}

.towers{
   position:relative;
   width: 80px;
   height:360px;
   display:flex;
   align-items:flex-end;
   .tower{
      width: 25px;
      height:100%;
      background:#EE8B65;
      border-right:solid 10px #EE8B65;
      clip-path: polygon(100% 0, 100% 100%, 0% 100%, 0 40px);
      box-shadow:inset -5px 0 0 #2F1830;
      position:relative;
      &:nth-child(1), &:nth-child(2){
         height:70%;
         border-color:#E85D3C;
         background:#E85D3C;
      }
      &:nth-child(even){
         width: 8px;
         border:none;
         clip-path: none;
         background:#2F1830;
      }
      &:nth-child(4){
         height: 115%;
      }
   }
}

.low-buildings-left{
   width: 140px;
   height:180px;
   position:relative;
   display:flex;
   align-items:flex-end;
   overflow:hidden;
   .low-circle-buildings-left{
      z-index: 5;
      height:180px;
      left:20px;
      bottom:-125px;
      .circle-building{
         height:180px;
         width: 90px;
         background:#2E274F;
         border-radius:50%;
         &:before{
            width:30%;
            left:50%;
            height:100%;
            background:#2E274F;
         }
         &:after{
            left:30%;
            height:100%;
            width: 100%;
            border-radius:50%;
            background:#1B122E;
         }
         .flat-part{
            width: 100%;
            height:100%;
            border-radius:50%;
            z-index: 5;
            right:-50%;
            background:#EE836A;
         }
         
         &:nth-child(2){
            z-index: 10;
            left:60px;
         }
      }
   }
   .low-triangle-buildings-left{
      width: 120px;
      height:100%;
      display:flex;
      justify-content:flex-end;
      right:0;
      .triangle-building{
         width: 100px;
         height:100%;
         background:#4A1F4C;
         clip-path: polygon(100% 0, 100% 100%, 0% 100%, 0 100%, 65% 40%, 80px 0);
         &:nth-child(2){
            background:#1F1231;
            right:-20px;
         }
      }
   }
}

.building-right{
   width: 5px;
   height:500px;
   background:#ED8264;
   position:relative;
   display:flex;
   align-items:flex-end;
   margin-right:24px;
   &:after{
      height:60%;
      width: 20px;
      background:#211D34;
      left:5px;
      border-right:8px #ED8264 solid;
      border-left:5px #ED8264 solid;
      box-shadow: 4px 0 0 0 #E35240;
   }
   &:before{
      bottom:60%;
      left:5px;
      border-right: 20px solid transparent;
      border-bottom: 120px solid #ED8264;
   }
   .straps {
      width: 20px;
      height:120px;
      bottom:60%;
      left:5px;
      clip-path:polygon(0 100%, 100% 100%, 0 0);
      @for $i from 0 through 10   {
         .strap--#{$i} {
            width: 100%;
            height:(1em / 40) * $i;
            background:#211D34;
            margin:(1em / 10) * $i 0;
            position:relative;
         }
      }
   }
}

.high-buildings{
   position:relative;
   width: 150px;
   height:700px;
   display:flex;
   align-items:flex-end;
   z-index: 10;
   .high-building{
      width: 90px;
      height:100%;
      background:#ED8E67;
      border-right:solid 20px #1F112B;
      z-index: 20;
      &:after{
         width: 30%;
         height:100%;
         background:#DB3C33;
         right:0;
      }
      .hover-straps{
         width: 100%;
         height:100%;
         z-index: 5;
         border-style: solid;
         border-color:#4C214C;
         border-width: 8px 5px 8px 10px;
         .strap{
            width: 100%;
            height:1.5%;
            background: #4C214C;
            margin:18% 0;
            position:relative;
         }
      }
      &:nth-child(2){
         width: 25%;
         height:90%;
         left:80px;
         border-right:0;
         background:#23142E;
         z-index: 10;
         box-shadow:10px 0 0 0 rgba(#1F112B, .5);
         &:after{
            content:none;
         }
         .hover-straps{
            border-width: 5px;
         }
      }
      &:nth-child(3){
         width: 25%;
         height:70%;
         left:110px;
         border-right:0;
         background:#23142E;
         z-index: 5;
         &:after{
            content:none;
         }
         .hover-straps{
            border-width: 5px;
         }
      }
   }
}

.circle-buildings-right{
   width: 80px;
   height:600px;
   position:relative;
   bottom:-40%;
   z-index: 5;
   .circle-building{
      width: 100%;
      height:100%;
      left:-15px;
      border-radius:50%;
      box-shadow: inset 15px 0 0 0 #28204A, inset -15px 0 0 0 #28204A;
      &:before{
         background:#0D061C;
         border-radius:50%;
         width: 100%;
         height:100%;
         box-shadow: inset 30px 0 0 0 #1F1731, inset -30px 0 0 0 #1F1731;
         z-index: -1;
      }
      &:nth-child(2){
         width: 70%;
         height:70%;
         left:75px;
         bottom:120px;
         z-index: -3;
         &:before{
            background:#512439;
            box-shadow: inset 15px 0 0 0 #EF8363, inset -15px 0 0 0 #EF8363;
         }
      }
      .circle-building-inner-half{
         width: 100%;
         height:100%;
         clip-path: ellipse(50% 50% at 0 50%);
         background:#4E212D;
         border-radius:50%;
         border-top-left-radius:0;
         left:100%;
         z-index: -2;

      }
      .circle-building-inner-square{
         width: 50%;
         height:100%;
         background:#4E212D;
         left:50%;
         z-index: -2;
      }
      @for $i from 0 through 20   {
         .straps--#{$i}{
            width: 100%;
            height:(10px / 20) * $i;
            background:rgba(#EB5A42, 0.5);
            right: -0;
            margin: 10px 0;
            position:relative;
         }
      }
   }
}

/* ANIMATIONS */
@keyframes Plane {
   0% {
      bottom: -100px;
   }
   50% {
      bottom: 400px * 1.5;
   }
   100% {
      bottom: 400px * 5;
   }
}

@keyframes Star {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.3;
  }
}
`