function validarIdade(idade) {
  var validar;
  if (idade >= 18) {
    validar = true;
  } else {
    validar = false;
  }
  return validar;
}

var idade = prompt("Qual sua idade?");
console.log(validarIdade(idade));

// function setReplace(frase, nome, novo_nome) {
//   return frase.replace(nome, novo_nome);
// }

// alert(setReplace("Vai Japão!", "Japão", "Brasil"));

// function soma(n1, n2) {
//   return n1 + n2;
// }

// alert(soma(5, 10));

// var d = new Date();
// alert(d.getDay());
// alert(d.getHours());
// alert(d.getMinutes());

// var count;
// for (count = 0; count <= 5; count++){
//   alert(count);
// }

// var count = 0;
// while (count <= 5) {
//   console.log(count);
//   alert(count);
//   count++;
// }

// var idade = prompt('Qual sua idade?');
// if (idade >= 18) {
//   alert("Maior de idade");
// } else {
//   alert("Menor de idade");
// }

// var frutas = [{ nome: 'maçã', cor: 'vermelha' }, { nome: 'uva', cor: 'roxa' }];
// console.log(frutas);
// alert(frutas[1].nome);

// var fruta = { nome: 'maçã', cor: 'vermelha' };
// console.log(fruta.nome);
// alert(fruta.cor);

// var lista = ['maçã', 'pêra', 'laranja'];
// lista.push('uva');
// lista.pop();
// console.log(lista);
// console.log(lista.toString());
// console.log(lista.join(' - '));

// var nome = 'Matheus Machado';
// var n1 = 5;
// var n2 = 3;
// var frase = 'Senegal é a melhor seleção do mundo';
// alert(nome + " tem " + idade + " anos");
// alert(idade + idade2)
// console.log(nome);
// console.log(n1 * n2);
// console.log(frase.toLowerCase());
// alert(frase.replace('Senegal', 'Brasil'))