console.log('Hello')
var nome = document.querySelector('#nome')
var sobrenome = document.querySelector('#idade')
var contador1 = document.querySelector('#contador1')
var contador2 = document.querySelector('#contador2')

function digitou(event) {
    console.log(event)
}

nome.addEventListener('keyup', digitou)
sobrenome.addEventListener('keyup', digitou)