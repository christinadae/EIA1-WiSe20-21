//Datengrundlage Kontinente

var europa2008: number = 4965.7
var europa2018: number = 4209.3

var nordamerika2008: number = 6600.4;
var nordamerika2018: number = 6035.6;

var südamerika2008: number = 1132.6;
var südamerika2018: number = 1261.5;

var afrika2008: number = 1028;
var afrika2018: number = 1235.5;

var asien2008: number = 12954.7;
var asien2018: number = 16274.1;

var australien2008: number = 1993;
var australien2018: number = 2100.5;

var GesamtEmission2018: number = europa2018 + nordamerika2018 + südamerika2018 + afrika2018 + asien2018 + australien2018;
//GesamtEmission2018 = 31116.5

//Europa Berechnungen

// Relative to total world's emission
var europaVerursacht: number = Math.round((europa2018/GesamtEmission2018)*100)
// Growth rate between 2008 and 2018 (in %)
var europaVergleichPr: number = Math.round (((europa2018/europa2008)-1)*100)
//Growth rate between 2008 and 2018 (absolute)
var europaVergleichW: number = Math.round (europa2018-europa2008)


//Nordamerika Berechnungen

//Relative to total world's emission
var nordamerikaVerursacht: number = Math.round((nordamerika2018/GesamtEmission2018)*100)
// Growth rate between 2008 and 2018 (in %)
var nordamerikaVergleichPr: number = Math.round(((nordamerika2018/nordamerika2008)-1)*100)
//Growth rate between 2008 and 2018 (absolute)
var nordamerikaVergleichW: number = Math.round(nordamerika2018-nordamerika2008)

//Südamerika Berechnungen

//Relative to total world's emission
var südamerikaVerursacht: number = Math.round((südamerika2018/GesamtEmission2018)*100)
// Growth rate between 2008 and 2018 (in %)
var südamerikaVergleichPr: number = Math.round(((südamerika2018/südamerika2008)-1)*100)
//Growth rate between 2008 and 2018 (absolute)
var südamerikaVergleichW: number = Math.round(südamerika2018-südamerika2008)

// Afrika Berechnungen

//Relative to total world's emission
var afrikaVerursacht: number = Math.round((afrika2018/GesamtEmission2018)*100)
// Growth rate between 2008 and 2018 (in %)
var afrikaVergleichPr: number = Math.round(((afrika2018/afrika2008)-1)*100)
//Growth rate between 2008 and 2018 (absolute)
var afrikaVergleichW: number = Math.round(afrika2018-afrika2008)

//Asien Berechnungen

//Relative to total world's emission
var asienVerursacht: number = Math.round((asien2018/GesamtEmission2018)*100)
// Growth rate between 2008 and 2018 (in %)
var asienVergleichPr: number = Math.round(((asien2018/asien2008)-1)*100)
//Growth rate between 2008 and 2018 (absolute)
var asienVergleichW: number = Math.round(asien2018-asien2008)

//Australien Berechnungen

//Relative to total world's emission
var australienVerursacht: number = Math.round((australien2018/GesamtEmission2018)*100)
// Growth rate between 2008 and 2018 (in %)
var australienVergleichPr: number = Math.round(((australien2018/australien2008)-1)*100)
//Growth rate between 2008 and 2018 (absolute)
var australienVergleichW: number = Math.round(australien2018-australien2008)

 

//MyFunction

function myFunction(continent:string, Co2: number, Verursachung: number, Vergleich1:number, Vergleich2: number) {


    document.querySelector("#continent").innerHTML =  continent;
    document.querySelector(".h2-1").innerHTML = Co2 +"";
    document.querySelector("p").innerHTML =  "Emission absolute of" + continent + "in 2018";
    document.querySelector(".h2-2").innerHTML = Verursachung + "%";
    document.querySelector(".h2-3").innerHTML = Vergleich1 + "%";
    document.querySelector(".h2-4").innerHTML = Vergleich2 + "kg";

    document.querySelector(".chart").setAttribute('style', 'height:' +  Math.round((Co2/GesamtEmission2018)*100)+ "%")
    
    }

document.querySelector(".europe").addEventListener('click', myFunction.bind(null, " Europe ", europa2018, europaVerursacht, europaVergleichPr, europaVergleichW));
document.querySelector(".northamerica").addEventListener('click', myFunction.bind(null, " North America ", nordamerika2018, nordamerikaVerursacht, nordamerikaVergleichPr, nordamerikaVergleichW));
document.querySelector(".southamerica").addEventListener('click', myFunction.bind(null, " South America ",  südamerika2018,südamerikaVerursacht, südamerikaVergleichPr, südamerikaVergleichW));
document.querySelector(".africa").addEventListener('click', myFunction.bind(null, " Africa ",  afrika2018, afrikaVerursacht, afrikaVergleichPr, afrikaVergleichW));
document.querySelector(".asia").addEventListener('click', myFunction.bind(null, " Asia ",  asien2018, asienVerursacht, asienVergleichPr, asienVergleichW));
document.querySelector(".australia").addEventListener('click', myFunction.bind(null, " Australia ",  australien2018, australienVerursacht, australienVergleichPr, australienVergleichW));









