var React = require('react');
var ReactDOM = require('react-dom');
var Player = require('./components/Player.js');
//enemies
var Goomba = require('./components/Goomba.js');
var HammerBro = require('./components/HammerBro.js');
var ChainChomp = require('./components/ChainChomp.js');


var MapBoundary = require('./components/MapBoundary.js');
var MapCenter = require('./components/MapCenter.js');
var Bowser = require('./components/Bowser.js');
//weapons
var Mushroom = require('./components/Mushroom.js');
var GreenShell = require('./components/GreenShell.js');
var RedShell = require('./components/RedShell.js');
var Fireball = require('./components/Fireball.js');
var Hammer = require('./components/Hammer.js');

var userHealth = 100;
var userXP = 0;
var weapon = "Nothing";
var arrowDirection = "";
var playerIndex = 220;
var currentEnemyHealth = "Not Available";


/*-------Make the Center and Playing area--------*/
var center = [];
for (var i=0; i<7840; i++) {

    switch (true) {
        case (i >= 76) && (i <= 88):
            center.push(i);
            break;
        case (i >= 91) && (i <= 99):
            center.push(i);
            break;
        case (i >= 124) && (i <= 133):
            center.push(i);
            break;
        //Add 70 for two more rows
        case (i >= 146) && (i <= 158):
            center.push(i);
            break;
        case (i >= 161) && (i <= 169):
            center.push(i);
            break;
        case (i >= 194) && (i <= 203):
            center.push(i);
            break;
        case (i >= 216) && (i <= 228):
            center.push(i);
            break;
        case (i >= 231) && (i <= 239):
            center.push(i);
            break;
        case (i >= 264) && (i <= 273):
            center.push(i);
            break;
        //New Formation
        case (i >= 288) && (i <= 292):
            center.push(i);
            break;
        case (i >= 295) && (i <= 303):
            center.push(i);
            break;
        case (i >= 307) && (i <= 309):
            center.push(i);
            break;
        case (i >= 315) && (i <= 328):
            center.push(i);
            break;
        case (i >= 334) && (i <= 337):
            center.push(i);
            break;
        case (i >= 340) && (i <= 343):
            center.push(i);
            break;
        //Repeat and add 70 for two more Rows
        case (i >= 358) && (i <= 362):
            center.push(i);
            break;
        case (i >= 365) && (i <= 373):
            center.push(i);
            break;
        case (i >= 377) && (i <= 379):
            center.push(i);
            break;
        case (i >= 385) && (i <= 398):
            center.push(i);
            break;
        case (i >= 404) && (i <= 407):
            center.push(i);
            break;
        case (i >= 410) && (i <= 413):
            center.push(i);
            break;
        case (i >= 428) && (i <= 432):
            center.push(i);
            break;
        case (i >= 435) && (i <= 443):
            center.push(i);
            break;
        case (i >= 447) && (i <= 449):
            center.push(i);
            break;
        case (i >= 455) && (i <= 468):
            center.push(i);
            break;
        case (i >= 474) && (i <= 477):
            center.push(i);
            break;
        case (i >= 480) && (i <= 483):
            center.push(i);
            break;
        case (i >= 498) && (i <= 500):
            center.push(i);
            break;
        case (i >= 509) && (i <= 511):
            center.push(i);
            break;
        case (i >= 517) && (i <= 547):
            center.push(i);
            break;
        case (i >= 550) && (i <= 558):
            center.push(i);
            break;
        ///two more rows identical
        case (i >= 568) && (i <= 570):
            center.push(i);
            break;
        case (i >= 579) && (i <= 581):
            center.push(i);
            break;
        case (i >= 587) && (i <= 617):
            center.push(i);
            break;
        case (i >= 620) && (i <= 628):
            center.push(i);
            break;
        case (i >= 638) && (i <= 640):
            center.push(i);
            break;
        case (i >= 649) && (i <= 651):
            center.push(i);
            break;
        case (i >= 657) && (i <= 687):
            center.push(i);
            break;
        case (i >= 690) && (i <= 698):
            center.push(i);
            break;
        case (i >= 704) && (i <= 712):
            center.push(i);
            break;
        case (i >= 715) && (i <= 723):
            center.push(i);
            break;
        case (i >= 729) && (i <= 736):
            center.push(i);
            break;
        case (i >= 750) && (i <= 755):
            center.push(i);
            break;
        case (i >= 760) && (i <= 768):
            center.push(i);
            break;
        case (i >= 774) && (i <= 782):
            center.push(i);
            break;
        case (i >= 785) && (i <= 793):
            center.push(i);
            break;
        case (i >= 799) && (i <= 806):
            center.push(i);
            break;
        case (i >= 820) && (i <= 825):
            center.push(i);
            break;
        case (i >= 830) && (i <= 838):
            center.push(i);
            break;
        //chambers on left
        case (i >= 844) && (i <= 852):
            center.push(i);
            break;
        case (i >= 855) && (i <= 863):
            center.push(i);
            break;
        case (i >= 914) && (i <= 922):
            center.push(i);
            break;
        case (i >= 925) && (i <= 933):
            center.push(i);
            break;
        case (i >= 984) && (i <= 992):
            center.push(i);
            break;
        case (i >= 995) && (i <= 1003):
            center.push(i);
            break;
        case (i >= 1054) && (i <= 1062):
            center.push(i);
            break;
        case (i >= 1065) && (i <= 1073):
            center.push(i);
            break;
        case (i >= 1124) && (i <= 1132):
            center.push(i);
            break;
        case (i >= 1135) && (i <= 1143):
            center.push(i);
            break;
        case (i >= 1194) && (i <= 1202):
            center.push(i);
            break;
        case (i >= 1205) && (i <= 1213):
            center.push(i);
            break;
        case (i >= 1267) && (i <= 1269):
            center.push(i);
            break;
        case (i >= 1278) && (i <= 1280):
            center.push(i);
            break;
        case (i >= 1337) && (i <= 1339):
            center.push(i);
            break;
        case (i >= 1348) && (i <= 1350):
            center.push(i);
            break;
        case (i >= 1404) && (i <= 1412):
            center.push(i);
            break;
        case (i >= 1415) && (i <= 1423):
            center.push(i);
            break;
        case (i >= 1474) && (i <= 1482):
            center.push(i);
            break;
        case (i >= 1485) && (i <= 1493):
            center.push(i);
            break;
        case (i >= 1544) && (i <= 1552):
            center.push(i);
            break;
        case (i >= 1555) && (i <= 1563):
            center.push(i);
            break;
        case (i >= 1614) && (i <= 1622):
            center.push(i);
            break;
        case (i >= 1625) && (i <= 1633):
            center.push(i);
            break;
        case (i >= 1684) && (i <= 1692):
            center.push(i);
            break;
        case (i >= 1695) && (i <= 1703):
            center.push(i);
            break;
        case (i >= 1754) && (i <= 1762):
            center.push(i);
            break;
        case (i >= 1765) && (i <= 1773):
            center.push(i);
            break;
        case (i >= 1824) && (i <= 1832):
            center.push(i);
            break;
        case (i >= 1835) && (i <= 1843):
            center.push(i);
            break;
        case (i >= 1894) && (i <= 1902):
            center.push(i);
            break;
        case (i >= 1905) && (i <= 1913):
            center.push(
                i
            );
            break;
        //chamber on the right
        case (i >= 900) && (i <= 908):
            center.push(i);
            break;
        case (i >= 970) && (i <= 978):
            center.push(i);
            break;
        case (i >= 1040) && (i <= 1048):
            center.push(i);
            break;
        case (i >= 1110) && (i <= 1118):
            center.push(i);
            break;
        case (i >= 1180) && (i <= 1188):
            center.push(i);
            break;
        case (i >= 1250) && (i <= 1258):
            center.push(i);
            break;
        case (i >= 1320) && (i <= 1328):
            center.push(i);
            break;
        case (i >= 1390) && (i <= 1398):
            center.push(i);
            break;
        case (i >= 1460) && (i <= 1468):
            center.push(i);
            break;
        case (i >= 1530) && (i <= 1538):
            center.push(i);
            break;
        case (i >= 1600) && (i <= 1608):
            center.push(i);
            break;
        case (i >= 1670) && (i <= 1678):
            center.push(i);
            break;
        case (i >= 1740) && (i <= 1748):
            center.push(i);
            break;
        case (i >= 1810) && (i <= 1818):
            center.push(i);
            break;
        case (i >= 1880) && (i <= 1888):
            center.push(i);
            break;
        case (i >= 1950) && (i <= 1958):
            center.push(i);
            break;
        //center
        case (i >= 867) && (i <= 874):
            center.push(i);
            break;
        case (i >= 879) && (i <= 887):
            center.push(i);
            break;
        case (i >= 892) && (i <= 897):
            center.push(i);
            break;
        case (i >= 937) && (i <= 944):
            center.push(i);
            break;
        case (i >= 949) && (i <= 957):
            center.push(i);
            break;
        case (i >= 962) && (i <= 967):
            center.push(i);
            break;
        case (i >= 1007) && (i <= 1014):
            center.push(i);
            break;
        case (i >= 1019) && (i <= 1027):
            center.push(i);
            break;
        case (i >= 1032) && (i <= 1037):
            center.push(i);
            break;
        case (i >= 1077) && (i <= 1084):
            center.push(i);
            break;
        case (i >= 1087) && (i <= 1099):
            center.push(i);
            break;
        case (i >= 1102) && (i <= 1107):
            center.push(i);
            break;
        case (i >= 1147) && (i <= 1154):
            center.push(i);
            break;
        case (i >= 1157) && (i <= 1169):
            center.push(i);
            break;
        case (i >= 1172) && (i <= 1177):
            center.push(i);
            break;
        case (i >= 1217) && (i <= 1224):
            center.push(i);
            break;
        case (i >= 1227) && (i <= 1239):
            center.push(i);
            break;
        case (i >= 1242) && (i <= 1247):
            center.push(i);
            break;
        case (i >= 1287) && (i <= 1317):
            center.push(i);
            break;
        case (i >= 1357) && (i <= 1387):
            center.push(i);
            break;
        case (i >= 1427) && (i <= 1434):
            center.push(i);
            break;
        case (i >= 1437) && (i <= 1449):
            center.push(i);
            break;
        case (i >= 1452) && (i <= 1457):
            center.push(i);
            break;
        case (i >= 1497) && (i <= 1504):
            center.push(i);
            break;
        case (i >= 1507) && (i <= 1519):
            center.push(i);
            break;
        case (i >= 1522) && (i <= 1527):
            center.push(i);
            break;
        case (i >= 1567) && (i <= 1574):
            center.push(i);
            break;
        case (i >= 1577) && (i <= 1589):
            center.push(i);
            break;
        case (i >= 1592) && (i <= 1597):
            center.push(i);
            break;
        case (i >= 1637) && (i <= 1644):
            center.push(i);
            break;
        case (i >= 1649) && (i <= 1657):
            center.push(i);
            break;
        case (i >= 1662) && (i <= 1667):
            center.push(i);
            break;
        case (i >= 1707) && (i <= 1714):
            center.push(i);
            break;
        case (i >= 1719) && (i <= 1727):
            center.push(i);
            break;
        case (i >= 1732) && (i <= 1737):
            center.push(i);
            break;
        case (i >= 1779) && (i <= 1787):
            center.push(i);
            break;
        case (i >= 1799) && (i <= 1805):
            center.push(i);
            break;
        case (i >= 1849) && (i <= 1857):
            center.push(i);
            break;
        case (i >= 1869) && (i <= 1875):
            center.push(i);
            break;
        case (i >= 1919) && (i <= 1927):
            center.push(i);
            break;
        case (i >= 1939) && (i <= 1945):
            center.push(i);
            break;
        //next stage
        case (i >= 1970) && (i <= 1977):
            center.push(i);
            break;
        case (i >= 1987) && (i <= 2017):
            center.push(i);
            break;
        case (i >= 2023) && (i <= 2025):
            center.push(i);
            break;
        case (i >= 2040) && (i <= 2047):
            center.push(i);
            break;
        case (i >= 2057) && (i <= 2087):
            center.push(i);
            break;
        case (i >= 2093) && (i <= 2095):
            center.push(i);
            break;
        case (i >= 2110) && (i <= 2117):
            center.push(i);
            break;
        case (i >= 2127) && (i <= 2157):
            center.push(i);
            break;
        case (i >= 2163) && (i <= 2165):
            center.push(i);
            break;
        case (i >= 2182) && (i <= 2185):
            center.push(i);
            break;
        case (i >= 2190) && (i <= 2198):
            center.push(i);
            break;
        case (i >= 2204) && (i <= 2219):
            center.push(i);
            break;
        case (i >= 2225) && (i <= 2230):
            center.push(i);
            break;
        case (i >= 2233) && (i <= 2235):
            center.push(i);
            break;
        case (i >= 2252) && (i <= 2255):
            center.push(i);
            break;
        case (i >= 2260) && (i <= 2268):
            center.push(i);
            break;
        case (i >= 2274) && (i <= 2289):
            center.push(i);
            break;
        case (i >= 2295) && (i <= 2300):
            center.push(i);
            break;
        case (i >= 2303) && (i <= 2305):
            center.push(i);
            break;
        case (i >= 2322) && (i <= 2325):
            center.push(i);
            break;
        case (i >= 2330) && (i <= 2338):
            center.push(i);
            break;
        case (i >= 2344) && (i <= 2359):
            center.push(i);
            break;
        case (i >= 2365) && (i <= 2370):
            center.push(i);
            break;
        case (i >= 2373) && (i <= 2375):
            center.push(i);
            break;
        //next break
        case (i >= 2384) && (i <= 2397):
            center.push(i);
            break;
        case (i >= 2400) && (i <= 2403):
            center.push(i);
            break;
        case (i >= 2438) && (i <= 2445):
            center.push(i);
            break;
        case (i >= 2454) && (i <= 2467):
            center.push(i);
            break;
        case (i >= 2470) && (i <= 2473):
            center.push(i);
            break;
        case (i >= 2508) && (i <= 2515):
            center.push(i);
            break;
        //next break
        case (i >= 2524) && (i <= 2537):
            center.push(i);
            break;
        case (i >= 2540) && (i <= 2548):
            center.push(i);
            break;
        case (i >= 2551) && (i <= 2559):
            center.push(i);
            break;
        case (i >= 2562) && (i <= 2575):
            center.push(i);
            break;
        case (i >= 2578) && (i <= 2583):
            center.push(i);
            break;
        case (i >= 2594) && (i <= 2607):
            center.push(i);
            break;
        case (i >= 2610) && (i <= 2618):
            center.push(i);
            break;
        case (i >= 2621) && (i <= 2629):
            center.push(i);
            break;
        case (i >= 2632) && (i <= 2645):
            center.push(i);
            break;
        case (i >= 2648) && (i <= 2653):
            center.push(i);
            break;
        case (i >= 2664) && (i <= 2677):
            center.push(i);
            break;
        case (i >= 2680) && (i <= 2688):
            center.push(i);
            break;
        case (i >= 2691) && (i <= 2699):
            center.push(i);
            break;
        case (i >= 2702) && (i <= 2715):
            center.push(i);
            break;
        case (i >= 2718) && (i <= 2723):
            center.push(i);
            break;
        //next break for 2 rows
        case (i >= 2737) && (i <= 2739):
            center.push(i);
            break;
        case (i >= 2750) && (i <= 2758):
            center.push(i);
            break;
        case (i >= 2761) && (i <= 2769):
            center.push(i);
            break;
        case (i >= 2772) && (i <= 2785):
            center.push(i);
            break;
        case (i >= 2788) && (i <= 2790):
            center.push(i);
            break;
        case (i >= 2807) && (i <= 2809):
            center.push(i);
            break;
        case (i >= 2820) && (i <= 2828):
            center.push(i);
            break;
        case (i >= 2831) && (i <= 2839):
            center.push(i);
            break;
        case (i >= 2842) && (i <= 2855):
            center.push(i);
            break;
        case (i >= 2858) && (i <= 2860):
            center.push(i);
            break;
        //next break for 3 rows
        case (i >= 2872) && (i <= 2887):
            center.push(i);
            break;
        case (i >= 2890) && (i <= 2898):
            center.push(i);
            break;
        case (i >= 2901) && (i <= 2909):
            center.push(i);
            break;
        case (i >= 2912) && (i <= 2925):
            center.push(i);
            break;
        case (i >= 2928) && (i <= 2933):
            center.push(i);
            break;
        case (i >= 2942) && (i <= 2957):
            center.push(i);
            break;
        case (i >= 2960) && (i <= 2968):
            center.push(i);
            break;
        case (i >= 2971) && (i <= 2979):
            center.push(i);
            break;
        case (i >= 2982) && (i <= 2995):
            center.push(i);
            break;
        case (i >= 2998) && (i <= 3003):
            center.push(i);
            break;
        case (i >= 3012) && (i <= 3027):
            center.push(i);
            break;
        case (i >= 3030) && (i <= 3038):
            center.push(i);
            break;
        case (i >= 3041) && (i <= 3049):
            center.push(i);
            break;
        case (i >= 3052) && (i <= 3065):
            center.push(i);
            break;
        case (i >= 3068) && (i <= 3073):
            center.push(i);
            break;
        //next break for 3 more rows
        case (i >= 3082) && (i <= 3097):
            center.push(i);
            break;
        case (i >= 3100) && (i <= 3102):
            center.push(i);
            break;
        case (i >= 3106) && (i <= 3119):
            center.push(i);
            break;
        case (i >= 3122) && (i <= 3135):
            center.push(i);
            break;
        case (i >= 3141) && (i <= 3148):
            center.push(i);
            break;
        case (i >= 3152) && (i <= 3167):
            center.push(i);
            break;
        case (i >= 3170) && (i <= 3172):
            center.push(i);
            break;
        case (i >= 3176) && (i <= 3189):
            center.push(i);
            break;
        case (i >= 3192) && (i <= 3205):
            center.push(i);
            break;
        case (i >= 3211) && (i <= 3218):
            center.push(i);
            break;
        case (i >= 3222) && (i <= 3237):
            center.push(i);
            break;
        case (i >= 3240) && (i <= 3242):
            center.push(i);
            break;
        case (i >= 3246) && (i <= 3259):
            center.push(i);
            break;
        case (i >= 3262) && (i <= 3275):
            center.push(i);
            break;
        case (i >= 3281) && (i <= 3288):
            center.push(i);
            break;
        //next break for 2 rows
        case (i >= 3292) && (i <= 3307):
            center.push(i);
            break;
        case (i >= 3310) && (i <= 3312):
            center.push(i);
            break;
        case (i >= 3319) && (i <= 3329):
            center.push(i);
            break;
        case (i >= 3334) && (i <= 3336):
            center.push(i);
            break;
        case (i >= 3348) && (i <= 3353):
            center.push(i);
            break;
        case (i >= 3355) && (i <= 3358):
            center.push(i);
            break;
        case (i >= 3362) && (i <= 3377):
            center.push(i);
            break;
        case (i >= 3380) && (i <= 3382):
            center.push(i);
            break;
        case (i >= 3389) && (i <= 3399):
            center.push(i);
            break;
        case (i >= 3404) && (i <= 3406):
            center.push(i);
            break;
        case (i >= 3418) && (i <= 3423):
            center.push(i);
            break;
        case (i >= 3425) && (i <= 3428):
            center.push(i);
            break;
        //next break for three rows
        case (i >= 3432) && (i <= 3447):
            center.push(i);
            break;
        case (i >= 3450) && (i <= 3452):
            center.push(i);
            break;
        case (i >= 3456) && (i <= 3490):
            center.push(i);
            break;
        case (i >= 3495) && (i <= 3498):
            center.push(i);
            break;
        case (i >= 3502) && (i <= 3517):
            center.push(i);
            break;
        case (i >= 3520) && (i <= 3522):
            center.push(i);
            break;
        case (i >= 3526) && (i <= 3560):
            center.push(i);
            break;
        case (i >= 3565) && (i <= 3568):
            center.push(i);
            break;
        case (i >= 3572) && (i <= 3587):
            center.push(i);
            break;
        case (i >= 3590) && (i <= 3592):
            center.push(i);
            break;
        case (i >= 3596) && (i <= 3630):
            center.push(i);
            break;
        case (i >= 3635) && (i <= 3638):
            center.push(i);
            break;
        ///next break for three rows
        case (i >= 3642) && (i <= 3644):
            center.push(i);
            break;
        case (i >= 3660) && (i <= 3662):
            center.push(i);
            break;
        case (i >= 3666) && (i <= 3679):
            center.push(i);
            break;
        case (i >= 3687) && (i <= 3689):
            center.push(i);
            break;
        case (i >= 3705) && (i <= 3708):
            center.push(i);
            break;
        case (i >= 3712) && (i <= 3714):
            center.push(i);
            break;
        case (i >= 3730) && (i <= 3732):
            center.push(i);
            break;
        case (i >= 3736) && (i <= 3749):
            center.push(i);
            break;
        case (i >= 3757) && (i <= 3759):
            center.push(i);
            break;
        case (i >= 3775) && (i <= 3778):
            center.push(i);
            break;
        case (i >= 3782) && (i <= 3784):
            center.push(i);
            break;
        case (i >= 3800) && (i <= 3802):
            center.push(i);
            break;
        case (i >= 3806) && (i <= 3819):
            center.push(i);
            break;
        case (i >= 3827) && (i <= 3829):
            center.push(i);
            break;
        case (i >= 3845) && (i <= 3848):
            center.push(i);
            break;
        //break for next two rows
        case (i >= 3852) && (i <= 3872):
            center.push(i);
            break;
        case (i >= 3876) && (i <= 3886):
            center.push(i);
            break;
        case (i >= 3892) && (i <= 3904):
            center.push(i);
            break;
        case (i >= 3922) && (i <= 3942):
            center.push(i);
            break;
        case (i >= 3946) && (i <= 3956):
            center.push(i);
            break;
        case (i >= 3962) && (i <= 3974):
            center.push(i);
            break;
        //break for next 3 rows
        case (i >= 3992) && (i <= 4002):
            center.push(i);
            break;
        case (i >= 4010) && (i <= 4012):
            center.push(i);
            break;
        case (i >= 4016) && (i <= 4029):
            center.push(i);
            break;
        case (i >= 4032) && (i <= 4044):
            center.push(i);
            break;
        case (i >= 4048) && (i <= 4058):
            center.push(i);
            break;
        case (i >= 4062) && (i <= 4072):
            center.push(i);
            break;
        case (i >= 4080) && (i <= 4082):
            center.push(i);
            break;
        case (i >= 4086) && (i <= 4099):
            center.push(i);
            break;
        case (i >= 4102) && (i <= 4114):
            center.push(i);
            break;
        case (i >= 4118) && (i <= 4128):
            center.push(i);
            break;
        case (i >= 4132) && (i <= 4142):
            center.push(i);
            break;
        case (i >= 4150) && (i <= 4152):
            center.push(i);
            break;
        case (i >= 4156) && (i <= 4169):
            center.push(i);
            break;
        case (i >= 4172) && (i <= 4184):
            center.push(i);
            break;
        case (i >= 4188) && (i <= 4198):
            center.push(i);
            break;
        //break for next three rows
        case (i >= 4202) && (i <= 4212):
            center.push(i);
            break;
        case (i >= 4220) && (i <= 4222):
            center.push(i);
            break;
        case (i >= 4237) && (i <= 4239):
            center.push(i);
            break;
        case (i >= 4242) && (i <= 4254):
            center.push(i);
            break;
        case (i >= 4258) && (i <= 4268):
            center.push(i);
            break;
        case (i >= 4272) && (i <= 4282):
            center.push(i);
            break;
        case (i >= 4290) && (i <= 4292):
            center.push(i);
            break;
        case (i >= 4307) && (i <= 4309):
            center.push(i);
            break;
        case (i >= 4312) && (i <= 4324):
            center.push(i);
            break;
        case (i >= 4328) && (i <= 4338):
            center.push(i);
            break;
        case (i >= 4342) && (i <= 4352):
            center.push(i);
            break;
        case (i >= 4360) && (i <= 4362):
            center.push(i);
            break;
        case (i >= 4377) && (i <= 4379):
            center.push(i);
            break;
        case (i >= 4382) && (i <= 4394):
            center.push(i);
            break;
        case (i >= 4398) && (i <= 4408):
            center.push(i);
            break;
        //break for next 3 rows
        case (i >= 4426) && (i <= 4464):
            center.push(i);
            break;
        case (i >= 4468) && (i <= 4478):
            center.push(i);
            break;
        case (i >= 4496) && (i <= 4534):
            center.push(i);
            break;
        case (i >= 4538) && (i <= 4548):
            center.push(i);
            break;
        case (i >= 4566) && (i <= 4604):
            center.push(i);
            break;
        case (i >= 4608) && (i <= 4618):
            center.push(i);
            break;
        //break for next two rows
        case (i >= 4636) && (i <= 4638):
            center.push(i);
            break;
        case (i >= 4657) && (i <= 4661):
            center.push(i);
            break;
        case (i >= 4678) && (i <= 4688):
            center.push(i);
            break;
        case (i >= 4706) && (i <= 4708):
            center.push(i);
            break;
        case (i >= 4727) && (i <= 4731):
            center.push(i);
            break;
        case (i >= 4748) && (i <= 4758):
            center.push(i);
            break;
        //break for next three rows
        case (i >= 4765) && (i <= 4781):
            center.push(i);
            break;
        case (i >= 4784) && (i <= 4828):
            center.push(i);
            break;
        case (i >= 4835) && (i <= 4851):
            center.push(i);
            break;
        case (i >= 4854) && (i <= 4898):
            center.push(i);
            break;
        case (i >= 4905) && (i <= 4921):
            center.push(i);
            break;
        case (i >= 4924) && (i <= 4968):
            center.push(i);
            break;
        //break for next two rows
        case (i >= 4975) && (i <= 4991):
            center.push(i);
            break;
        case (i >= 4994) && (i <= 5006):
            center.push(i);
            break;
        case (i >= 5030) && (i <= 5032):
            center.push(i);
            break;
        case (i >= 5045) && (i <= 5061):
            center.push(i);
            break;
        case (i >= 5064) && (i <= 5076):
            center.push(i);
            break;
        case (i >= 5100) && (i <= 5102):
            center.push(i);
            break;
        //break for next three rows
        case (i >= 5115) && (i <= 5131):
            center.push(i);
            break;
        case (i >= 5139) && (i <= 5151):
            center.push(i);
            break;
        case (i >= 5154) && (i <= 5164):
            center.push(i);
            break;
        case (i >= 5167) && (i <= 5178):
            center.push(i);
            break;
        case (i >= 5185) && (i <= 5201):
            center.push(i);
            break;
        case (i >= 5209) && (i <= 5221):
            center.push(i);
            break;
        case (i >= 5224) && (i <= 5234):
            center.push(i);
            break;
        case (i >= 5237) && (i <= 5248):
            center.push(i);
            break;
        case (i >= 5255) && (i <= 5271):
            center.push(i);
            break;
        case (i >= 5279) && (i <= 5291):
            center.push(i);
            break;
        case (i >= 5294) && (i <= 5304):
            center.push(i);
            break;
        case (i >= 5307) && (i <= 5318):
            center.push(i);
            break;
        //break for next 3 rows
        case (i >= 5325) && (i <= 5341):
            center.push(i);
            break;
        case (i >= 5344) && (i <= 5361):
            center.push(i);
            break;
        case (i >= 5364) && (i <= 5388):
            center.push(i);
            break;
        case (i >= 5395) && (i <= 5411):
            center.push(i);
            break;
        case (i >= 5414) && (i <= 5431):
            center.push(i);
            break;
        case (i >= 5434) && (i <= 5458):
            center.push(i);
            break;
        case (i >= 5465) && (i <= 5481):
            center.push(i);
            break;
        case (i >= 5484) && (i <= 5501):
            center.push(i);
            break;
        case (i >= 5504) && (i <= 5528):
            center.push(i);
            break;
        //break for two rows
        case (i >= 5541) && (i <= 5543):
            center.push(i);
            break;
        case (i >= 5554) && (i <= 5558):
            center.push(i);
            break;
        case (i >= 5574) && (i <= 5598):
            center.push(i);
            break;
        case (i >= 5611) && (i <= 5613):
            center.push(i);
            break;
        case (i >= 5624) && (i <= 5628):
            center.push(i);
            break;
        case (i >= 5644) && (i <= 5668):
            center.push(i);
            break;
        //break for three rows
        case (i >= 5672) && (i <= 5677):
            center.push(i);
            break;
        case (i >= 5681) && (i <= 5683):
            center.push(i);
            break;
        case (i >= 5686) && (i <= 5724):
            center.push(i);
            break;
        case (i >= 5727) && (i <= 5738):
            center.push(i);
            break;
        case (i >= 5742) && (i <= 5747):
            center.push(i);
            break;
        case (i >= 5751) && (i <= 5753):
            center.push(i);
            break;
        case (i >= 5756) && (i <= 5794):
            center.push(i);
            break;
        case (i >= 5797) && (i <= 5808):
            center.push(i);
            break;
        case (i >= 5812) && (i <= 5817):
            center.push(i);
            break;
        case (i >= 5821) && (i <= 5823):
            center.push(i);
            break;
        case (i >= 5826) && (i <= 5864):
            center.push(i);
            break;
        case (i >= 5867) && (i <= 5878):
            center.push(i);
            break;
        //break for next 3 rows
        case (i >= 5882) && (i <= 5893):
            center.push(i);
            break;
        case (i >= 5896) && (i <= 5906):
            center.push(i);
            break;
        case (i >= 5919) && (i <= 5921):
            center.push(i);
            break;
        case (i >= 5924) && (i <= 5934):
            center.push(i);
            break;
        case (i >= 5939) && (i <= 5945):
            center.push(i);
            break;
        case (i >= 5952) && (i <= 5963):
            center.push(i);
            break;
        case (i >= 5966) && (i <= 5976):
            center.push(i);
            break;
        case (i >= 5989) && (i <= 5991):
            center.push(i);
            break;
        case (i >= 5994) && (i <= 6004):
            center.push(i);
            break;
        case (i >= 6009) && (i <= 6015):
            center.push(i);
            break;
        case (i >= 6022) && (i <= 6033):
            center.push(i);
            break;
        case (i >= 6036) && (i <= 6046):
            center.push(i);
            break;
        case (i >= 6059) && (i <= 6061):
            center.push(i);
            break;
        case (i >= 6064) && (i <= 6074):
            center.push(i);
            break;
        case (i >= 6079) && (i <= 6085):
            center.push(i);
            break;
        //break for next 3 rows
        case (i >= 6092) && (i <= 6103):
            center.push(i);
            break;
        case (i >= 6106) && (i <= 6116):
            center.push(i);
            break;
        case (i >= 6120) && (i <= 6131):
            center.push(i);
            break;
        case (i >= 6134) && (i <= 6144):
            center.push(i);
            break;
        case (i >= 6149) && (i <= 6155):
            center.push(i);
            break;
        case (i >= 6162) && (i <= 6173):
            center.push(i);
            break;
        case (i >= 6176) && (i <= 6186):
            center.push(i);
            break;
        case (i >= 6190) && (i <= 6201):
            center.push(i);
            break;
        case (i >= 6204) && (i <= 6214):
            center.push(i);
            break;
        case (i >= 6219) && (i <= 6225):
            center.push(i);
            break;
        case (i >= 6232) && (i <= 6243):
            center.push(i);
            break;
        case (i >= 6246) && (i <= 6256):
            center.push(i);
            break;
        case (i >= 6260) && (i <= 6271):
            center.push(i);
            break;
        case (i >= 6274) && (i <= 6284):
            center.push(i);
            break;
        case (i >= 6289) && (i <= 6295):
            center.push(i);
            break;
        //break for next two rows
        case (i >= 6302) && (i <= 6307):
            center.push(i);
            break;
        case (i >= 6311) && (i <= 6326):
            center.push(i);
            break;
        case (i >= 6330) && (i <= 6341):
            center.push(i);
            break;
        case (i >= 6352) && (i <= 6354):
            center.push(i);
            break;
        case (i >= 6359) && (i <= 6365):
            center.push(i);
            break;
        case (i >= 6372) && (i <= 6377):
            center.push(i);
            break;
        case (i >= 6381) && (i <= 6396):
            center.push(i);
            break;
        case (i >= 6400) && (i <= 6411):
            center.push(i);
            break;
        case (i >= 6422) && (i <= 6424):
            center.push(i);
            break;
        case (i >= 6429) && (i <= 6435):
            center.push(i);
            break;
        //break for next 3 rows
        case (i >= 6451) && (i <= 6455):
            center.push(i);
            break;
        case (i >= 6470) && (i <= 6481):
            center.push(i);
            break;
        case (i >= 6484) && (i <= 6494):
            center.push(i);
            break;
        case (i >= 6497) && (i <= 6508):
            center.push(i);
            break;
        case (i >= 6521) && (i <= 6525):
            center.push(i);
            break;
        case (i >= 6540) && (i <= 6551):
            center.push(i);
            break;
        case (i >= 6554) && (i <= 6564):
            center.push(i);
            break;
        case (i >= 6567) && (i <= 6578):
            center.push(i);
            break;
        case (i >= 6591) && (i <= 6595):
            center.push(i);
            break;
        case (i >= 6610) && (i <= 6621):
            center.push(i);
            break;
        case (i >= 6624) && (i <= 6634):
            center.push(i);
            break;
        case (i >= 6637) && (i <= 6648):
            center.push(i);
            break;
        //break for next 3 rows
        case (i >= 6652) && (i <= 6691):
            center.push(i);
            break;
        case (i >= 6694) && (i <= 6718):
            center.push(i);
            break;
        case (i >= 6722) && (i <= 6761):
            center.push(i);
            break;
        case (i >= 6764) && (i <= 6788):
            center.push(i);
            break;
        case (i >= 6792) && (i <= 6831):
            center.push(i);
            break;
        case (i >= 6834) && (i <= 6858):
            center.push(i);
            break;
        //break for next two rows
        case (i >= 6862) && (i <= 6870):
            center.push(i);
            break;
        case (i >= 6878) && (i <= 6881):
            center.push(i);
            break;
        case (i >= 6890) && (i <= 6901):
            center.push(i);
            break;
        case (i >= 6904) && (i <= 6928):
            center.push(i);
            break;
        case (i >= 6932) && (i <= 6940):
            center.push(i);
            break;
        case (i >= 6948) && (i <= 6951):
            center.push(i);
            break;
        case (i >= 6960) && (i <= 6971):
            center.push(i);
            break;
        case (i >= 6974) && (i <= 6998):
            center.push(i);
            break;
        //break for next 3 rows
        case (i >= 7002) && (i <= 7010):
            center.push(i);
            break;
        case (i >= 7013) && (i <= 7027):
            center.push(i);
            break;
        case (i >= 7030) && (i <= 7041):
            center.push(i);
            break;
        case (i >= 7044) && (i <= 7054):
            center.push(i);
            break;
        case (i >= 7057) && (i <= 7068):
            center.push(i);
            break;
        case (i >= 7072) && (i <= 7080):
            center.push(i);
            break;
        case (i >= 7083) && (i <= 7097):
            center.push(i);
            break;
        case (i >= 7100) && (i <= 7111):
            center.push(i);
            break;
        case (i >= 7114) && (i <= 7124):
            center.push(i);
            break;
        case (i >= 7127) && (i <= 7138):
            center.push(i);
            break;
        case (i >= 7142) && (i <= 7150):
            center.push(i);
            break;
        case (i >= 7153) && (i <= 7167):
            center.push(i);
            break;
        case (i >= 7170) && (i <= 7181):
            center.push(i);
            break;
        case (i >= 7184) && (i <= 7194):
            center.push(i);
            break;
        case (i >= 7197) && (i <= 7208):
            center.push(i);
            break;
        //break for next 3 rows
        case (i >= 7212) && (i <= 7220):
            center.push(i);
            break;
        case (i >= 7223) && (i <= 7237):
            center.push(i);
            break;
        case (i >= 7282) && (i <= 7290):
            center.push(i);
            break;
        case (i >= 7293) && (i <= 7307):
            center.push(i);
            break;
        case (i >= 7352) && (i <= 7360):
            center.push(i);
            break;
        case (i >= 7363) && (i <= 7377):
            center.push(i);
            break;
        //break for next 5 rows
        case (i >= 7433) && (i <= 7447):
            center.push(i);
            break;
        case (i >= 7503) && (i <= 7517):
            center.push(i);
            break;
        case (i >= 7573) && (i <= 7587):
            center.push(i);
            break;
        case (i >= 7643) && (i <= 7657):
            center.push(i);
            break;
        case (i >= 7713) && (i <= 7727):
            center.push(i);
            break;


    }
}

