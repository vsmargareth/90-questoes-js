//Ler dois números inteiros e exibir o quociente e o resto da divisão inteira entre eles.

let n1 = Number(prompt("digite um numero"))
let n2 = Number(prompt("digite outro numero"))
// let n1 = 3;
// let n2 = 4;


let divisao = (n1 / n2).toFixed(2);
let resto = (n1 % n2).toFixed(2)

alert(`A divisão de ${n1} por ${n2} é ${divisao} e o resto é ${resto}`)