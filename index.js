/*
---------------------------------------------------------------------------
Olá, td bem ?

Escolhi o Javascript por ter mais experiência com esta linguagem, achei vantajoso por conseguir ser eficiente e produtivo.

---------------------------------------------------------------------------
*/
let player = document.getElementById('player'),
    cpu = document.getElementById('CPU'),
    resultSorteio,
    btnPedra = document.getElementById('pedra'),
    btnPapel = document.getElementById('papel'),
    btnTesoura = document.getElementById('tesoura'),
    playerPoints = 0,
    cpuPoints = 0,
    empatePoints = 0,
    playerPointElement = document.getElementById('playerPointElement'),
    cpuPointElement = document.getElementById('cpuPointElement'),
    empatePointElement = document.getElementById('empatePointElement'),
    reiniciar = document.getElementById('reiniciar'),
    result = document.getElementById('result');

const options = ['🪨 Pedra', '📄 Papel', '✂️ Tesoura']

function sorteio() {
    let numeroSorteio = Math.floor(Math.random() * 3)
    resultSorteio = options[numeroSorteio]
    cpu.innerText = resultSorteio
}

function addPointPlayer() {
    playerPoints++
    playerPointElement.innerText = playerPoints
}

function addPointCpu() {
    cpuPoints++
    cpuPointElement.innerText = cpuPoints
}

function addEmpatePoints() {
    empatePoints++
    empatePointElement.innerText = empatePoints
}

btnPapel.addEventListener('click', () =>{
    sorteio() 
    player.innerText = '📄 Papel'
    switch (resultSorteio) {
        case options[0]:
            addPointPlayer()
            result.innerText = "Jogador ganhou 😁"
            break;

        case options[1]:
            addEmpatePoints()
            result.innerText = "Empate 😑"
            break;
        
        case options[2]:
            addPointCpu()
            result.innerText = "Computador ganhou!"
            break;
        default:
            break;
    }
})

btnPedra.addEventListener('click', () =>{
    sorteio() 
    player.innerText = '🪨 Pedra'
    switch (resultSorteio) {
        case options[0]:
            addEmpatePoints()
            result.innerText = "Empate 😑"
            break;

        case options[1]:
            addPointCpu()
            result.innerText = "Computador ganhou!"
            break;
        
        case options[2]:
            addPointPlayer()
            result.innerText = "Jogador ganhou 😁"
            break;
        default:
            break;
    }
})

btnTesoura.addEventListener('click', () =>{
    sorteio()     
    player.innerText = '✂️ Tesoura'
    switch (resultSorteio) {
        case options[0]:
            addPointCpu()
            result.innerText = "Computador ganhou!"
            break;

        case options[1]:
            addPointPlayer()
            result.innerText = "Jogador ganhou 😁"
            break;
        
        case options[2]:
            addEmpatePoints()
            result.innerText = "Empate 😑"
            break;
        default:
            break;
    }
})

reiniciar.addEventListener('click', ()=>{
    playerPoints = 0
    cpuPoints = 0
    empatePoints = 0
    playerPointElement.innerText = playerPoints
    cpuPointElement.innerText = cpuPoints
    empatePointElement.innerText = empatePoints
    player.innerText = "Opção escolhida"
    cpu.innerText = "Opção escolhida"
    result.innerText = ""
})