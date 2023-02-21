// Encontrar el nombre de una sociedad secreta segun los datos de los nombres para cada integrante
// secretName(["Felipe", "Fer", "Zabdiel"]) -> FFZ
// secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel']) -> CJMPRR
// secretName(['Harry', 'Ron', 'Hermione']) -> HHR

// const secretNamefunction = arr => {
//     let string = "";
//     arr.map((e) => {string+=e.slice(0,1)})
//     return string;
// };
const secretNamefunction = arr => arr.sort().reduce((a,r) => a+ r.slice(0,1) ,"")

console.log(secretNamefunction( ["Felipe", "Fer", "Zabdiel"] ));
console.log(secretNamefunction( ['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'] ));
console.log(secretNamefunction( ['Harry', 'Ron', 'Hermione'] ));

// onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer']) -> 'mockIng99, J0eyPunch and one 1 more online'
const onlineStatus = (arr) => `${arr.slice(0,arr.length-1).reduce((a,r) => a +", "+ r ,)} and one more online`;

console.log(onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer']));

// Promedio antipode
// Crear una funcion que tome 2 parametros, (numero, longitud) 
//y regrse un array de longitud cantidad de numeros multiplos del numero por parametro
// arrayMultiplos(2, 10) -> [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
// arrayMultiplos(17, 6) -> [17, 34, 51, 68, 85, 102]
const arrayMultiplos = (number1, parameter) =>{
    const outputArray = []
    for (let i = 1; i <= parameter; i++) {
        outputArray.push(i*number1);        
    }
    return outputArray;
}
console.log(arrayMultiplos(2,10));
console.log(arrayMultiplos(17,6));


// Escrbir una funcion que descubra si el array es dominante positivo
// Un array es positivo dominante cuando la mayoria de sus elementos son positivos -> [1, -2, 55, 10]
// positiveDom([-1, -3, -5, 4, 6767]) -> false
const positiveDom = (arr) => arr.filter(e => e<0).length < arr.filter(e => e>0).length ? true:false;

console.log(positiveDom([-1, -3, -5, 4, 6767]));//false
console.log(positiveDom([-1, -3, 5, 4, 6767]));//true
console.log(positiveDom([-1, -3, 4, 6767]));//true


// Promedio antipode
// Dado un array, devolver un array de menor longitud de acuerdo a los siguentes pasos:
// - Dividir el array en 2 partes iguales*. Si no son iguales, eliminar el elemento en medio para obtener 2 arrays iguales
// - Sumar cada numero de la primera parte con los numeros inversos de la segunda parte
// [1,2,3] [5,22,6] -> 1 + 6, 2 + 22, 3 + 5 -> [7, 24, 8]
// - Dividir cada numero del array final entre 2  -> [3.5, 12, 4]

const promedioAntipode = ( array ) => {
    const [array1,array2] = ( array.length % 2 === 0) ? [array.slice(0, array.length/2), array.slice(array.length/2, array.length)]:[array.slice(0, array.length/2), array.slice(array.length/2+1, array.length)];
    
    const output=[]
    for (let i = 0, j =array2.length-1; i < array1.length; i++, j--) {         
          output.push((array1[i]+array2[j]) /2)
         };

    return output;
}
console.log();
console.log(promedioAntipode([1,2,3,5,22,6]));//[ 3.5, 12, 4 ]
console.log();
console.log(promedioAntipode([1,2,3,5,22,6,10]));//[ 5.5, 4, 12.5 ]
