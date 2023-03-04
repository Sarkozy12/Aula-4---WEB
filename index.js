import PromptSync from "prompt-sync"

import chalk from "chalk"

const prompt = PromptSync()

let x = 0

let valor = Number(prompt("Digite quantos números deseja informar: "))

let soma = 0

while(x < valor){
    soma += Number(prompt(chalk.bgGreen.blue(`Digite o ${x+1}º número: `)))
    x++
}

const media = soma/valor

console.log(chalk.bgCyan.red(`A média dos números é: ${media}`))


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

/* EXERCÍCIO - HABILITAÇÃO
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
}*/


