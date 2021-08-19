const nomes = [
  "Ryan Pizani",
  "Gabriel Bello",
  "Leonardo Aguiar",
  "Humberto Silva",
];

const apenasComE = nomes.filter((n) => n.startsWith("L"));
console.log(apenasComE);

const primeiras = nomes.map((n) => n.charAt(0));
console.log(primeiras);

const todosComO = nomes.every((n) => n.startsWith("i"));
console.log(todosComO);

const numeros = [1, 2, 3, 4, 5];
const soma = numeros.reduce((ac, v) => ac + v);
console.log(soma);

const nomesComO = nomes.filter((n) => n.indexOf("o") > -1);
console.log(nomesComO);