/*-------Set the active Squares--------*/
/*var activeSquares = [playerIndex - 281, playerIndex-280, playerIndex-279, playerIndex-212, playerIndex-211,
 playerIndex-210, playerIndex-209, playerIndex-208, playerIndex-143, playerIndex-142, playerIndex-141, playerIndex-140, playerIndex-139,
 playerIndex-139, playerIndex-138, playerIndex-138, playerIndex-137, playerIndex-73, playerIndex-72, playerIndex-71, playerIndex-70,
 playerIndex-69, playerIndex-68, playerIndex-67, playerIndex-3, playerIndex-2, playerIndex-1, playerIndex-74, playerIndex-4, playerIndex-66,
 playerIndex + 281, playerIndex+280, playerIndex+279, playerIndex+212, playerIndex+211,
 playerIndex+210, playerIndex+209, playerIndex+208, playerIndex+143, playerIndex+142, playerIndex+141, playerIndex+140, playerIndex+139,
 playerIndex+139, playerIndex+138, playerIndex+138, playerIndex+137, playerIndex+73, playerIndex+72, playerIndex+71, playerIndex+70,
 playerIndex+69, playerIndex+68, playerIndex+67, playerIndex+3, playerIndex+2, playerIndex+1, playerIndex+74, playerIndex+4, playerIndex+66];*/
