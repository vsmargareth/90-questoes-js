// Dado o tamanho da base e da altura de um retângulo, calcular a sua área e o seu perímetro.
let base = 10
let altura = 7;

let area = (base * altura).toFixed(2);
let perimetro = (base + base + altura + altura).toFixed(2);

console.log(`A área do retângulo é ${area} e o perímetro é: ${perimetro}`)