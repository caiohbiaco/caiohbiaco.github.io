var nome = "Santos";
let idade = 25;
const cidade = "São Paulo";

console.log("Nome é: ", nome);
console.log("Idade é: ", idade);
console.log("Cidade é:", cidade);


//exemplo de objeto
const pessoa = {
    nome: "Caio",
    idade: 23,
    sexo: "Masculino",
    telefone: "(42) 66666-6666"
}

console.log(pessoa);

let cachorro = {
    nome: 'doge',
    idade: '5',
    vacinado: false
}

cachorro.nome = "Banzudo";
cachorro.vacinado = true;

console.log(cachorro);

//concatenação de strings
let nomeCompleto = "Caio Henrique";
let message = "Bem vindo" + nomeCompleto + "ao sistema";

console.log(message);

//operações com numbers
let a = 333;
let b = 335;
let total = a + b;

console.log("O total é:", total);

//conversão para string
let turma = 1;
let turmaFormatado = String(turma);

console.log(turmaFormatado);

//conversão para number
let telefone = "42999999999";
let telefoneFormatado = Number(telefone);
console.log(telefoneFormatado);