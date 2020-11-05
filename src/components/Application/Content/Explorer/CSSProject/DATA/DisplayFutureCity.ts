
export const preview = `
<style>
    /* ------------------------------------------------------ */
    /*                FROM DRIBBLE BY : studioMUTI            */
    /* https://dribbble.com/shots/2914597-F-U-T-U-R-E-C-I-T-Y */
    /* ------------------------------------------------------ */
    @import url("https://fonts.googleapis.com/css?family=Saira+Extra+Condensed:100");

    .container {
        font-family: 'Saira Extra Condensed', sans-serif;
        width: 880px;
        height: 1150px;
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

    .container h1,
    .container h2,
    .container h3,
    .containerp {
        margin: 0;
    }

    .poster {
        height: 100%;
        width: 100%;
        overflow: hidden;
        position: relative;
    }

    .poster .background {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .poster .background .bottom-title {
        width: 100%;
        height: 80px;
        background: #2E222E;
        bottom: 0;
    }

    .poster .background .bottom-scene {
        width: 100%;
        height: 300px;
        background: #E98765;
        bottom: 80px;
        border-top: 50px solid #E65B42;
        box-shadow: 0 -40px 0 0 rgba(230, 91, 66, 0.2);
    }

    .poster .background .bottom-scene .strap {
        width: 100%;
        height: 5px;
        background: #E65B42;
        top: 70px;
    }

    .poster .background .bottom-scene .strap:nth-child(2) {
        top: 140px;
        opacity: 0.4;
    }

    .poster .background .bottom-scene .strap:nth-child(3) {
        height: 10px;
        top: 160px;
        opacity: 0.9;
    }

    .poster .background .middle-scene {
        width: 100%;
        height: 280px;
        background: #824253;
        bottom: 380px;
    }

    .poster .background .middle-scene .planet {
        width: 250px;
        height: 250px;
        border-radius: 50%;
        left: 80px;
        bottom: -40px;
        background: linear-gradient(to right, #D8483F, rgba(129, 65, 83, 0.2));
    }

    .poster .background .stars {
        width: 90%;
        height: 400px;
        top: 50px;
    }

    .poster .background .stars .star:nth-of-type(1) {
        border-radius: 50%;
        background: #E4775B;
        top: 17%;
        left: 19%;
        width: 1px;
        height: 1px;
        animation: Star infinite 4s linear;
        animation-delay: 5s;
    }

    .poster .background .stars .star:nth-of-type(2) {
        border-radius: 50%;
        background: #E4775B;
        top: 88%;
        left: 32%;
        width: 5px;
        height: 5px;
        animation: Star infinite 4s linear;
        animation-delay: 5s;
    }

    .poster .background .stars .star:nth-of-type(3) {
        border-radius: 50%;
        background: #E4775B;
        top: 26%;
        left: 90%;
        width: 5px;
        height: 5px;
        animation: Star infinite 4s linear;
        animation-delay: 5s;
    }

    .poster .background .stars .star:nth-of-type(4) {
        border-radius: 50%;
        background: #E4775B;
        top: 74%;
        left: 6%;
        width: 6px;
        height: 6px;
        animation: Star infinite 4s linear;
        animation-delay: 5s;
    }

    .poster .background .stars .star:nth-of-type(5) {
        border-radius: 50%;
        background: #E4775B;
        top: 76%;
        left: 42%;
        width: 2px;
        height: 2px;
        animation: Star infinite 4s linear;
        animation-delay: 1s;
    }

    .poster .background .stars .star:nth-of-type(6) {
        border-radius: 50%;
        background: #E4775B;
        top: 56%;
        left: 26%;
        width: 1px;
        height: 1px;
        animation: Star infinite 4s linear;
        animation-delay: 1s;
    }

    .poster .background .stars .star:nth-of-type(7) {
        border-radius: 50%;
        background: #E4775B;
        top: 95%;
        left: 94%;
        width: 1px;
        height: 1px;
        animation: Star infinite 4s linear;
        animation-delay: 2s;
    }

    .poster .background .stars .star:nth-of-type(8) {
        border-radius: 50%;
        background: #E4775B;
        top: 52%;
        left: 5%;
        width: 4px;
        height: 4px;
        animation: Star infinite 4s linear;
        animation-delay: 4s;
    }

    .poster .background .stars .star:nth-of-type(9) {
        border-radius: 50%;
        background: #E4775B;
        top: 57%;
        left: 49%;
        width: 2px;
        height: 2px;
        animation: Star infinite 4s linear;
        animation-delay: 2s;
    }

    .poster .background .stars .star:nth-of-type(10) {
        border-radius: 50%;
        background: #E4775B;
        top: 41%;
        left: 26%;
        width: 1px;
        height: 1px;
        animation: Star infinite 4s linear;
        animation-delay: 1s;
    }

    .poster .background .stars .star:nth-of-type(11) {
        border-radius: 50%;
        background: #E4775B;
        top: 58%;
        left: 51%;
        width: 1px;
        height: 1px;
        animation: Star infinite 4s linear;
        animation-delay: 1s;
    }

    .poster .background .stars .star:nth-of-type(12) {
        border-radius: 50%;
        background: #E4775B;
        top: 18%;
        left: 85%;
        width: 3px;
        height: 3px;
        animation: Star infinite 4s linear;
        animation-delay: 2s;
    }

    .poster .background .stars .star:nth-of-type(13) {
        border-radius: 50%;
        background: #E4775B;
        top: 22%;
        left: 56%;
        width: 5px;
        height: 5px;
        animation: Star infinite 4s linear;
        animation-delay: 4s;
    }

    .poster .background .stars .star:nth-of-type(14) {
        border-radius: 50%;
        background: #E4775B;
        top: 69%;
        left: 38%;
        width: 5px;
        height: 5px;
        animation: Star infinite 4s linear;
        animation-delay: 1s;
    }

    .poster .background .stars .star:nth-of-type(15) {
        border-radius: 50%;
        background: #E4775B;
        top: 94%;
        left: 2%;
        width: 1px;
        height: 1px;
        animation: Star infinite 4s linear;
        animation-delay: 4s;
    }

    .poster .background .stars .star:nth-of-type(16) {
        border-radius: 50%;
        background: #E4775B;
        top: 14%;
        left: 30%;
        width: 6px;
        height: 6px;
        animation: Star infinite 4s linear;
        animation-delay: 5s;
    }

    .poster .background .stars .star:nth-of-type(17) {
        border-radius: 50%;
        background: #E4775B;
        top: 59%;
        left: 45%;
        width: 4px;
        height: 4px;
        animation: Star infinite 4s linear;
        animation-delay: 4s;
    }

    .poster .background .stars .star:nth-of-type(18) {
        border-radius: 50%;
        background: #E4775B;
        top: 9%;
        left: 58%;
        width: 4px;
        height: 4px;
        animation: Star infinite 4s linear;
        animation-delay: 2s;
    }

    .poster .background .stars .star:nth-of-type(19) {
        border-radius: 50%;
        background: #E4775B;
        top: 54%;
        left: 91%;
        width: 5px;
        height: 5px;
        animation: Star infinite 4s linear;
        animation-delay: 4s;
    }

    .poster .background .stars .star:nth-of-type(20) {
        border-radius: 50%;
        background: #E4775B;
        top: 81%;
        left: 84%;
        width: 2px;
        height: 2px;
        animation: Star infinite 4s linear;
        animation-delay: 4s;
    }

    .poster .background .stars .star:nth-of-type(21) {
        border-radius: 50%;
        background: #E4775B;
        top: 56%;
        left: 73%;
        width: 4px;
        height: 4px;
        animation: Star infinite 4s linear;
        animation-delay: 1s;
    }

    .poster .background .stars .star:nth-of-type(22) {
        border-radius: 50%;
        background: #E4775B;
        top: 14%;
        left: 5%;
        width: 1px;
        height: 1px;
        animation: Star infinite 4s linear;
        animation-delay: 1s;
    }

    .poster .background .stars .star:nth-of-type(23) {
        border-radius: 50%;
        background: #E4775B;
        top: 67%;
        left: 46%;
        width: 1px;
        height: 1px;
        animation: Star infinite 4s linear;
        animation-delay: 2s;
    }

    .poster .background .stars .star:nth-of-type(24) {
        border-radius: 50%;
        background: #E4775B;
        top: 24%;
        left: 96%;
        width: 4px;
        height: 4px;
        animation: Star infinite 4s linear;
        animation-delay: 5s;
    }

    .poster .background .stars .star:nth-of-type(25) {
        border-radius: 50%;
        background: #E4775B;
        top: 58%;
        left: 1%;
        width: 6px;
        height: 6px;
        animation: Star infinite 4s linear;
        animation-delay: 1s;
    }

    .poster .background .stars .star:nth-of-type(26) {
        border-radius: 50%;
        background: #E4775B;
        top: 60%;
        left: 48%;
        width: 1px;
        height: 1px;
        animation: Star infinite 4s linear;
        animation-delay: 5s;
    }

    .poster .background .stars .star:nth-of-type(27) {
        border-radius: 50%;
        background: #E4775B;
        top: 30%;
        left: 41%;
        width: 3px;
        height: 3px;
        animation: Star infinite 4s linear;
        animation-delay: 3s;
    }

    .poster .background .stars .star:nth-of-type(28) {
        border-radius: 50%;
        background: #E4775B;
        top: 97%;
        left: 40%;
        width: 5px;
        height: 5px;
        animation: Star infinite 4s linear;
        animation-delay: 3s;
    }

    .poster .background .stars .star:nth-of-type(29) {
        border-radius: 50%;
        background: #E4775B;
        top: 37%;
        left: 20%;
        width: 4px;
        height: 4px;
        animation: Star infinite 4s linear;
        animation-delay: 1s;
    }

    .poster .background .stars .star:nth-of-type(30) {
        border-radius: 50%;
        background: #E4775B;
        top: 100%;
        left: 45%;
        width: 2px;
        height: 2px;
        animation: Star infinite 4s linear;
        animation-delay: 5s;
    }

    .poster .background .stars .star:nth-of-type(31) {
        border-radius: 50%;
        background: #E4775B;
        top: 5%;
        left: 3%;
        width: 3px;
        height: 3px;
        animation: Star infinite 4s linear;
        animation-delay: 4s;
    }

    .poster .background .stars .star:nth-of-type(32) {
        border-radius: 50%;
        background: #E4775B;
        top: 98%;
        left: 64%;
        width: 6px;
        height: 6px;
        animation: Star infinite 4s linear;
        animation-delay: 4s;
    }

    .poster .background .stars .star:nth-of-type(33) {
        border-radius: 50%;
        background: #E4775B;
        top: 55%;
        left: 27%;
        width: 2px;
        height: 2px;
        animation: Star infinite 4s linear;
        animation-delay: 2s;
    }

    .poster .background .stars .star:nth-of-type(34) {
        border-radius: 50%;
        background: #E4775B;
        top: 35%;
        left: 60%;
        width: 4px;
        height: 4px;
        animation: Star infinite 4s linear;
        animation-delay: 2s;
    }

    .poster .background .stars .star:nth-of-type(35) {
        border-radius: 50%;
        background: #E4775B;
        top: 77%;
        left: 49%;
        width: 1px;
        height: 1px;
        animation: Star infinite 4s linear;
        animation-delay: 4s;
    }

    .poster .background .stars .star:nth-of-type(36) {
        border-radius: 50%;
        background: #E4775B;
        top: 75%;
        left: 50%;
        width: 1px;
        height: 1px;
        animation: Star infinite 4s linear;
        animation-delay: 3s;
    }

    .poster .background .stars .star:nth-of-type(37) {
        border-radius: 50%;
        background: #E4775B;
        top: 98%;
        left: 67%;
        width: 3px;
        height: 3px;
        animation: Star infinite 4s linear;
        animation-delay: 4s;
    }

    .poster .background .stars .star:nth-of-type(38) {
        border-radius: 50%;
        background: #E4775B;
        top: 54%;
        left: 6%;
        width: 5px;
        height: 5px;
        animation: Star infinite 4s linear;
        animation-delay: 5s;
    }

    .poster .background .stars .star:nth-of-type(39) {
        border-radius: 50%;
        background: #E4775B;
        top: 23%;
        left: 68%;
        width: 3px;
        height: 3px;
        animation: Star infinite 4s linear;
        animation-delay: 2s;
    }

    .poster .background .stars .star:nth-of-type(40) {
        border-radius: 50%;
        background: #E4775B;
        top: 56%;
        left: 55%;
        width: 3px;
        height: 3px;
        animation: Star infinite 4s linear;
        animation-delay: 3s;
    }

    .poster .background .stars .star:nth-of-type(41) {
        border-radius: 50%;
        background: #E4775B;
        top: 2%;
        left: 18%;
        width: 2px;
        height: 2px;
        animation: Star infinite 4s linear;
        animation-delay: 1s;
    }

    .poster .background .stars .star:nth-of-type(42) {
        border-radius: 50%;
        background: #E4775B;
        top: 23%;
        left: 58%;
        width: 6px;
        height: 6px;
        animation: Star infinite 4s linear;
        animation-delay: 2s;
    }

    .poster .background .stars .star:nth-of-type(43) {
        border-radius: 50%;
        background: #E4775B;
        top: 42%;
        left: 65%;
        width: 3px;
        height: 3px;
        animation: Star infinite 4s linear;
        animation-delay: 5s;
    }

    .poster .background .stars .star:nth-of-type(44) {
        border-radius: 50%;
        background: #E4775B;
        top: 72%;
        left: 5%;
        width: 4px;
        height: 4px;
        animation: Star infinite 4s linear;
        animation-delay: 2s;
    }

    .poster .background .stars .star:nth-of-type(45) {
        border-radius: 50%;
        background: #E4775B;
        top: 63%;
        left: 45%;
        width: 6px;
        height: 6px;
        animation: Star infinite 4s linear;
        animation-delay: 1s;
    }

    .poster .background .stars .star:nth-of-type(46) {
        border-radius: 50%;
        background: #E4775B;
        top: 15%;
        left: 53%;
        width: 6px;
        height: 6px;
        animation: Star infinite 4s linear;
        animation-delay: 1s;
    }

    .poster .background .stars .star:nth-of-type(47) {
        border-radius: 50%;
        background: #E4775B;
        top: 96%;
        left: 9%;
        width: 3px;
        height: 3px;
        animation: Star infinite 4s linear;
        animation-delay: 3s;
    }

    .poster .background .stars .star:nth-of-type(48) {
        border-radius: 50%;
        background: #E4775B;
        top: 71%;
        left: 33%;
        width: 2px;
        height: 2px;
        animation: Star infinite 4s linear;
        animation-delay: 2s;
    }

    .poster .background .stars .star:nth-of-type(49) {
        border-radius: 50%;
        background: #E4775B;
        top: 20%;
        left: 52%;
        width: 6px;
        height: 6px;
        animation: Star infinite 4s linear;
        animation-delay: 4s;
    }

    .poster .background .stars .star:nth-of-type(50) {
        border-radius: 50%;
        background: #E4775B;
        top: 9%;
        left: 99%;
        width: 6px;
        height: 6px;
        animation: Star infinite 4s linear;
        animation-delay: 2s;
    }

    .poster .background .stars .star:nth-of-type(51) {
        border-radius: 50%;
        background: #E4775B;
        top: 46%;
        left: 48%;
        width: 1px;
        height: 1px;
        animation: Star infinite 4s linear;
        animation-delay: 4s;
    }

    .poster .background .stars .star:nth-of-type(52) {
        border-radius: 50%;
        background: #E4775B;
        top: 35%;
        left: 49%;
        width: 1px;
        height: 1px;
        animation: Star infinite 4s linear;
        animation-delay: 1s;
    }

    .poster .background .stars .star:nth-of-type(53) {
        border-radius: 50%;
        background: #E4775B;
        top: 44%;
        left: 52%;
        width: 3px;
        height: 3px;
        animation: Star infinite 4s linear;
        animation-delay: 5s;
    }

    .poster .background .stars .star:nth-of-type(54) {
        border-radius: 50%;
        background: #E4775B;
        top: 99%;
        left: 74%;
        width: 3px;
        height: 3px;
        animation: Star infinite 4s linear;
        animation-delay: 2s;
    }

    .poster .background .stars .star:nth-of-type(55) {
        border-radius: 50%;
        background: #E4775B;
        top: 65%;
        left: 30%;
        width: 5px;
        height: 5px;
        animation: Star infinite 4s linear;
        animation-delay: 2s;
    }

    .poster .background .stars .star:nth-of-type(56) {
        border-radius: 50%;
        background: #E4775B;
        top: 56%;
        left: 91%;
        width: 5px;
        height: 5px;
        animation: Star infinite 4s linear;
        animation-delay: 5s;
    }

    .poster .background .stars .star:nth-of-type(57) {
        border-radius: 50%;
        background: #E4775B;
        top: 31%;
        left: 46%;
        width: 4px;
        height: 4px;
        animation: Star infinite 4s linear;
        animation-delay: 2s;
    }

    .poster .background .stars .star:nth-of-type(58) {
        border-radius: 50%;
        background: #E4775B;
        top: 86%;
        left: 100%;
        width: 6px;
        height: 6px;
        animation: Star infinite 4s linear;
        animation-delay: 4s;
    }

    .poster .background .stars .star:nth-of-type(59) {
        border-radius: 50%;
        background: #E4775B;
        top: 15%;
        left: 27%;
        width: 4px;
        height: 4px;
        animation: Star infinite 4s linear;
        animation-delay: 5s;
    }

    .poster .background .stars .star:nth-of-type(60) {
        border-radius: 50%;
        background: #E4775B;
        top: 21%;
        left: 34%;
        width: 1px;
        height: 1px;
        animation: Star infinite 4s linear;
        animation-delay: 2s;
    }

    .poster .background .stars .star:nth-of-type(61) {
        border-radius: 50%;
        background: #E4775B;
        top: 86%;
        left: 88%;
        width: 1px;
        height: 1px;
        animation: Star infinite 4s linear;
        animation-delay: 4s;
    }

    .poster .background .stars .star:nth-of-type(62) {
        border-radius: 50%;
        background: #E4775B;
        top: 58%;
        left: 27%;
        width: 2px;
        height: 2px;
        animation: Star infinite 4s linear;
        animation-delay: 4s;
    }

    .poster .background .stars .star:nth-of-type(63) {
        border-radius: 50%;
        background: #E4775B;
        top: 84%;
        left: 18%;
        width: 3px;
        height: 3px;
        animation: Star infinite 4s linear;
        animation-delay: 1s;
    }

    .poster .background .stars .star:nth-of-type(64) {
        border-radius: 50%;
        background: #E4775B;
        top: 55%;
        left: 72%;
        width: 2px;
        height: 2px;
        animation: Star infinite 4s linear;
        animation-delay: 1s;
    }

    .poster .background .stars .star:nth-of-type(65) {
        border-radius: 50%;
        background: #E4775B;
        top: 31%;
        left: 66%;
        width: 2px;
        height: 2px;
        animation: Star infinite 4s linear;
        animation-delay: 3s;
    }

    .poster .background .stars .star:nth-of-type(66) {
        border-radius: 50%;
        background: #E4775B;
        top: 81%;
        left: 41%;
        width: 1px;
        height: 1px;
        animation: Star infinite 4s linear;
        animation-delay: 5s;
    }

    .poster .background .stars .star:nth-of-type(67) {
        border-radius: 50%;
        background: #E4775B;
        top: 3%;
        left: 22%;
        width: 5px;
        height: 5px;
        animation: Star infinite 4s linear;
        animation-delay: 1s;
    }

    .poster .background .stars .star:nth-of-type(68) {
        border-radius: 50%;
        background: #E4775B;
        top: 80%;
        left: 59%;
        width: 2px;
        height: 2px;
        animation: Star infinite 4s linear;
        animation-delay: 1s;
    }

    .poster .background .stars .star:nth-of-type(69) {
        border-radius: 50%;
        background: #E4775B;
        top: 70%;
        left: 9%;
        width: 5px;
        height: 5px;
        animation: Star infinite 4s linear;
        animation-delay: 3s;
    }

    .poster .background .stars .star:nth-of-type(70) {
        border-radius: 50%;
        background: #E4775B;
        top: 9%;
        left: 46%;
        width: 2px;
        height: 2px;
        animation: Star infinite 4s linear;
        animation-delay: 1s;
    }

    .poster .background .stars .star:nth-of-type(71) {
        border-radius: 50%;
        background: #E4775B;
        top: 60%;
        left: 73%;
        width: 2px;
        height: 2px;
        animation: Star infinite 4s linear;
        animation-delay: 1s;
    }

    .poster .background .stars .star:nth-of-type(72) {
        border-radius: 50%;
        background: #E4775B;
        top: 3%;
        left: 62%;
        width: 6px;
        height: 6px;
        animation: Star infinite 4s linear;
        animation-delay: 1s;
    }

    .poster .background .stars .star:nth-of-type(73) {
        border-radius: 50%;
        background: #E4775B;
        top: 53%;
        left: 55%;
        width: 4px;
        height: 4px;
        animation: Star infinite 4s linear;
        animation-delay: 4s;
    }

    .poster .background .stars .star:nth-of-type(74) {
        border-radius: 50%;
        background: #E4775B;
        top: 8%;
        left: 73%;
        width: 2px;
        height: 2px;
        animation: Star infinite 4s linear;
        animation-delay: 4s;
    }

    .poster .background .stars .star:nth-of-type(75) {
        border-radius: 50%;
        background: #E4775B;
        top: 95%;
        left: 62%;
        width: 5px;
        height: 5px;
        animation: Star infinite 4s linear;
        animation-delay: 3s;
    }

    .poster .background .stars .star:nth-of-type(76) {
        border-radius: 50%;
        background: #E4775B;
        top: 45%;
        left: 65%;
        width: 4px;
        height: 4px;
        animation: Star infinite 4s linear;
        animation-delay: 2s;
    }

    .poster .background .stars .star:nth-of-type(77) {
        border-radius: 50%;
        background: #E4775B;
        top: 19%;
        left: 30%;
        width: 2px;
        height: 2px;
        animation: Star infinite 4s linear;
        animation-delay: 2s;
    }

    .poster .background .stars .star:nth-of-type(78) {
        border-radius: 50%;
        background: #E4775B;
        top: 83%;
        left: 57%;
        width: 5px;
        height: 5px;
        animation: Star infinite 4s linear;
        animation-delay: 4s;
    }

    .poster .background .stars .star:nth-of-type(79) {
        border-radius: 50%;
        background: #E4775B;
        top: 55%;
        left: 67%;
        width: 6px;
        height: 6px;
        animation: Star infinite 4s linear;
        animation-delay: 5s;
    }

    .poster .background .stars .star:nth-of-type(80) {
        border-radius: 50%;
        background: #E4775B;
        top: 86%;
        left: 76%;
        width: 2px;
        height: 2px;
        animation: Star infinite 4s linear;
        animation-delay: 4s;
    }

    .poster .background .planes {
        width: 90%;
        height: 535px;
        top: 235px;
        overflow: hidden;
    }

    .poster .background .planes .plane {
        transform: scale(0.8);
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-bottom: 40px solid #E87B5B;
        display: flex;
        justify-content: center;
        bottom: -100px;
    }

    .poster .background .planes .plane:before {
        background: #E87B5B;
        width: 4px;
        top: 0px;
        height: 42.5px;
    }

    .poster .background .planes .plane:after {
        background: #DA3632;
        width: 2px;
        top: -17.5px;
        height: 60px;
    }

    .poster .background .planes .plane .beam {
        width: 3px;
        height: 400px;
        top: 50px;
        background-image: linear-gradient(#EA654A, rgba(234, 101, 74, 0.3) 40%, transparent);
    }

    .poster .background .planes .plane:nth-of-type(1) {
        left: 100px;
        animation: Plane 6s infinite ease-in;
        animation-delay: -2.2s;
    }

    .poster .background .planes .plane:nth-of-type(2) {
        left: 200px;
        animation: Plane 8s infinite ease-in;
        animation-delay: -2.7s;
    }

    .poster .background .planes .plane:nth-of-type(3) {
        left: 250px;
        animation: Plane 5s infinite ease-in;
        animation-delay: -2.07s;
    }

    .poster .background .planes .plane:nth-of-type(4) {
        right: 95px;
        animation: Plane 7s infinite ease-in;
        animation-delay: -1.9s;
        transform: scale(1.2);
    }

    .poster .background .top-scene {
        width: 100%;
        height: 240px;
        background: #45263B;
        bottom: 660px;
    }

    .poster .background .top-scene .planet {
        z-index: 10;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        right: 160px;
        bottom: 20px;
        background: linear-gradient(35deg, #D97455, #D97455 5%, rgba(129, 65, 83, 0.2));
    }

    .poster .background .top-scene .planet:nth-child(2) {
        bottom: 110px;
        right: 100px;
        width: 100px;
        height: 100px;
    }

    .poster .background .top-title {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        height: 250px;
        background: #2E222E;
        bottom: 900px;
        text-align: center;
    }

    .poster .background .top-title * {
        z-index: 10;
        position: relative;
    }

    .poster .background .top-title p {
        top: 40px;
        letter-spacing: 5px;
        transform: scaleY(1.4);
        color: #D93832;
        font-weight: bold;
    }

    .poster .background .top-title h1 {
        top: 20px;
        font-size: 7em;
        letter-spacing: 25px;
        margin-right: -25px;
        transform: scaleY(1.4);
        color: #D93832;
        text-shadow: 3px 0 0 #EA7A59;
    }

    .poster .background .top-title h1:after {
        content: "";
        width: 95%;
        height: 60%;
        left: 10px;
        top: 45px;
        background: #2E222E;
        z-index: -10;
    }

    .poster .background .top-title .straps {
        width: 90%;
        height: 100px;
        position: absolute;
        z-index: 50;
        margin-top: -10px;
    }

    .poster .background .top-title .straps .strap--1 {
        width: 100%;
        height: 5px;
        margin: 8px 0;
        background: #2E222E;
        position: relative;
    }

    .poster .background .top-title .straps .strap--2 {
        width: 100%;
        height: 2.5px;
        margin: 8px 0;
        background: #2E222E;
        position: relative;
    }

    .poster .background .top-title .straps .strap--3 {
        width: 100%;
        height: 1.6666666667px;
        margin: 8px 0;
        background: #2E222E;
        position: relative;
    }

    .poster .background .top-title .straps .strap--4 {
        width: 100%;
        height: 1.25px;
        margin: 8px 0;
        background: #2E222E;
        position: relative;
    }

    .poster .background .top-title .straps .strap--5 {
        width: 100%;
        height: 1px;
        margin: 8px 0;
        background: #2E222E;
        position: relative;
    }

    .poster .background .top-title .straps .strap--6 {
        width: 100%;
        height: 0.8333333333px;
        margin: 8px 0;
        background: #2E222E;
        position: relative;
    }

    .poster .background .top-title .bottom-top-title {
        display: flex;
        flex-direction: row;
        width: 70%;
        justify-content: space-between;
        align-items: flex-end;
        bottom: 4px;
    }

    .poster .background .top-title .bottom-top-title h2 {
        letter-spacing: 5px;
        background: #1f171f;
        padding: 0 10px;
        color: #E98864;
    }

    .poster .background .top-title .bottom-top-title h3 {
        font-size: 1em;
        background: #DF513D;
        border-right: solid 8px #EC7C59;
        letter-spacing: 4px;
        padding: 0 5px;
    }

    .poster .background .large-circles {
        z-index: 10;
        width: 1100px;
        height: 1100px;
        display: flex;
        justify-content: center;
        align-items: center;
        bottom: -220px;
    }

    .poster .background .large-circles .circle {
        width: 100%;
        height: 100%;
        background: rgba(231, 127, 93, 0.1);
        border-top-left-radius: 50%;
        border-top-right-radius: 50%;
    }

    .poster .background .large-circles .circle:nth-child(2) {
        width: 85%;
        height: 85%;
    }

    .poster .background .bottom-title {
        display: flex;
        justify-content: center;
    }

    .poster .background .bottom-title p {
        font-size: 1.1em;
        top: 12px;
        font-weight: bold;
        letter-spacing: 5px;
        padding: 0 10px;
        background: #1f171f;
        color: #E98864;
    }

    .poster .background .border {
        width: 95%;
        height: 96%;
        z-index: 10;
    }

    .poster .background .border:after {
        width: 100%;
        height: 85%;
        border-top: 5px solid #EA654A;
        background-image: linear-gradient(#EA654A, transparent), linear-gradient(#EA654A, transparent);
        background-size: 5px 100%;
        background-position: 0 0, 100% 0;
        background-repeat: no-repeat;
    }

    .poster .background .border:before {
        width: 100%;
        height: 4%;
        bottom: 0;
        border-bottom: 5px solid #EA654A;
        background-image: linear-gradient(transparent, #EA654A), linear-gradient(transparent, #EA654A);
        background-size: 5px 100%;
        background-position: 0 0, 100% 0;
        background-repeat: no-repeat;
    }

    .poster:after {
        content: "";
        height: 100%;
        width: 100%;
        z-index: 9999;
        background: url("http://api.thumbr.it/whitenoise-500x500.png?background=3e8a5e00&noise=545454&density=50&opacity=30");
    }

    .city-scene {
        width: 880px;
        height: 880px;
        display: flex;
        bottom: 80px;
        align-items: flex-end;
        overflow: hidden;
    }

    .building-center {
        width: 120px;
        height: 700px;
        background: #16102D;
        bottom: 0;
        display: flex;
        justify-content: center;
        position: relative;
    }

    .building-center .roof {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .building-center .roof .antenna {
        width: 4px;
        height: 60px;
        background: #EC8060;
        top: -105px;
    }

    .building-center .roof-layer--1 {
        width: 100%;
        height: 15px;
        background: #EC8060;
        top: -15px;
        border-top: solid 5px #512337;
    }

    .building-center .roof-layer--2 {
        width: 85%;
        height: 15px;
        background: #EC8060;
        top: -30px;
        border-top: solid 5px #512337;
    }

    .building-center .roof-layer--3 {
        width: 65%;
        height: 15px;
        background: #EC8060;
        top: -45px;
        border-top: solid 5px #512337;
    }

    .building-center .triangle {
        width: 0;
        height: 0;
    }

    .building-center .triangle--1 {
        border-left: 60px solid transparent;
        border-right: 60px solid transparent;
        border-top: 700px solid #EF8C63;
    }

    .building-center .triangle--1:after {
        width: 0;
        height: 0;
        top: -700px;
        right: -60px;
        border-right: 60px solid transparent;
        border-top: 700px solid #E55B3C;
    }

    .building-center .triangle--2 {
        border-left: 60px solid transparent;
        border-right: 60px solid transparent;
        border-top: 420px solid #E65E3F;
    }

    .building-center .triangle--2:after {
        width: 0;
        height: 0;
        top: -420px;
        right: -60px;
        border-right: 60px solid transparent;
        border-top: 420px solid #D82F2D;
    }

    .building-center .triangle--3 {
        border-left: 60px solid transparent;
        border-right: 60px solid transparent;
        border-top: 140px solid #53232F;
    }

    .building-center .triangle--3:after {
        width: 0;
        height: 0;
        top: -140px;
        right: -60px;
        border-right: 60px solid transparent;
        border-top: 140px solid #2B171E;
    }

    .building-container {
        position: relative;
        width: 150px;
        height: 480px;
        display: flex;
    }

    .building-left {
        width: 150px;
        height: 480px;
        right: 0;
    }

    .building-left .straps {
        width: 150px;
        height: 480px;
        clip-path: polygon(150px 0%, 125px 0%, 0% 100%, 100% 100%);
        z-index: 50;
    }

    .building-left .straps .strap--3 {
        width: 100%;
        height: 3px;
        background: rgba(14, 7, 28, 0.6);
        z-index: 99;
        margin: 15px 0;
        position: relative;
    }

    .building-left .straps .strap--4 {
        width: 100%;
        height: 4px;
        background: rgba(14, 7, 28, 0.6);
        z-index: 99;
        margin: 20px 0;
        position: relative;
    }

    .building-left .straps .strap--5 {
        width: 100%;
        height: 5px;
        background: rgba(14, 7, 28, 0.6);
        z-index: 99;
        margin: 25px 0;
        position: relative;
    }

    .building-left .straps .strap--6 {
        width: 100%;
        height: 6px;
        background: rgba(14, 7, 28, 0.6);
        z-index: 99;
        margin: 30px 0;
        position: relative;
    }

    .building-left .straps .strap--7 {
        width: 100%;
        height: 7px;
        background: rgba(14, 7, 28, 0.6);
        z-index: 99;
        margin: 35px 0;
        position: relative;
    }

    .building-left .straps .strap--8 {
        width: 100%;
        height: 8px;
        background: rgba(14, 7, 28, 0.6);
        z-index: 99;
        margin: 40px 0;
        position: relative;
    }

    .building-left .straps .strap--9 {
        width: 100%;
        height: 9px;
        background: rgba(14, 7, 28, 0.6);
        z-index: 99;
        margin: 45px 0;
        position: relative;
    }

    .building-left .straps .strap--10 {
        width: 100%;
        height: 10px;
        background: rgba(14, 7, 28, 0.6);
        z-index: 99;
        margin: 50px 0;
        position: relative;
    }

    .building-left .straps .strap--11 {
        width: 100%;
        height: 11px;
        background: rgba(14, 7, 28, 0.6);
        z-index: 99;
        margin: 55px 0;
        position: relative;
    }

    .building-left .straps .strap--12 {
        width: 100%;
        height: 12px;
        background: rgba(14, 7, 28, 0.6);
        z-index: 99;
        margin: 60px 0;
        position: relative;
    }

    .building-left:after {
        width: 25px;
        height: 480px;
        background: #DB3A2E;
        border-right: 12.5px solid #F0825F;
        right: 0;
    }

    .building-left .triangle-left-part--1 {
        border-left: 125px solid transparent;
        border-bottom: 480px solid #201E4C;
        right: 25px;
        bottom: 0;
    }

    .building-left .triangle-left-part--2 {
        border-left: 87.5px solid transparent;
        border-bottom: 336px solid #1C1531;
        right: 25px;
        bottom: 0;
    }

    .building-left .triangle-left-part--3 {
        border-left: 50px solid transparent;
        border-bottom: 192px solid #0E071C;
        right: 25px;
        bottom: 0;
    }

    .building-left:nth-child(1) {
        bottom: -80px;
        right: 80px;
        transform: scale(0.9);
    }

    .towers {
        position: relative;
        width: 80px;
        height: 360px;
        display: flex;
        align-items: flex-end;
    }

    .towers .tower {
        width: 25px;
        height: 100%;
        background: #EE8B65;
        border-right: solid 10px #EE8B65;
        clip-path: polygon(100% 0, 100% 100%, 0% 100%, 0 40px);
        box-shadow: inset -5px 0 0 #2F1830;
        position: relative;
    }

    .towers .tower:nth-child(1),
    .towers .tower:nth-child(2) {
        height: 70%;
        border-color: #E85D3C;
        background: #E85D3C;
    }

    .towers .tower:nth-child(even) {
        width: 8px;
        border: none;
        clip-path: none;
        background: #2F1830;
    }

    .towers .tower:nth-child(4) {
        height: 115%;
    }

    .low-buildings-left {
        width: 140px;
        height: 180px;
        position: relative;
        display: flex;
        align-items: flex-end;
        overflow: hidden;
    }

    .low-buildings-left .low-circle-buildings-left {
        z-index: 5;
        height: 180px;
        left: 20px;
        bottom: -125px;
    }

    .low-buildings-left .low-circle-buildings-left .circle-building {
        height: 180px;
        width: 90px;
        background: #2E274F;
        border-radius: 50%;
    }

    .low-buildings-left .low-circle-buildings-left .circle-building:before {
        width: 30%;
        left: 50%;
        height: 100%;
        background: #2E274F;
    }

    .low-buildings-left .low-circle-buildings-left .circle-building:after {
        left: 30%;
        height: 100%;
        width: 100%;
        border-radius: 50%;
        background: #1B122E;
    }

    .low-buildings-left .low-circle-buildings-left .circle-building .flat-part {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        z-index: 5;
        right: -50%;
        background: #EE836A;
    }

    .low-buildings-left .low-circle-buildings-left .circle-building:nth-child(2) {
        z-index: 10;
        left: 60px;
    }

    .low-buildings-left .low-triangle-buildings-left {
        width: 120px;
        height: 100%;
        display: flex;
        justify-content: flex-end;
        right: 0;
    }

    .low-buildings-left .low-triangle-buildings-left .triangle-building {
        width: 100px;
        height: 100%;
        background: #4A1F4C;
        clip-path: polygon(100% 0, 100% 100%, 0% 100%, 0 100%, 65% 40%, 80px 0);
    }

    .low-buildings-left .low-triangle-buildings-left .triangle-building:nth-child(2) {
        background: #1F1231;
        right: -20px;
    }

    .building-right {
        width: 5px;
        height: 500px;
        background: #ED8264;
        position: relative;
        display: flex;
        align-items: flex-end;
        margin-right: 24px;
    }

    .building-right:after {
        height: 60%;
        width: 20px;
        background: #211D34;
        left: 5px;
        border-right: 8px #ED8264 solid;
        border-left: 5px #ED8264 solid;
        box-shadow: 4px 0 0 0 #E35240;
    }

    .building-right:before {
        bottom: 60%;
        left: 5px;
        border-right: 20px solid transparent;
        border-bottom: 120px solid #ED8264;
    }

    .building-right .straps {
        width: 20px;
        height: 120px;
        bottom: 60%;
        left: 5px;
        clip-path: polygon(0 100%, 100% 100%, 0 0);
    }

    .building-right .straps .strap--0 {
        width: 100%;
        height: 0em;
        background: #211D34;
        margin: 0em 0;
        position: relative;
    }

    .building-right .straps .strap--1 {
        width: 100%;
        height: 0.025em;
        background: #211D34;
        margin: 0.1em 0;
        position: relative;
    }

    .building-right .straps .strap--2 {
        width: 100%;
        height: 0.05em;
        background: #211D34;
        margin: 0.2em 0;
        position: relative;
    }

    .building-right .straps .strap--3 {
        width: 100%;
        height: 0.075em;
        background: #211D34;
        margin: 0.3em 0;
        position: relative;
    }

    .building-right .straps .strap--4 {
        width: 100%;
        height: 0.1em;
        background: #211D34;
        margin: 0.4em 0;
        position: relative;
    }

    .building-right .straps .strap--5 {
        width: 100%;
        height: 0.125em;
        background: #211D34;
        margin: 0.5em 0;
        position: relative;
    }

    .building-right .straps .strap--6 {
        width: 100%;
        height: 0.15em;
        background: #211D34;
        margin: 0.6em 0;
        position: relative;
    }

    .building-right .straps .strap--7 {
        width: 100%;
        height: 0.175em;
        background: #211D34;
        margin: 0.7em 0;
        position: relative;
    }

    .building-right .straps .strap--8 {
        width: 100%;
        height: 0.2em;
        background: #211D34;
        margin: 0.8em 0;
        position: relative;
    }

    .building-right .straps .strap--9 {
        width: 100%;
        height: 0.225em;
        background: #211D34;
        margin: 0.9em 0;
        position: relative;
    }

    .building-right .straps .strap--10 {
        width: 100%;
        height: 0.25em;
        background: #211D34;
        margin: 1em 0;
        position: relative;
    }

    .high-buildings {
        position: relative;
        width: 150px;
        height: 700px;
        display: flex;
        align-items: flex-end;
        z-index: 10;
    }

    .high-buildings .high-building {
        width: 90px;
        height: 100%;
        background: #ED8E67;
        border-right: solid 20px #1F112B;
        z-index: 20;
    }

    .high-buildings .high-building:after {
        width: 30%;
        height: 100%;
        background: #DB3C33;
        right: 0;
    }

    .high-buildings .high-building .hover-straps {
        width: 100%;
        height: 100%;
        z-index: 5;
        border-style: solid;
        border-color: #4C214C;
        border-width: 8px 5px 8px 10px;
    }

    .high-buildings .high-building .hover-straps .strap {
        width: 100%;
        height: 1.5%;
        background: #4C214C;
        margin: 18% 0;
        position: relative;
    }

    .high-buildings .high-building:nth-child(2) {
        width: 25%;
        height: 90%;
        left: 80px;
        border-right: 0;
        background: #23142E;
        z-index: 10;
        box-shadow: 10px 0 0 0 rgba(31, 17, 43, 0.5);
    }

    .high-buildings .high-building:nth-child(2):after {
        content: none;
    }

    .high-buildings .high-building:nth-child(2) .hover-straps {
        border-width: 5px;
    }

    .high-buildings .high-building:nth-child(3) {
        width: 25%;
        height: 70%;
        left: 110px;
        border-right: 0;
        background: #23142E;
        z-index: 5;
    }

    .high-buildings .high-building:nth-child(3):after {
        content: none;
    }

    .high-buildings .high-building:nth-child(3) .hover-straps {
        border-width: 5px;
    }

    .circle-buildings-right {
        width: 80px;
        height: 600px;
        position: relative;
        bottom: -40%;
        z-index: 5;
    }

    .circle-buildings-right .circle-building {
        width: 100%;
        height: 100%;
        left: -15px;
        border-radius: 50%;
        box-shadow: inset 15px 0 0 0 #28204A, inset -15px 0 0 0 #28204A;
    }

    .circle-buildings-right .circle-building:before {
        background: #0D061C;
        border-radius: 50%;
        width: 100%;
        height: 100%;
        box-shadow: inset 30px 0 0 0 #1F1731, inset -30px 0 0 0 #1F1731;
        z-index: -1;
    }

    .circle-buildings-right .circle-building:nth-child(2) {
        width: 70%;
        height: 70%;
        left: 75px;
        bottom: 120px;
        z-index: -3;
    }

    .circle-buildings-right .circle-building:nth-child(2):before {
        background: #512439;
        box-shadow: inset 15px 0 0 0 #EF8363, inset -15px 0 0 0 #EF8363;
    }

    .circle-buildings-right .circle-building .circle-building-inner-half {
        width: 100%;
        height: 100%;
        clip-path: ellipse(50% 50% at 0 50%);
        background: #4E212D;
        border-radius: 50%;
        border-top-left-radius: 0;
        left: 100%;
        z-index: -2;
    }

    .circle-buildings-right .circle-building .circle-building-inner-square {
        width: 50%;
        height: 100%;
        background: #4E212D;
        left: 50%;
        z-index: -2;
    }

    .circle-buildings-right .circle-building .straps--0 {
        width: 100%;
        height: 0px;
        background: rgba(235, 90, 66, 0.5);
        right: -0;
        margin: 10px 0;
        position: relative;
    }

    .circle-buildings-right .circle-building .straps--1 {
        width: 100%;
        height: 0.5px;
        background: rgba(235, 90, 66, 0.5);
        right: -0;
        margin: 10px 0;
        position: relative;
    }

    .circle-buildings-right .circle-building .straps--2 {
        width: 100%;
        height: 1px;
        background: rgba(235, 90, 66, 0.5);
        right: -0;
        margin: 10px 0;
        position: relative;
    }

    .circle-buildings-right .circle-building .straps--3 {
        width: 100%;
        height: 1.5px;
        background: rgba(235, 90, 66, 0.5);
        right: -0;
        margin: 10px 0;
        position: relative;
    }

    .circle-buildings-right .circle-building .straps--4 {
        width: 100%;
        height: 2px;
        background: rgba(235, 90, 66, 0.5);
        right: -0;
        margin: 10px 0;
        position: relative;
    }

    .circle-buildings-right .circle-building .straps--5 {
        width: 100%;
        height: 2.5px;
        background: rgba(235, 90, 66, 0.5);
        right: -0;
        margin: 10px 0;
        position: relative;
    }

    .circle-buildings-right .circle-building .straps--6 {
        width: 100%;
        height: 3px;
        background: rgba(235, 90, 66, 0.5);
        right: -0;
        margin: 10px 0;
        position: relative;
    }

    .circle-buildings-right .circle-building .straps--7 {
        width: 100%;
        height: 3.5px;
        background: rgba(235, 90, 66, 0.5);
        right: -0;
        margin: 10px 0;
        position: relative;
    }

    .circle-buildings-right .circle-building .straps--8 {
        width: 100%;
        height: 4px;
        background: rgba(235, 90, 66, 0.5);
        right: -0;
        margin: 10px 0;
        position: relative;
    }

    .circle-buildings-right .circle-building .straps--9 {
        width: 100%;
        height: 4.5px;
        background: rgba(235, 90, 66, 0.5);
        right: -0;
        margin: 10px 0;
        position: relative;
    }

    .circle-buildings-right .circle-building .straps--10 {
        width: 100%;
        height: 5px;
        background: rgba(235, 90, 66, 0.5);
        right: -0;
        margin: 10px 0;
        position: relative;
    }

    .circle-buildings-right .circle-building .straps--11 {
        width: 100%;
        height: 5.5px;
        background: rgba(235, 90, 66, 0.5);
        right: -0;
        margin: 10px 0;
        position: relative;
    }

    .circle-buildings-right .circle-building .straps--12 {
        width: 100%;
        height: 6px;
        background: rgba(235, 90, 66, 0.5);
        right: -0;
        margin: 10px 0;
        position: relative;
    }

    .circle-buildings-right .circle-building .straps--13 {
        width: 100%;
        height: 6.5px;
        background: rgba(235, 90, 66, 0.5);
        right: -0;
        margin: 10px 0;
        position: relative;
    }

    .circle-buildings-right .circle-building .straps--14 {
        width: 100%;
        height: 7px;
        background: rgba(235, 90, 66, 0.5);
        right: -0;
        margin: 10px 0;
        position: relative;
    }

    .circle-buildings-right .circle-building .straps--15 {
        width: 100%;
        height: 7.5px;
        background: rgba(235, 90, 66, 0.5);
        right: -0;
        margin: 10px 0;
        position: relative;
    }

    .circle-buildings-right .circle-building .straps--16 {
        width: 100%;
        height: 8px;
        background: rgba(235, 90, 66, 0.5);
        right: -0;
        margin: 10px 0;
        position: relative;
    }

    .circle-buildings-right .circle-building .straps--17 {
        width: 100%;
        height: 8.5px;
        background: rgba(235, 90, 66, 0.5);
        right: -0;
        margin: 10px 0;
        position: relative;
    }

    .circle-buildings-right .circle-building .straps--18 {
        width: 100%;
        height: 9px;
        background: rgba(235, 90, 66, 0.5);
        right: -0;
        margin: 10px 0;
        position: relative;
    }

    .circle-buildings-right .circle-building .straps--19 {
        width: 100%;
        height: 9.5px;
        background: rgba(235, 90, 66, 0.5);
        right: -0;
        margin: 10px 0;
        position: relative;
    }

    .circle-buildings-right .circle-building .straps--20 {
        width: 100%;
        height: 10px;
        background: rgba(235, 90, 66, 0.5);
        right: -0;
        margin: 10px 0;
        position: relative;
    }

    /* ANIMATIONS */
    @keyframes Plane {
        0% {
            bottom: -100px;
        }

        50% {
            bottom: 600px;
        }

        100% {
            bottom: 2000px;
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
</style>
<div class="container">
    <div class="poster">
        <div class="background">
            <div class="top-title">
                <p>WILLIAM H.ROBERTS</p>
                <div class="straps">
                    <div class="strap--0"></div>
                    <div class="strap--1"></div>
                    <div class="strap--2"></div>
                    <div class="strap--3"></div>
                    <div class="strap--4"></div>
                    <div class="strap--5"></div>
                    <div class="strap--6"></div>
                </div>
                <h1>FUTURECITY</h1>
                <div class="bottom-top-title">
                    <h3>VOL 1</h3>
                    <h2>A NOVEL FROM THE 22ND CENTURY</h2>
                    <h3>NO 7</h3>
                </div>
            </div>
            <div class="top-scene">
                <div class="planet"></div>
                <div class="planet"></div>
            </div>
            <div class="middle-scene">
                <div class="planet"></div>
            </div>
            <div class="large-circles">
                <div class="circle"></div>
                <div class="circle"></div>
            </div>
            <div class="bottom-scene">
                <div class="strap"></div>
                <div class="strap"></div>
                <div class="strap"></div>
            </div>
            <div class="bottom-title">
                <p>DUNE PUBLISHING HOUSE</p>
            </div>
            <div class="border"></div>
            <div class="planes">
                <div class="plane">
                    <div class="beam"></div>
                </div>
                <div class="plane">
                    <div class="beam"></div>
                </div>
                <div class="plane">
                    <div class="beam"></div>
                </div>
                <div class="plane">
                    <div class="beam"></div>
                </div>
            </div>
            <div class="stars">
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
            </div>
        </div>
        <div class="city-scene">
            <div class="low-buildings-left">
                <div class="low-circle-buildings-left">
                    <div class="circle-building">
                        <div class="flat-part"></div>
                    </div>
                    <div class="circle-building">
                        <div class="flat-part"></div>
                    </div>
                </div>
                <div class="low-triangle-buildings-left">
                    <div class="triangle-building"></div>
                    <div class="triangle-building"></div>
                </div>
            </div>
            <div class="towers">
                <div class="tower"></div>
                <div class="tower"></div>
                <div class="tower"></div>
                <div class="tower"></div>
            </div>
            <div class="building-container">
                <div class="building-left">
                    <div class="straps">
                        <div class="strap--3"></div>
                        <div class="strap--4"></div>
                        <div class="strap--5"></div>
                        <div class="strap--6"></div>
                        <div class="strap--7"></div>
                        <div class="strap--8"></div>
                        <div class="strap--9"></div>
                        <div class="strap--10"></div>
                        <div class="strap--11"></div>
                        <div class="strap--12"></div>
                    </div>
                    <div class="triangle-left-part--1"></div>
                    <div class="triangle-left-part--2"></div>
                    <div class="triangle-left-part--3"></div>
                </div>
                <div class="building-left">
                    <div class="straps">
                        <div class="strap--3"></div>
                        <div class="strap--4"></div>
                        <div class="strap--5"></div>
                        <div class="strap--6"></div>
                        <div class="strap--7"></div>
                        <div class="strap--8"></div>
                        <div class="strap--9"></div>
                        <div class="strap--10"></div>
                        <div class="strap--11"></div>
                        <div class="strap--12"></div>
                    </div>
                    <div class="triangle-left-part--1"></div>
                    <div class="triangle-left-part--2"></div>
                    <div class="triangle-left-part--3"></div>
                </div>
            </div>
            <div class="building-center">
                <div class="roof">
                    <div class="antenna"></div>
                    <div class="roof-layer--1"></div>
                    <div class="roof-layer--2"></div>
                    <div class="roof-layer--3"></div>
                </div>
                <div class="triangle--1"></div>
                <div class="triangle--2"></div>
                <div class="triangle--3"></div>
            </div>
            <div class="building-right">
                <div class="straps">
                    <div class="strap--1"></div>
                    <div class="strap--2"></div>
                    <div class="strap--3"></div>
                    <div class="strap--4"></div>
                    <div class="strap--5"></div>
                    <div class="strap--6"></div>
                    <div class="strap--7"></div>
                    <div class="strap--8"></div>
                    <div class="strap--9"></div>
                    <div class="strap--10"></div>
                </div>
            </div>
            <div class="high-buildings">
                <div class="high-building">
                    <div class="hover-straps">
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                    </div>
                </div>
                <div class="high-building">
                    <div class="hover-straps">
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                    </div>
                </div>
                <div class="high-building">
                    <div class="hover-straps">
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                        <div class="strap"></div>
                    </div>
                </div>
            </div>
            <div class="circle-buildings-right">
                <div class="circle-building">
                    <div class="circle-building-inner-half">
                        <div class="straps--1"></div>
                        <div class="straps--2"></div>
                        <div class="straps--3"></div>
                        <div class="straps--4"></div>
                        <div class="straps--5"></div>
                        <div class="straps--6"></div>
                        <div class="straps--7"></div>
                        <div class="straps--8"></div>
                        <div class="straps--9"></div>
                        <div class="straps--10"></div>
                        <div class="straps--11"></div>
                        <div class="straps--12"></div>
                        <div class="straps--13"></div>
                        <div class="straps--14"></div>
                        <div class="straps--15"></div>
                        <div class="straps--16"></div>
                        <div class="straps--17"></div>
                        <div class="straps--18"></div>
                        <div class="straps--19"></div>
                        <div class="straps--20"></div>
                    </div>
                    <div class="circle-building-inner-square">
                        <div class="straps--1"></div>
                        <div class="straps--2"></div>
                        <div class="straps--3"></div>
                        <div class="straps--4"></div>
                        <div class="straps--5"></div>
                        <div class="straps--6"></div>
                        <div class="straps--7"></div>
                        <div class="straps--8"></div>
                        <div class="straps--9"></div>
                        <div class="straps--10"></div>
                        <div class="straps--11"></div>
                        <div class="straps--12"></div>
                        <div class="straps--13"></div>
                        <div class="straps--14"></div>
                        <div class="straps--15"></div>
                        <div class="straps--16"></div>
                        <div class="straps--17"></div>
                        <div class="straps--18"></div>
                        <div class="straps--19"></div>
                        <div class="straps--20"></div>
                    </div>
                </div>
                <div class="circle-building">
                    <div class="circle-building-inner-half">
                        <div class="straps--1"></div>
                        <div class="straps--2"></div>
                        <div class="straps--3"></div>
                        <div class="straps--4"></div>
                        <div class="straps--5"></div>
                        <div class="straps--6"></div>
                        <div class="straps--7"></div>
                        <div class="straps--8"></div>
                        <div class="straps--9"></div>
                        <div class="straps--10"></div>
                        <div class="straps--11"></div>
                        <div class="straps--12"></div>
                        <div class="straps--13"></div>
                        <div class="straps--14"></div>
                        <div class="straps--15"></div>
                        <div class="straps--16"></div>
                        <div class="straps--17"></div>
                        <div class="straps--18"></div>
                        <div class="straps--19"></div>
                        <div class="straps--20"></div>
                    </div>
                    <div class="circle-building-inner-square">
                        <div class="straps--1"></div>
                        <div class="straps--2"></div>
                        <div class="straps--3"></div>
                        <div class="straps--4"></div>
                        <div class="straps--5"></div>
                        <div class="straps--6"></div>
                        <div class="straps--7"></div>
                        <div class="straps--8"></div>
                        <div class="straps--9"></div>
                        <div class="straps--10"></div>
                        <div class="straps--11"></div>
                        <div class="straps--12"></div>
                        <div class="straps--13"></div>
                        <div class="straps--14"></div>
                        <div class="straps--15"></div>
                        <div class="straps--16"></div>
                        <div class="straps--17"></div>
                        <div class="straps--18"></div>
                        <div class="straps--19"></div>
                        <div class="straps--20"></div>
                    </div>
                </div>
                <div class="circle-building">
                    <div class="circle-building-inner-half">
                        <div class="straps--1"></div>
                        <div class="straps--2"></div>
                        <div class="straps--3"></div>
                        <div class="straps--4"></div>
                        <div class="straps--5"></div>
                        <div class="straps--6"></div>
                        <div class="straps--7"></div>
                        <div class="straps--8"></div>
                        <div class="straps--9"></div>
                        <div class="straps--10"></div>
                        <div class="straps--11"></div>
                        <div class="straps--12"></div>
                        <div class="straps--13"></div>
                        <div class="straps--14"></div>
                        <div class="straps--15"></div>
                        <div class="straps--16"></div>
                        <div class="straps--17"></div>
                        <div class="straps--18"></div>
                        <div class="straps--19"></div>
                        <div class="straps--20"></div>
                    </div>
                    <div class="circle-building-inner-square">
                        <div class="straps--1"></div>
                        <div class="straps--2"></div>
                        <div class="straps--3"></div>
                        <div class="straps--4"></div>
                        <div class="straps--5"></div>
                        <div class="straps--6"></div>
                        <div class="straps--7"></div>
                        <div class="straps--8"></div>
                        <div class="straps--9"></div>
                        <div class="straps--10"></div>
                        <div class="straps--11"></div>
                        <div class="straps--12"></div>
                        <div class="straps--13"></div>
                        <div class="straps--14"></div>
                        <div class="straps--15"></div>
                        <div class="straps--16"></div>
                        <div class="straps--17"></div>
                        <div class="straps--18"></div>
                        <div class="straps--19"></div>
                        <div class="straps--20"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`;