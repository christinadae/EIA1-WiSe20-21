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

function functionEuropa() {
document.querySelector("h1").innerHTML ="Carbon Dioxide Emissions in Europe";
document.querySelector("h2").innerHTML = europa2018 +"";
document.querySelector("p").innerHTML ="Emission absolute of Europe in 2018";
document.querySelector("h3").innerHTML = Math.round(europa2018/GesamtEmission2018 *100) + "%";
document.querySelector("h4").innerHTML = Math.round(((europa2018/europa2008)-1)*100) +"%";
document.querySelector("h5").innerHTML = Math.round(europa2018-europa2008) + "kg CO2";

}

document.querySelector(".europe").addEventListener('click', functionEuropa);

    
    
    
