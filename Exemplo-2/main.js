console.log('Hello')
var nome = document.querySelector('#nome')
var sobrenome = document.querySelector('#idade')
var idade = document.querySelector('#idade')
var CPF = document.querySelector('#CPF')
var numero = document.querySelector('#number')
var contador1 = document.querySelector('#contador1')
var contador2 = document.querySelector('#contador2')
var contador3 = document.querySelector('#contador3')
var contador4 = document.querySelector('#contador4')
var contador5 = document.querySelector('#contador5')

function digitou(event) {
    console.log(event)
}

nome.addEventListener('keyup', digitou)
sobrenome.addEventListener('keyup', digitou)
idade.addEventListener('keyup', digitou)
CPF.addEventListener('keyup', digitou)
numero.addEventListener('keyup', digitou)