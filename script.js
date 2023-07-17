function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        img.scr = 'assets/manha.png'
        document.body.style.background = ' #f0b186'

    } else if (hora >= 12 && hora < 18){
        img.src = 'assets/tarde.png'
        document.body.style.background = '#fc8c45'

    } else{
        img.src = 'assets/noite.png'
        document.body.style.background = ' #221f34'


    }

}
