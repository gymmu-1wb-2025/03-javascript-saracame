let weight = 55;
let heightCm = 165;

let heightM = heightCm / 100;

let bmi = weight / (heightM * heightM);

console.log("Gewicht: " + weight + " kg");
console.log("Körpergröße: " + heightCm + " cm");
console.log("BMI: " + bmi.toFixed(2));
