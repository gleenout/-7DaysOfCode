const nome = prompt("Qual o seu nome?");

const idade = prompt("Quantos anos você tem?");

const linguagem = prompt("Qual linguagem de programação você está estudando?");

alert(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`);

let gostaDaLinguagem;
let naoGostaDaLinguagem;
let tentouOutraLinguagem

gostaDaLinguagem = prompt(`Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO`);

if (gostaDaLinguagem === "1") {
  alert("Muito bom! Continue estudando e você terá muito sucesso.");

} else if (gostaDaLinguagem === "2") {
  naoGostaDaLinguagem = prompt("Ahh que pena... Já tentou aprender outras linguagens? Responda com o número 1 para SIM ou 2 para NÃO");

    if (naoGostaDaLinguagem ==="1"){
      tentouOutraLinguagem = prompt("Qual linguagem você tentou aprender?");
      alert(`Que bom! Continue estudando ${tentouOutraLinguagem}.`);

    } else if (naoGostaDaLinguagem === "2"){
      alert("É uma pena mesmo. Tente! Você consegue!")

    } else {
      alert("Resposta inválida. Por favor, responda com 1 para SIM ou 2 para NÃO.");
    }

} else {
  alert("Resposta inválida. Por favor, responda com 1 para SIM ou 2 para NÃO.");
}