var activeSquares = [];
for (var a =0; a< 7840; a++) {
    activeSquares.push(a);
}

//enemies, weapons and items locations
var mushroomLocations = [];
var goombaLocations = [];
var hammerBroLocations = [];
var chainChompLocations = [];
var greenShellLocations = [];
var redShellLocations = [];
var fireballLocations = [];
var hammerLocations = [];

var random = 0;
var occupiedLocations = [playerIndex, 7316];

var createItems = function(array, quantity, lowerLimit, upperLimit) {
  for (var i=0; i< quantity; i++) {
      random = Math.floor(Math.random()*7084);
      if (center.indexOf(random) != -1 && random >= lowerLimit && random <= upperLimit && occupiedLocations.indexOf(random) == -1) {
          array.push(random);
          occupiedLocations.push(random);
      }
      else {
          createItems(array, 1, lowerLimit, upperLimit);
      }
  }
};

createItems(mushroomLocations, 30, 0, 7840);
createItems(goombaLocations, 20, 0, 4200);
createItems(hammerBroLocations, 15, 2500, 6000);
createItems(chainChompLocations, 8, 5500, 7840);
createItems(greenShellLocations, 15, 0, 3500);
createItems(redShellLocations, 10, 1000, 5000);
createItems(fireballLocations, 6, 4500, 7800);
createItems(hammerLocations, 3, 6500, 7800);

