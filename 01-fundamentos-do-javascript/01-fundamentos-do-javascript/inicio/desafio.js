/*
Corrida de 100m = 0.72 * tempo
Salto em altura = 3.79 * altura
Arremesso de peso = 1.5 * distância
Salto em distância = 1.05 * distância
Corrida de 800m = 0.14 * tempo
*/

/*
João Mendes
Corrida 100m = 12.5
Salto em altura = 1.8
Arremeso de peso = 10.5
Salto em distância = 6.4
Corrida 800m = 150
*/

/*
Pedro Silva
Corrida 100m = 11.8
Salto em altura = 1.6
Arremesso de peso = 9.8
Salto em distância = 6;2
Corrida 800m = 145
*/

const nAtleta1 = "João Mendes";
const corridaCem = 0.72 * 12.5;
const saltoAlt = 3.79 * 1.8;
const arremesso = 1.5 * 10.5;
const saltoDis = 1.05 * 6.4;
const corridaOit = 0.14 * 150;
console.log(nAtleta1+":");
console.log("Corrida em 100 metros:", corridaCem + " seg")
console.log("Salto em altura:", saltoAlt.toFixed(1))
console.log("Arremesso de peso:", arremesso.toFixed(2))
console.log("Salto em distância:", saltoDis.toFixed(2))
console.log("Corrida em 800 metros:", corridaOit.toFixed(1))

const resJ = corridaCem + saltoAlt + arremesso + saltoDis + corridaOit;
console.log(resJ.toFixed(2)); 

const nAtleta2 = "Pedro Silva";
const cCem = 0.72 * 11.8;
const sAlt = 3.79 * 1.6;
const arr = 1.5 * 9.8;
const sDis = 1.05 * 6.2;
const cOit = 0.14 * 145;
console.log(nAtleta2+":");
console.log("Corrida em 100 metro:", cCem + " seg");
console.log("Salto em altura: ", sAlt.toFixed(1));
console.log("Arremesso de peso:", arr.toFixed(2));
console.log("Salto em distância", sDis.toFixed(2));
console.log("Corrida em 800 metros:", cOit.toFixed(1))

const resP = cCem + sAlt + arr + sDis + cOit;
console.log(resP.toFixed(2));

const vencedor = resJ > resP;
console.log(vencedor);

