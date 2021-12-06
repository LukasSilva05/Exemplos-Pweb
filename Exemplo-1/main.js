function passouAqui(element) {
    var header = document.querySelector("#header")
    header.style.backgroundColor = 'blue'
}

function saiuDaqui(element) {
    var header = document.querySelector("#header")
    header.style.backgroundColor = "red"
}

var footer = document.querySelector("#footer")
footer.addEventListener("mouseover", passouAqui)
footer.addEventListener("mouseout", saiuDaqui)

function passouAqui2(element) {
    var footer = document.querySelector("#footer")
    footer.style.backgroundColor = "red"
}

function saiuDaqui2(element) {
    var footer = document.querySelector("#footer")
    footer.style.backgroundColor = "blue"
}

var header = document.querySelector("#header")
header.addEventListener("mouseover", passouAqui2)
header.addEventListener("mouseout", saiuDaqui2)

let form = document.querySelector("#form-principal")

form.addEventListener("submit", event => {
    event.preventDefault();

    let texto = document.querySelector('#tarefa').value

    alert(texto);
})