var bowserLocation = [7136];
var enemyLocations = bowserLocation.concat(goombaLocations, hammerBroLocations, chainChompLocations);

var itemLocations = [].concat(mushroomLocations, greenShellLocations, redShellLocations, fireballLocations, hammerLocations);

//give every enemy health, including bowser
var enemyHealth = [];
for (var he=0; he<enemyLocations.length; he++) {
    enemyHealth.push(100);
}

var battleEnemy = 0;

var Game = React.createClass({

    getInitialState: function() {
        return {
            userHealth: userHealth,
            userXP: userXP,
            weapon: weapon,
            arrowDirection: arrowDirection,
            playerIndex: playerIndex,
            enemyLocations: enemyLocations,
            goombaLocations: goombaLocations,
            hammerBroLocations: hammerBroLocations,
            chainChompLocations: chainChompLocations,
            greenShellLocations: greenShellLocations,
            redShellLocations: redShellLocations,
            fireballLocations: fireballLocations,
            hammerLocations: hammerLocations,
            enemyHealth: enemyHealth,
            battleEnemy: battleEnemy,
            activeSquares: activeSquares,
            center: center,
            mushroomLocations: mushroomLocations,
            itemLocations: itemLocations,
            currentEnemyHealth: currentEnemyHealth
        };

    },

    battle: function() {

        //slice array for comparison in deletion
        var eLocations = this.state.enemyLocations.slice();


        //check enemy but assume it
        var enemyStrength=5;
        var enemyDefense=3;
        var enemyType = '';
        var weaponStrength = 1;
        //goomba
        if (this.state.goombaLocations.indexOf(this.state.battleEnemy) != -1) {
            enemyStrength= 5;
            enemyDefense = 1;
            enemyType="Goomba";
        }
        //hammer bro
        else if (this.state.hammerBroLocations.indexOf(this.state.battleEnemy) != -1) {
            enemyStrength= 15;
            enemyDefense = 2;
            enemyType="HammerBro";
        }
        else if (this.state.chainChompLocations.indexOf(this.state.battleEnemy) != -1) {
            enemyStrength= 30;
            enemyDefense = 3;
            enemyType="ChainChomp";
        }
        //bowser
        if (this.state.battleEnemy == bowserLocation) {
            enemyStrength= 50;
            enemyDefense = 5;
            enemyType="Bowser";
            console.log('you are fucked');
        }

        //check weapon
        if (this.state.weapon == "Nothing") {
            weaponStrength = 0;
        }
        else if (this.state.weapon == "Green Shell") {
            weaponStrength=10;
        }
        else if (this.state.weapon == "Red Shell") {
            weaponStrength=30;
        }
        else if (this.state.weapon == "Fireball") {
            weaponStrength=60;
        }
        else if (this.state.weapon == "Hammer") {
            weaponStrength=95;
        }

        //take the damage
        this.state.userHealth -= Math.floor(Math.random()*enemyStrength - (this.state.userXP/50));
        //give the damage
        this.state.enemyHealth[eLocations.indexOf(this.state.battleEnemy)] -= Math.floor(((Math.random()*weaponStrength + (this.state.userXP/50))/enemyDefense));

        this.state.currentEnemyHealth = this.state.enemyHealth[eLocations.indexOf(this.state.battleEnemy)];
        //Check if enemy is dead and then delete health and location and add userXP.
        if (this.state.enemyHealth[eLocations.indexOf(this.state.battleEnemy)] <= 0) {
            this.state.currentEnemyHealth = 0;
            this.state.enemyLocations.splice(eLocations.indexOf(this.state.battleEnemy), 1);
            this.state.enemyHealth.splice(eLocations.indexOf(this.state.battleEnemy), 1);

            ///add to user XP
            if (enemyType == "Goomba") {
                this.state.userXP += 5;
                this.state.goombaLocations.splice(this.state.goombaLocations.indexOf(this.state.battleEnemy), 1);
            }
            else if (enemyType == "HammerBro") {
                this.state.userXP += 40;
                this.state.hammerBroLocations.splice(this.state.hammerBroLocations.indexOf(this.state.battleEnemy), 1);
            }
            else if (enemyType == "ChainChomp") {
                this.state.userXP += 70;
                this.state.chainChompLocations.splice(this.state.chainChompLocations.indexOf(this.state.battleEnemy), 1);
            }
            else if (enemyType == "Bowser") {
                alert('Congratulations! you win the world and save the princess');
                location.reload();
            }

        }
        if (this.state.userHealth <= 0) {
            alert('You died. Please try again');
            location.reload();
        }
        //Display Health

    },

    handleItem: function() {
      //mushroom
        if (this.state.mushroomLocations.indexOf(this.state.playerIndex) != -1) {
            if (this.state.userHealth < 100) {
                this.state.userHealth += 100;
            }
            else {
                this.state.userHealth = 200;
            }
            this.state.mushroomLocations.splice(this.state.mushroomLocations.indexOf(this.state.playerIndex), 1);
        }
        //green shell
        if (this.state.greenShellLocations.indexOf(this.state.playerIndex) != -1) {
            this.state.weapon = "Green Shell";
            this.state.greenShellLocations.splice(this.state.greenShellLocations.indexOf(this.state.playerIndex), 1);
        }
        //red shell
        if (this.state.redShellLocations.indexOf(this.state.playerIndex) != -1) {
            this.state.weapon = "Red Shell";
            this.state.redShellLocations.splice(this.state.redShellLocations.indexOf(this.state.playerIndex), 1);
        }
        //fireball
        if (this.state.fireballLocations.indexOf(this.state.playerIndex) != -1) {
            this.state.weapon = "Fireball";
            this.state.fireballLocations.splice(this.state.fireballLocations.indexOf(this.state.playerIndex), 1);
        }
        //Hammer
        if (this.state.hammerLocations.indexOf(this.state.playerIndex) != -1) {
            this.state.weapon = "Hammer";
            this.state.hammerLocations.splice(this.state.hammerLocations.indexOf(this.state.playerIndex), 1);
        }
    },

    handleKeyDown: function(event) {

        switch (event.keyCode) {
            ///Up Key
            case 38:
                event.preventDefault();
                this.setState({
                   arrowDirection: "up"
                });
                break;
            //Down Key
            case 40:
                event.preventDefault();
                this.setState({
                    arrowDirection: "down"
                });
                break;
            //Right Key
            case 39:
                event.preventDefault();
                this.setState({
                    arrowDirection: "right"
                });
                break;
            //Left Key
            case 37:
                event.preventDefault();
                this.setState({
                    arrowDirection: "left"
                });
                break;
        }
    },

    componentDidMount: function() {
        document.addEventListener('keydown', this.handleKeyDown, false);
        alert('                                         ¡Welcome to the Dungeon! \r\n' +
            '       Your task is to find and defeat Bowser in order to save the Princess. \r\n' +
            'Use the arrow keys to move around the map. Repeatedly run into enemies to fight battles against them. Feel free to run from a battle at anytime. Pickup mushrooms for your health and better' +
            ' weapons in order to defeat stronger enemies.\r\n' +
            '     Click on Mario to begin playing');
    },

    render: function() {

        var map = [];

        //Move the player Index on arrowKeys
        if (this.state.arrowDirection === "up") {
            ///Check that the player is moving within the map
            if (this.state.center.indexOf(this.state.playerIndex-70) != -1 && this.state.enemyLocations.indexOf(this.state.playerIndex-70) == -1 ) {

                //move player
                this.state.playerIndex -= 70;

                //move the viewing area according to direction of player
                for (var u=0; u<this.state.activeSquares.length; u++) {
                    this.state.activeSquares[u] -= 70;
                }
                //scroll the window if necessary
                if (this.state.playerIndex > 1500) {
                    window.scrollBy(0, -15);
                }
            }
            //battle
            else if (this.state.enemyLocations.indexOf(this.state.playerIndex-70) != -1) {
                this.state.battleEnemy = this.state.playerIndex-70;
                this.battle();
            }

        }
        else if (this.state.arrowDirection === "down") {
            ///Check that the player is moving within the map
            if (this.state.center.indexOf(this.state.playerIndex+70) != -1 && this.state.enemyLocations.indexOf(this.state.playerIndex+70) == -1) {

                //move player
                this.state.playerIndex += 70;

                //move the viewing area according to direction of player
                for (var d=0; d<this.state.activeSquares.length; d++) {
                    this.state.activeSquares[d] += 70;
                }
                //scroll window if necessary
                if (this.state.playerIndex > 1500) {
                    window.scrollBy(0, 15);
                }
            }
            //battle
            else if (this.state.enemyLocations.indexOf(this.state.playerIndex+70) != -1) {
                this.state.battleEnemy = this.state.playerIndex+70;
                this.battle();
            }
        }
        else if (this.state.arrowDirection === "right") {
            ///Check that the player is moving within the map
            if (this.state.center.indexOf(this.state.playerIndex+1) != -1  && this.state.enemyLocations.indexOf(this.state.playerIndex+1) == -1) {

                //move player
                this.state.playerIndex += 1;

                //move the viewing area according to direction of player
                for (var r=0; r<this.state.activeSquares.length; r++) {
                    this.state.activeSquares[r] += 1;
                }
            }
            //battle
            else if (this.state.enemyLocations.indexOf(this.state.playerIndex+1) != -1) {
                this.state.battleEnemy = this.state.playerIndex+1;
                this.battle();
            }
        }
        else if (this.state.arrowDirection === "left") {
            ///Check that the player is moving within the map
            if (this.state.center.indexOf(this.state.playerIndex-1) != -1  && this.state.enemyLocations.indexOf(this.state.playerIndex-1) == -1) {

                //move player
                this.state.playerIndex -= 1;

                //move the viewing area according to direction of player
                for (var l=0; l<this.state.activeSquares.length; l++) {
                    this.state.activeSquares[l] -= 1;
                }
            }
            //battle
            else if (this.state.enemyLocations.indexOf(this.state.playerIndex-1) != -1) {
                this.state.battleEnemy = this.state.playerIndex-1;
                this.battle();
            }
        }


        ///Build the Grid by adding 15x15 blocks
        for (var g=0; g<7840; g++) {
            if (this.state.center.indexOf(g) != -1) {
                map.push(<MapCenter isShown = {this.state.activeSquares.indexOf(g) != -1} />);
            }
            else {
                map.push(<MapBoundary type="boundary" isShown = {this.state.activeSquares.indexOf(g) != -1}/>);
            }
        }

        //Draw the player, enemies and items
        for (var k =0; k< this.state.goombaLocations.length; k++) {
            map[this.state.goombaLocations[k]] = <Goomba isShown ={this.state.activeSquares.indexOf(this.state.goombaLocations[k]) != -1} />;
        }
        for (var h =0; h< this.state.hammerBroLocations.length; h++) {
            map[this.state.hammerBroLocations[h]] = <HammerBro isShown ={this.state.activeSquares.indexOf(this.state.hammerBroLocations[h]) != -1} />;
        }
        for (var c =0; c< this.state.chainChompLocations.length; c++) {
            map[this.state.chainChompLocations[c]] = <ChainChomp isShown ={this.state.activeSquares.indexOf(this.state.chainChompLocations[c]) != -1} />;
        }
        for (var s =0; s< this.state.greenShellLocations.length; s++) {
            map[this.state.greenShellLocations[s]] = <GreenShell isShown ={this.state.activeSquares.indexOf(this.state.greenShellLocations[s]) != -1} />;
        }
        for (var z =0; z < this.state.redShellLocations.length; z++) {
            map[this.state.redShellLocations[z]] = <RedShell isShown ={this.state.activeSquares.indexOf(this.state.redShellLocations[z]) != -1} />;
        }
        for (var f =0; f < this.state.fireballLocations.length; f++) {
            map[this.state.fireballLocations[f]] = <Fireball isShown ={this.state.activeSquares.indexOf(this.state.fireballLocations[f]) != -1} />;
        }
        for (var b =0; b < this.state.hammerLocations.length; b++) {
            map[this.state.hammerLocations[b]] = <Hammer isShown ={this.state.activeSquares.indexOf(this.state.hammerLocations[b]) != -1} />;
        }
        for (var m =0; m< this.state.mushroomLocations.length; m++) {
            map[this.state.mushroomLocations[m]] = <Mushroom isShown ={this.state.activeSquares.indexOf(this.state.mushroomLocations[m]) != -1} />;
        }

        map[bowserLocation] = <Bowser isShown ={this.state.activeSquares.indexOf(bowserLocation[0]) != -1}/>;
        map[this.state.playerIndex] = <Player />;

        if (this.state.itemLocations.indexOf(this.state.playerIndex) != -1) {
            this.handleItem();
        }

        //set arrows to false again
        this.state.arrowDirection = "";
        this.state.battleEnemy = 0;


        return (
            <div>
                <div id="header">
                    <h4 id="weaponTitle" className="title">Weapon: {this.state.weapon}</h4>
                    <h4 id="userHealthTitle" className="title">Your Health: {this.state.userHealth}</h4>
                    <h2 id="generalTitle" className="title">Dungeon Crawler </h2>
                    <h4 id="levelTitle" className="title"> Level: {this.state.userXP} </h4>
                    <h4 id="enemyHealthTitle" className="title"> Enemy Health: {this.state.currentEnemyHealth}</h4>
                </div>
                <div id="gameContainer">
                {map}
                </div>
            </div>

        );
    }

});


ReactDOM.render(<Game />, document.getElementById('Rogue'));
