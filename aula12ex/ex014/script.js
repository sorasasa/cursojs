function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 16
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src = 'diamodelo.png'
        document.body.style.background = '#d1c3b4'
    }else if (hora >= 12 && hora <= 18) {
        //boa tarde
        img.src = 'tardemodelo.png'
        document.body.style.background = '#c68c64'
    }else {
        //boa noite
        img.src = 'noitemodelo.png'
        document.body.style.background = '#aa769d'
    }
}
