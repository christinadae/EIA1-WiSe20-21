
var GesamtEmission2018: number = europa2018 + nordamerika2018 + südamerika2018 + afrika2018 + asien2018 + australien2018;

var europa2008: number = 4965.7
var europa2018: number = 4209.3
var europaVerursacht: number = Math.round((europa2018/GesamtEmission2018)*100)
var europaVergleichPr: number = Math.round (((europa2018/europa2008)-1)*100)
var europaVergleichW: number = Math.round (europa2018-europa2008)


var nordamerika2008: number = 6600.4;
var nordamerika2018: number = 6035.6;
var nordamerikaVerursacht: number = Math.round((nordamerika2018/GesamtEmission2018)*100)
var nordamerikaVergleichPr: number = Math.round(((nordamerika2018/nordamerika2008)-1)*100)
var nordamerikaVergleichW: number = Math.round(nordamerika2018-nordamerika2008)


var südamerika2008: number = 1132.6;
var südamerika2018: number = 1261.5;
var südamerikaVerursacht: number = Math.round((südamerika2018/GesamtEmission2018)*100)
var südamerikaVergleichPr: number = Math.round(((südamerika2018/südamerika2008)-1)*100)
var südamerikaVergleichW: number = Math.round(südamerika2018-südamerika2008)


var afrika2008: number = 1028;
var afrika2018: number = 1235.5;
var afrikaVerursacht: number = Math.round((afrika2018/GesamtEmission2018)*100)
var afrikaVergleichPr: number = Math.round(((afrika2018/afrika2008)-1)*100)
var afrikaVergleichW: number = Math.round(afrika2018-afrika2008)


var asien2008: number = 12954.7;
var asien2018: number = 16274.1;
var asienVerursacht: number = Math.round((asien2018/GesamtEmission2018)*100)
var asienVergleichPr: number = Math.round(((asien2018/asien2008)-1)*100)
var asienVergleichW: number = Math.round(asien2018-asien2008)

var australien2008: number = 1993;
var australien2018: number = 2100.5;
var australienVerursacht: number = Math.round((australien2018/GesamtEmission2018)*100)
var australienVergleichPr: number = Math.round(((australien2018/australien2008)-1)*100)
var australienVergleichW: number = Math.round(australien2018-australien2008)

var GesamtEmission2018: number = europa2018 + nordamerika2018 + südamerika2018 + afrika2018 + asien2018 + australien2018;

//Europa
function functionEuropa() {
    document.querySelector("#titleRegion").innerHTML ="Europe";
    document.querySelector(".h2-1").innerHTML = europa2018 + "";
    document.querySelector("p").innerHTML ="Emission absolute of Europe in 2018";
    document.querySelector(".h2-2").innerHTML = europaVerursacht + "%";
    document.querySelector(".h2-3").innerHTML = europaVergleichPr +"%";
    document.querySelector(".h2-4").innerHTML = europaVergleichW + "kg CO2";
    }
    document.querySelector(".europe").addEventListener('click', functionEuropa);
//Nordamerika
    function functionNordamerika() {
    document.querySelector("#titleRegion").innerHTML ="North America";
    document.querySelector(".h2-1").innerHTML = nordamerika2018 + "";
    document.querySelector("p").innerHTML ="Emission absolute of North America in 2018";
    document.querySelector(".h2-2").innerHTML = nordamerikaVerursacht +"%";
    document.querySelector(".h2-3").innerHTML = nordamerikaVergleichPr +"%";
    document.querySelector(".h2-4").innerHTML = nordamerikaVergleichW + "kg CO2";

}
document.querySelector(".northamerica").addEventListener('click', functionNordamerika); 
//Südamerika
function functionSüdamerika() {
    document.querySelector("#titleRegion").innerHTML ="South America";
    document.querySelector(".h2-1").innerHTML = südamerika2018 + "";
    document.querySelector("p").innerHTML ="Emission absolute of South America in 2018";
    document.querySelector(".h2-2").innerHTML = südamerikaVerursacht +"%";
    document.querySelector(".h2-3").innerHTML = südamerikaVergleichPr +"%";
    document.querySelector(".h2-4").innerHTML = südamerikaVergleichW + "kg CO2";
    
 }
document.querySelector(".southamerica").addEventListener('click', functionSüdamerika); 
//Afrika
function functionAfrika() {
    document.querySelector("#titleRegion").innerHTML ="Africa";
    document.querySelector(".h2-1").innerHTML = afrika2018 + "";
    document.querySelector("p").innerHTML ="Emission absolute of Afrika in 2018";
    document.querySelector(".h2-2").innerHTML = afrikaVerursacht +"%";
    document.querySelector(".h2-3").innerHTML = afrikaVergleichPr +"%";
    document.querySelector(".h2-4").innerHTML = afrikaVergleichW + "kg CO2";
 }
document.querySelector(".africa").addEventListener('click', functionAfrika); 
//Asien
function functionAsien() {
    document.querySelector("#titleRegion").innerHTML ="Asia";
    document.querySelector(".h2-1").innerHTML = asien2018 + "";
    document.querySelector("p").innerHTML ="Emission absolute of Asia in 2018";
    document.querySelector(".h2-2").innerHTML = asienVerursacht +"%";
    document.querySelector(".h2-3").innerHTML = asienVergleichPr +"%";
    document.querySelector(".h2-4").innerHTML = asienVergleichW + "kg CO2";
    
 }
document.querySelector(".asia").addEventListener('click', functionAsien); 
//Australien
function functionAustralien() {
    document.querySelector("#titleRegion").innerHTML ="Australia";
    document.querySelector(".h2-1").innerHTML = australien2018 + "";
    document.querySelector("p").innerHTML ="Emission absolute of Australia in 2018";
    document.querySelector(".h2-2").innerHTML = australienVerursacht +"%";
    document.querySelector(".h2-3").innerHTML = australienVergleichPr +"%";
    document.querySelector(".h2-4").innerHTML = australienVergleichW + "kg CO2";
    
 }
document.querySelector(".australia").addEventListener('click', functionAustralien); 

