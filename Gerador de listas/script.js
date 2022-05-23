const btnDouble = document.querySelector("#double");
const btnCrash = document.querySelector("#crash");
const btnCriar = document.querySelector("#criar");
const btnCopy = document.querySelector("#copy");
const quantidade = document.querySelector("#quantidade");
const padrao = document.querySelector("#padrao");
const eleCor = document.querySelector("#elecor")
const hora = document.querySelector('#hora')
const resultado = document.querySelector('.resultado')
const divElement = document.querySelector("#element");
const divCor = document.querySelector("#cor");
const divCriar = document.querySelector("#divCriar")
const divCopiar = document.querySelector("#divCopiar")
let game = ''
let sinais = []

btnDouble.addEventListener("click", (e) => {
    e.preventDefault()
    divElement.style.display = 'block';
    divCor.style.display = 'block';
    divElement.style.height = '350px';
    divCriar.style.display = 'block';
    divCopiar.style.display = 'none';
    hora.value = '';
    quantidade.value = '';
    padrao.value = '';
    eleCor.value = '0';
    game = 'DOUBLE'
    resultado.innerHTML = ''

})

btnCrash.addEventListener("click", (e) => {
    e.preventDefault()
    divElement.style.display = 'block';
    divCor.style.display = 'none';
    divElement.style.height = '250px';
    divCriar.style.display = 'block';
    divCopiar.style.display = 'none';
    hora.value = '';
    quantidade.value = '';
    padrao.value = '';
    eleCor.value = '';
    game = 'CRASH'
    resultado.innerHTML = ''
})
btnCriar.addEventListener('click', (e) => {
    resultado.innerHTML = ''
    e.preventDefault()
    let hr = document.querySelector('#hr')
    hr.style.display = 'block';
    divCopiar.style.display = 'block';

    let dom1 = Number(hora.value.split(':')[0])
    let dom2 = Number(hora.value.split(':')[1])
    if (hora.value === "" || quantidade.value === "" || padrao.value === "") {
        alert("PREENCHA TODOS OS CAMPOS")
        location.reload()
    }
    else {
        for (let i = 0; i < quantidade.value; i++) {
            dom2 += Number(padrao.value)
            if (dom2 > 59) {
                dom2 -= 60
                dom1 += 1
            }
            if (dom1 > 23) {
                dom1 -= 24
            }
            if (game === 'DOUBLE') {
                if (eleCor.value == 1) {
                    resultado.innerHTML += `<div>${('0000' + dom1).slice(-2)}:${('0000' + dom2).slice(-2)} &#x1F534;&#x26AA;</div>`
                }
                else {
                    resultado.innerHTML += `<div>${('0000' + dom1).slice(-2)}:${('0000' + dom2).slice(-2)} &#x26AB;&#x26AA;</div>`
                }
            }
            else if (game === 'CRASH') {
                resultado.innerHTML += `<div>${('0000' + dom1).slice(-2)}:${('0000' + dom2).slice(-2)} &#128200;</div>`
            }
        }
    }
  
})


btnCopy.addEventListener("click", () => {
    navigator.clipboard.writeText(resultado.innerText)
})
