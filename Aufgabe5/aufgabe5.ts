var europa2008: number = 4965.7;
var europa2018: number = 4209.3;

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

var summe2018: number = europa2018 + nordamerika2018 + südamerika2018 + afrika2018 + asien2018 + australien2018;

console.log('Die Emission von Europa ist: ' + Math.round( europa2018) + 'kg CO2')
console.log ('Relativ zur Gesamtemission der Welt verursacht Europa damit '  + Math.round( europa2018/summe2018*100) + '%')
console.log ('Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um ' + Math.round( europa2018/europa2008*100) + '% verändert')
console.log ('2018 im Vergleich zu 2008 sind das ' + Math.round( europa2018-europa2008) + 'kg CO2')

console.log('Die Emission von Nordamerika ist: ' + Math.round( nordamerika2018) + 'kg CO2')
console.log ('Relativ zur Gesamtemission der Welt verursacht Nordamerika damit '  + Math.round( nordamerika2018/summe2018*100) + '%')
console.log ('Für Nordamerika hat sich 2018 im Vergleich zu 2008 die Emission um ' + Math.round( nordamerika2018/nordamerika2008*100) + '% verändert')
console.log ('2018 im Vergleich zu 2008 sind das ' + Math.round( nordamerika2018-nordamerika2008) + 'kg CO2')

console.log('Die Emission von Südamerika ist: ' + Math.round( südamerika2018) + 'kg CO2')
console.log ('Relativ zur Gesamtemission der Welt verursacht Südamerika damit '  + Math.round( südamerika2018/summe2018*100) + '%')
console.log ('Für Südamerika hat sich 2018 im Vergleich zu 2008 die Emission um ' + Math.round (südamerika2018/südamerika2008*100) + '% verändert')
console.log ('2018 im Vergleich zu 2008 sind das ' + Math.round( südamerika2018-südamerika2008) + 'kg CO2')

console.log('Die Emission von Afrika ist: ' + Math.round( afrika2018) + 'kg CO2')
console.log ('Relativ zur Gesamtemission der Welt verursacht Afrika damit '  + Math.round( afrika2018/summe2018*100) + '%')
console.log ('Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um ' + Math.round( afrika2018/afrika2008*100) + '% verändert')
console.log ('2018 im Vergleich zu 2008 sind das ' + Math.round( afrika2018-afrika2008) + 'kg CO2')

console.log('Die Emission von Asien ist: ' + Math.round( asien2018) + 'kg CO2')
console.log ('Relativ zur Gesamtemission der Welt verursacht Asien damit '  + Math.round( asien2018/summe2018*100) + '%')
console.log ('Für Asien hat sich 2018 im Vergleich zu 2008 die Emission um ' + Math.round( asien2018/asien2008*100) + '% verändert')
console.log ('2018 im Vergleich zu 2008 sind das ' + Math.round( asien2018-asien2008) + 'kg CO2')

console.log('Die Emission von Australien ist: ' + Math.round( australien2018) + 'kg CO2')
console.log ('Relativ zur Gesamtemission der Welt verursacht Australien damit '  + Math.round( australien2018/summe2018*100) + '%')
console.log ('Für Australien hat sich 2018 im Vergleich zu 2008 die Emission um ' + Math.round( australien2018/australien2008*100) + '% verändert')
console.log ('2018 im Vergleich zu 2008 sind das ' + Math.round( australien2018-australien2008) + 'kg CO2')




