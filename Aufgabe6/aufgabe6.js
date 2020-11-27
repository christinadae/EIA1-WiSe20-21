//Datengrundlage Kontinente
var europa2008 = 4965.7;
var europa2018 = 4209.3;
var nordamerika2008 = 6600.4;
var nordamerika2018 = 6035.6;
var südamerika2008 = 1132.6;
var südamerika2018 = 1261.5;
var afrika2008 = 1028;
var afrika2018 = 1235.5;
var asien2008 = 12954.7;
var asien2018 = 16274.1;
var australien2008 = 1993;
var australien2018 = 2100.5;
var GesamtEmission2018 = europa2018 + nordamerika2018 + südamerika2018 + afrika2018 + asien2018 + australien2018;
//GesamtEmission2018 = 31116.5
window.addEventListener('load', function () {
    document.querySelector(".europe").addEventListener("click", function () {
        myFunction(" Europa ", europa2018, europa2008);
    });
});
window.addEventListener('load', function () {
    document.querySelector(".northamerica").addEventListener("click", function () {
        myFunction(" North America ", nordamerika2018, nordamerika2008);
    });
});
window.addEventListener('load', function () {
    document.querySelector(".southamerica").addEventListener("click", function () {
        myFunction(" South America ", südamerika2018, südamerika2008);
    });
});
window.addEventListener('load', function () {
    document.querySelector(".africa").addEventListener("click", function () {
        myFunction(" Africa ", afrika2018, afrika2008);
    });
});
window.addEventListener('load', function () {
    document.querySelector(".asia").addEventListener("click", function () {
        myFunction(" Asia ", asien2018, asien2008);
    });
});
window.addEventListener('load', function () {
    document.querySelector(".australia").addEventListener("click", function () {
        myFunction(" Australia ", australien2018, australien2008);
    });
});
//MyFunction
function myFunction(continent, Co2, Co2früher) {
    document.querySelector("#continent").innerHTML = continent;
    document.querySelector(".h2-1").innerHTML = Co2 + "";
    document.querySelector("p").innerHTML = "Emission absolute of" + continent + "in 2018";
    document.querySelector(".h2-2").innerHTML = Math.round((Co2 / GesamtEmission2018) * 100) + "%";
    document.querySelector(".h2-3").innerHTML = Math.round(((Co2 / Co2früher) - 1) * 100) + "%";
    document.querySelector(".h2-4").innerHTML = Math.round(Co2 - Co2früher) + "kg";
    document.querySelector(".chart").setAttribute('style', 'height:' + Math.round((Co2 / GesamtEmission2018) * 100) + "%");
}
//# sourceMappingURL=aufgabe6.js.map