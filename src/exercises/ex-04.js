let weight = Number(process.argv[2]);
let heightCm = Number(process.argv[3]);

let heightM = heightCm / 100;

let bmi = weight / (heightM * heightM);

console.log("Gewicht: " + weight + " kg");
console.log("Körpergrösse: " + heightCm + " cm");
console.log("BMI: " + bmi.toFixed(2));
