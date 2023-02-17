let nameOfTheSpaceShuttle = "Determination" ;
let shuttleSpeedMph      = 17500 ;
let distanceToMarsKm     = 225000000 ;
let distanceToTheMoonKm  = 384400 ;
let milesPerKilometer    = 0.621 ;
let milesToMars          = distanceToMarsKm * milesPerKilometer;
let hoursToGetToMars     = milesToMars / shuttleSpeedMph;
let daysToGetToMars      = hoursToGetToMars / 24;

let milesToMoon          = distanceToTheMoonKm * milesPerKilometer;
let hoursToGetToMoon    = milesToMoon / shuttleSpeedMph;
let daysToGetToMoon      = hoursToGetToMoon / 24;

console.log(nameOfTheSpaceShuttle, typeof nameOfTheSpaceShuttle);
console.log(shuttleSpeedMph,typeof shuttleSpeedMph);
console.log(distanceToMarsKm,typeof distanceToMarsKm);
console.log(distanceToTheMoonKm,typeof distanceToTheMoonKm);
console.log(milesPerKilometer,typeof milesPerKilometer);

console.log(`${nameOfTheSpaceShuttle} will take ${daysToGetToMars} days to reach Mars.`);
console.log(`${nameOfTheSpaceShuttle} will take ${daysToGetToMoon} days to reach the Moon.`);