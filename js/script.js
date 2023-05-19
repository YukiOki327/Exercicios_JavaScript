function Executar05() {
    let valor05 = parseInt(prompt("Digite um lavor: "))
    let resultado05 = parseInt(valor05 - 1)
    alert("Seu antecessor é : " + resultado05)
}

function Executar06() {
    let base06 = parseFloat(prompt("Digite a base do triangulo: "))
    let altura06 = parseFloat(prompt("Digite a altura do triangulo: "))
    let resultado06 = (base06 * altura06)
    alert("Sua Area do triangulo é: " + resultado06)
}

function Exercicio07() {
    let idade07 = parseInt(prompt("Digite sua idade"))
    let dia07 = parseInt(prompt("Digite que dia estamos"))
    let resultado07 = (idade07 * 365) * 30
    alert("Você tem" + resultado07 + "de dias vividos")
}

function Executar08() {
    let votosBrancos = parseInt(prompt("Digite o valor de votos brancos"))
    let votosNulos = parseInt(prompt("Digite o valor de votos nulos "))
    let votosValidos = parseInt(prompt("Digite o valor de votos validos "))
    let votosB = (votosBrancos / 100)
    let votosN = (votosNulos / 100)
    let votosV = (votosValidos / 100)
    let resultado08 = ("Votos Brancos" + votosB, "Votos Nulos" + votosN, "Votos Validos" + votosV)
}

function Executar09() {
    let salario09 = parseFloat(prompt("Digite o valor de seu salario."))
    let percentual09 = parseFloat(prompt("Digite seu percentual por ano."))
    let saldo09 = (salario09 / percentual09)
    let resultado09 = saldo09 + salario09
    alert("Seu salario sera de: " + resultado09)
}

function Executar10() {
    let custoCarro10 = parseFloat(prompt("Digite o valor da fabricação do carro."))
    let valor10 = 45 / 100 * (custoCarro10)
    let valor010 = 28 / 100 * (custoCarro10)
    let resultado10 = valor10 / 100
    let resultado010 = valor010 / 100
    let valorTotal10 = custoCarro10 + resultado10 + resultado010
    alert("Seu valor de campra de um carro total é: " + valorTotal10)

}

function Executar11() {
    let salario11 = parseFloat(prompt("Digite o valor de seu salario."))
    let comissão11 = 5 / 100 * (salario11)
    let carrosVendidos11 = parseFloat(prompt("Digite o valor de carros vendidos."))
    let calculo11 = carrosVendidos11 * comissão11
    let resultado11 = calculo11 + salario11
    alert("Seu salario sera de: " + resultado11)
}

function Executar14() {
    let numero14 = parseInt(prompt("Digite um valor."))
    if (numero14 > 10) {
        alert("Este valor é maior que 10.")
    } else {
        alert("Este valor não é maior que 10.")
    }
}

function Executar15() {
    let numero15 = parseInt(prompt("Digite um valor"))
    if (numero15 >= 0) {
        alert("Este numero é positivo")
    } else {
        alert("Este numero é negativo")
    }
}

function Executar16() {
    let Maças16 = parseFloat(prompt("Digite quantas maçãs você quer comprar."))
    if (Maças16 < 12) {
        alert("Vai custar " + "R$" + Maças16 * 1.30)
    } else {
        alert("Vai custar " + "R$" + Maças16 * 1.00)
    }
}

function Executar17() {
    let PrimeiraAvaliacao17 = parseFloat(prompt("Qual foi sua nota na Primeira Avaliação"))
    let SegundaAvaliacao17 = parseFloat(prompt("Qual foi sua nota na Segunda Avaliação"))
    let calculo17 = (PrimeiraAvaliacao17 + SegundaAvaliacao17)
    let resultado17 = calculo17 / 2
    if (resultado17 > 6) {
        alert("Você foi aprovado e sua nota foi de" + resultado17)
    } else {
        alert("Você foi aprovado e sua nota foi de" + resultado17)
    }
}

function Executar18() {
    let anoAtual18 = parseInt(prompt("Digite que ano estamos."))
    let anoNacimento18 = parseInt(prompt("Digite o ano que você naceu."))
    let resultado18 = anoAtual18 - anoNacimento18
    if (resultado18 > 16) {
        alert("Você pode votar. Porque você tem" + resultado18 + " anos")
    } else {
        alert("Você não pode votar. Porque você tem" + resultado18 + " anos")
    }
}

function Executar19() {
    let valorUm19 = parseInt(prompt("Digite um valor."))
    let valorDois19 = parseInt(prompt("Digite outro valor"))
    if (valorUm19 == valorDois19) {
        alert("Você não pode colocar dois numeros iguais.")
    } else {
        if (valorUm19 > valorDois19) {
            alert(valorUm19)
        } else {
            alert(valorDois19)
        }
    }
}

function Executar20() {
    let valorUm20 = parseInt(prompt("Digite um valor."))
    let valorDois20 = parseInt(prompt("Digite outro valor."))
    if (valorUm20 == valorDois20) {
        alert("Você não pode colocar dois numeros iguais.")
    } else {
        if (valorUm20 > valorDois20) {
            alert(valorUm20 + " , " + valorDois20)
        } else {
            alert(valorDois20 + " , " + valorUm20)
        }
    }
}

function Executar21() {
    let horaInicial21 = parseInt(prompt("Que horas iniciou o jogo."))
    let horaFinal21 = parseInt(prompt("Que horas terminou."))

}

function Executar22() {
    let
}