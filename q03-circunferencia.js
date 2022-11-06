//Dado o tamanho do raio de uma circunferência, calcular a área e o perímetro da mesma.
let raio = 5;
let area = (Math.PI * (raio ** 2)).toFixed(2)
let perimetro = (2 * Math.PI * raio).toFixed(2)

console.log(`A area da circuferencia é: ${area} e o perímetro é: ${perimetro}`)