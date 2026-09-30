// 1- Crie uma função que receba um número e retorne o dobro.
function funcaoEmDobro(numero, dobro){
    return numero * dobro
}
console.log(funcaoEmDobro(800,2))

// 2- Crie uma função que receba um número e retorne o triplo.
function funcaoEmTriplo(numero, triplo){
    return numero * triplo
}
console.log(funcaoEmTriplo(1600,3))

// 3- Crie uma função que receba dois números e retorne a soma.
function somar(n1,n2){
    return n1 + n2
}
console.log(somar(6,7))

// 4- Crie uma função que receba dois números e retorne a multiplicação.
function multiplicacao(m1, m2){
    return m1 * m2
}
console.log(multiplicacao(1000,3))

// 5- Crie uma função que receba um salário e calcule aumento de 10%. 
function aumentoSalarial(salario, aumento){
    return salario * aumento;
}

function aumentoSalarial2(salario, aumento){
    
    return salario + aumentoSalarial(salario, aumento);
}

let valorPromocao = aumentoSalarial(1692, 0.25);
let novoSalario = aumentoSalarial2(1692, 0.25);

console.log("O valor da sua promoção de acordo com seu salário é: " + valorPromocao.toFixed(2) + ".");
console.log("O valor que você ira receber a partir de agora é de: " + novoSalario.toFixed(2) + ".");

// 6 - Crie uma função que imprima números de 1 até 10.

function imprimirDeUmADez() {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}


imprimirDeUmADez();

// 7- Crie uma função que some todos os números até 10.
function somarAteDez() {
  let soma = 0;
  
  for (let i = 1; i <= 10; i++) {
    soma += i; 
  }
  
  return soma;
}

console.log(somarAteDez()); // 55