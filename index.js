import PromptSync from "prompt-sync"

const prompt = PromptSync()

/*const nome = prompt("Digite seu nome: ")

console.log(`Olá ${nome}!`)

const temp = Number(prompt("Digite a temperatura: "))

if(temp > 38){
    console.log("Febre")
}
else if(temp < 35){
    console.log("Hipotermia")
}
else{
    console.log("Tudo ok")
}*/

/*    EXERCÍCIO - SALÁRIO

const salario = prompt("Digite o seu salário: ")

const porcentagem = prompt("Digite a porcentagem de aumento: ")

const salFinal = salario*(1+(porcentagem/100))

console.log(`Seu salário após o aumento é R${salFinal}`)
*/

const nascimento = prompt("Digite seu ano de nascimento: ")

const dataAtual = new Date()
const anoAtual = dataAtual.getFullYear()

const idade = anoAtual - nascimento

if(idade >= 18){
    console.log(`Você pode tirar habilitação!`)
}
else if(idade <= 0){
    console.log(`Você já pode pular da ponte!`)
}
else{
    console.log(`Você não pode tirar habilitação ainda!`)
}
