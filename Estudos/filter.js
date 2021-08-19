// Metodo filter.

//É um recurso que permite fazer a filtragem de elementos com apenas poucas linhas de comando.
//Na pratica ele faz a leitura dos elementos da array em busca de um valor de referencia passado por meio de uma função callback.
//Ao Fazer o teste em cada elemento, o metodo retorna um ou mais conteudos que atendam a especificação indicada na função callback, e armazena o resultado em uma nova variavel do tipo array
//Portanto, o resultado será o de todos os elementos que satisfaçam a condição do filtro. Vale ressaltar que a array original não sofre nenhum tipo de alteração pelo método filter().

//Função callback.

//Na prática, ela é uma função de retorno, ou seja, ela executa uma ação para que seu resultado seja utilizado em uma outra função anterior.
//const novaArray = arrayOriginal.filter(function(valorAtual, indice, varArray), thisArgumento)
//novaArray: corresponde a uma nova variável do tipo array na qual são armazenados todos os resultados que satisfaçam a condição de filtragem;
//arrayOriginal: é o objeto original que serve de base para a aplicação do método filter;
//Função callback:
//valorAtual: é obrigatório e corresponde ao valor do elemento atual da array;
//índice: é opcional e referente ao índice do atual elemento;
//varArray: valor opcional e corresponde à array a que o valorAtual pertence;
//thisArgumento: valor opcional que funciona como o valor “this” ao executar a função callback.

const numeros = [1, 2, 3, 4, , 5, 6, 7, 8, 9, 10];
function buscarNumerosPares(value) {
  if (value % 2 == 0) return value;
}
var numerosPares = numeros.filter(buscarNumerosPares);
console.log(numerosPares);

// Na primeira linha do código foi feita a declaração da variável array com os elementos necessários.
// A seguir, declaramos uma função callback, chamada buscarNumerosPares, que recebe cada elemento da array e faz um teste para identificar os números pares.
// Isso é feito por meio da divisão de cada elemento por dois e, caso o restante da operação seja zero, significa que o número avaliado é par.
// Vale ressaltar que o operador % utilizado no código retorna o valor restante da divisão entre o elemento por dois. Caso ele seja zero, identifica o número avaliado como par.
// Na próxima linha, finalmente, utilizamos o método filter(). Primeiro, declaramos uma variável do tipo array chamada numerosPares para armazenar o retorno do processamento.
//O comando numeros.filter(buscarNumerosPares) faz a chamada à função callback correspondente, por meio do envio de cada elemento da variável números.

//Existem outras formas de escrever esse mesmo código.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const retorno = numeros.filter((pares) => pares % 2 == 0);
console.log(retorno);

const estados = [
  "São Paulo",
  "Minas Gerais",
  "Rio de Janeiro",
  "Rio Grande do Norte",
  "Santa Catarina",
  "Acre",
];
function retornaEstado(value) {
  if (value.charAt(0) == "S") return value;
}
const resultado = estados.filter(retornaEstado);
console.log(resultado);

//**********************************************************************************************************************************************************************************************************************

// //Neste exemplo, vamos falar sobre uma array de variáveis do tipo objeto. É importante dizer que o tipo objeto é utilizado quando queremos armazenar mais de uma característica de um mesmo elemento.
// Por exemplo, podemos ter uma lista de produtos com as seguintes informações sobre cada item: id, descrição e categoria do produto.
// Portanto, podemos criar um objeto chamado produtos que contenha essas características e armazenar vários desses objetos em uma array.
// Em JavaScript, cada característica do objeto é chamada de propriedade. Assim, um objeto pode ter várias propriedades, que contêm um identificador e o seu valor correspondente.
//Podemos utilizar o método filter() para acessar os elementos em uma array de objetos.
//Confira o exemplo.

const produtos = [
  { id: 1, descricao: "Smartphone", categoria: "Eletrônico" },
  { id: 2, descricao: "Notebook", categoria: "Eletrônico" },
  { id: 3, descricao: "Geladeira", categoria: "Eletrodoméstico" },
  { id: 4, descricao: "Liquidificador", categoria: "Eletrodoméstico" },
  { id: 5, descricao: "Fogão", categoria: "Eletrodoméstico" },
];
function retornaEletronico(value) {
  if (value.categoria == "Eletrônico") return value;
}
const produtosEletronico = produtos.filter(retornaEletronico);
produtosEletronico.forEach((produtoEletro) => {
  console.log(produtoEletro);
});

// Primeiramente, declaramos a array com cinco objetos que vamos chamar de produtos.
// A seguir, declaramos uma função chamada retornaEletronico, que devolverá todos os objetos que sejam da categoria eletrônico.
// Perceba que a validação na função acessa a propriedade categoria para compará-la com o conteúdo desejado. Na próxima linha, é feita a declaração da variável de retorno para a aplicação do javascript filter object.
// A seguir, exibimos o resultado na console dos objetos selecionados pelo filtro.
// Para isso, utilizamos a estrutura de repetição forEach, que lê todos os elementos da array e executa o comando console.log para exibir o resultado correspondente ao depurarmos o código.

//**********************************************************************************************************************************************************************************************************************

//Outra forma de utilizar o filter() é para criar uma nova array com elementos válidos.
//Imagine uma array que tenha objetos nulos ou indefinidos junto a outros conteúdos.
//Portanto, o JavaScript array filter() pode ser uma alternativa para selecionar os elementos que tenham os dados consistentes. Confira.

const produtos = [
  {id: 1, descricao: "Smartphone", categoria: "Eletrônico"},
  {id: 2, descricao: "Notebook", categoria: "Eletrônico"},
  {id: 3, descricao: "Geladeira", categoria: "Eletrodoméstico"},
  {},
  {id: null },
  {id: NaN},
  {id: 'undefined' },
  {id: 4, descricao: "Liquidificador", categoria: "Eletrodoméstico"},
  {id: 5, descricao: "Fogão", categoria: "Eletrodoméstico"}
]
function filtrarPorDescricao(value) {
  if ('id' in value && typeof(value.id) === 'number' && !isNaN(value.id)) {
       return value;
  } 
}
const produtosValidos = produtos.filter(filtrarPorDescricao);
produtosValidos.forEach(produto => { 
  console.log(produto);
})

//No código acima, adicionamos alguns elementos inválidos e nulos para executar o teste.
//A seguir, fizemos uma função, chamada filtrarPorDescricao, que identifica os elementos inválidos e retorna apenas os que tiverem um valor numérico armazenado na propriedade id.
//Dessa forma, criamos uma nova array de objetos apenas com produtos válidos e listamos o resultado na console do navegador.