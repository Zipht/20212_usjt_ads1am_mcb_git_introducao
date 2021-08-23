//declaração
v1 = [];
//podemos acessar qualquer posição, começando de zero
v1[0] = 3.4;
v1[10] = 2;
v1[2] = "abc";
//aqui, v1 tem comprimento igual a 11
console.log(v1.length);
//inicializando na declaração
v2 = [2, "abc", true];
console.log(v2);
//iterando
for (let i = 0; i < v2.length; i++) {
  console.log(v2[i]);
}

console.log("v1");
for (let i = 0; i < v1.length; i++) {
  if (v1[i] != undefined) {
    console.log("posicao" + i + "valor" + v1[i]);
  } else {
    console.log("posicao" + i + "vazia");
  }
}
