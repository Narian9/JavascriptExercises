/*Crear un programa para vcerificar la edad de un usuario
debe ser mayor a 18 para true
parametro año de nacimiento
return 
mensaje */
let today = new Date();
const actualYear = today.getFullYear();

const ageCheck = year => (actualYear-year)>= 18? true:false ;
console.log(ageCheck(2000));

console.log("par");
const parImpar = (n) => {
    return (n % 2 == 0 && n != 0) ? true : false;
}

const evenOdd = (n) => {
    if (n % 2 == 0 && n != 0) {
        return true
    } else {
        return false
    }
}

const evenOdd2 = n => {
    let res = false;

    if (n % 2 == 0 && n != 0) {
        res = true;
    }

    return res;
}

// console.log(evenOdd2(16))

let futureDate = new Date('2023-02-18 10:57');

const businessHours = (time) => time<18 && time>9 ? true:false;
const businessDay = (actualDate) => actualDate.getDay() <= 6 ? true:false ;

const laboralDay = (actualDay)=>{
    let hours   = actualDay.getHours();
    return businessDay(actualDay) && businessHours(hours) ?
            "Es horario laboral": "No es horario laboral";    
}
console.log(laboralDay(today));
console.log(laboralDay(futureDate));

/* Escribir una funcion que regrese la cantidad de valores true que hay en un array*/

const countTrue = (arr)=>  arr.filter(e => e==true).length;    

console.log(countTrue([true, false, false, true, false]));//2
console.log(countTrue([false, false, false, false]));//0
console.log(countTrue([]));//0


// Escribir una funcion para encontrar el mayor comun divisor de 2 numeros positivos enteros
// Usar recursion
const findDivisor = (a,b) => {
    let [min,max] = [a,b].sort((a,b) => a-b)
   
    for (let i = max; i >0; i--) {
        if(min%i+max%i ===0 ){
            return i;
        }       
    }
};
const recursiveFindDivisor = (a,b, i=0) => {
    let [min,max] = [a,b].sort((a,b) => a-b);
    i= i==0?max:i;  
    return min%i+max%i ==0 ?i:recursiveFindDivisor((min),(max),i-1);    
}

console.log(findDivisor(28,24));
console.log(recursiveFindDivisor(28,24));//
// Encontrar los primeros n elementos de la serie fibonacci
// Usar recursion
const recursiveFibonacci = (number, arr) =>{   
    const numbers = arr ==null? []:[...arr];
    let fzero  = arr ==null? 0:isNaN(arr[arr.length -2])?0:arr[arr.length -2];    
    let fNplus = arr ==null? 1:isNaN(arr[arr.length -1])?1:arr[arr.length -1];
    let fn     = 0;

    fn     = fNplus+fzero;
    fNplus = fzero;
    fzero  = fn;
    numbers.push(fn);  

    return number==0? numbers:recursiveFibonacci(number-1, numbers)
}
console.log(recursiveFibonacci(15));
//console.log(fibonacci(10, []));


  // Encontrar el numero n de una figura piramidal triangular (tetrahedron)
// (nivel) -> cantidad de numeritos

/**espero un array [1,3,6,10,15] 
 *           nivel [1,2,3,4,5,6]
*/
const piramidalNumber =(nivel) =>{
    let sum = 0;
    const arr = [];
    for (let n = 1; n <= nivel; n++) {  
        for (let i = n+1; i > n; i--) {
            let number =0;
            let tplus = arr ==null? 1:isNaN(arr[arr.length -1])?0:arr[arr.length -1]; 
            number = n +tplus;
            //console.log((n+i));
            arr.push(number);
            sum+=number;            
        }     
    }
    return sum//
}
console.log(piramidalNumber(6));
console.log(piramidalNumber(3));


// Crear una funcion que tome el nombre de un pais y su area
// (nombre, a)
// Debe regresar la proporcion del area del pais en acorde a el area de tierra en el planeta
//('Russia', 17098242) -> Russia is 11.48%
// ("USA", 9372610) -> "USA is 6.29%.

const percentOfWorldArea = (country="country", area=0) =>{
    const worldArea = 155438563.63;//
    return `${country} is ${(area/worldArea) *100}%`
}
console.log(percentOfWorldArea('Russia', 17098242));
console.log(percentOfWorldArea("USA", 9372610));

// Escribir una funcion que retorne 0 si el input es 1 y 1 si el input es 0
// No se pueden utilizar condicionales, ternarios, negaciones ni operatores bit
const oneOrZero = (num) => {
    switch (num) {
        case 0:
            return 1;
        case 1:
            return 0;           
        default:
           return "No es 0 ni 1";            
    }
}
console.log(oneOrZero(0));
console.log(oneOrZero(1));
// Messenger bzzz
// (0 ) n

// Si no hay nadie -> "No hay nadie en linea"
// Si hay 1 persona -> "user1 esta en linea"
// Si hay 2 personas -> "user1 y user2 estan en linea"
// Si hay n>2 personas, "user1 y n-1 mas estan en linea"

const messengerBz =(usersOnline, text="") =>{
    let outputText = text;
    if(usersOnline == 0 && text.length ==0){
        return "No hay nadie en linea";
    }else if ( usersOnline ==1 && text.length ==0){
        return `user${usersOnline} esta en linea` 
    }else if (usersOnline>1 ){
        outputText = `, user${usersOnline}`+ text;
    }else if(usersOnline ==1 && text.length!==0){
        outputText =`User${usersOnline} y${text} están en linea` ;
        messengerBz(usersOnline-1,outputText);
    }else {
        return outputText;
    }
    return (usersOnline>1)?messengerBz(usersOnline-1,outputText):outputText;
}
// console.log( ("").length);
// console.log( messengerBz(0) );
console.log( messengerBz(1) );
console.log( messengerBz(3) );
console.log( messengerBz(5) );//User1 y, user2, user3, user4, user5 están en linea
