const tituloDaHome = document.getElementById("title-home")

tituloDaHome.innerHTML = "Emerson"
tituloDaHome.style.color = '#c2c2c2'
tituloDaHome.setAtribute('style', 'color #202020', 'font-size: 80px')

const buttonHome = document.getElementById('btn-home')

buttonHome.innerHTML = 'Clique aqui'
buttonHome.addEventListener('click', () => {
    alert('Você clicou no botão !')
})

console.log('secondTitleQuery', secondTitleQuery)
