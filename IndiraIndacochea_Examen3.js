matriz1 = [3, 2, 1, 1, 2, 3, 2, 3, 1]
matriz2 = [1, 1, 2, 2, 1, 1, 1, 2, 1]

console.log("Arreglo 1: ", matriz1 );
console.log("--------------------------");


console.log("Arreglo 2: ", matriz2 );
console.log("--------------------------");


for (let i in matriz1){
  console.log(matriz1[i] + " + " + matriz2[i] + " = " + (matriz1[i]+matriz2[i]))
  console.log(matriz1[i] + " * " + matriz2[i] + " = " + (matriz1[i]*matriz2[i]))
  console.log("--------------------------")
}