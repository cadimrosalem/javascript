function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()        
    
    if (hora >= 0 && hora < 12) {
        msg.innerHTML = `Agora são ${hora} horas, Bom dia`
        img.src = 'imagens/fotomanha.png'
        document.body.style.background = '#697c7a'
    } else if (hora >= 12 && hora <= 18) {
        msg.innerHTML = `Agora são ${hora} horas, Boa tarde`
        img.src = 'imagens/fototarde.png'
        document.body.style.background = '#ca9d50'
    } else {
        msg.innerHTML = `Agora são ${hora} horas, Boa noite!`
        img.src = 'imagens/fotonoite.png'
        document.body.style.background = '#1c2a37'
    }
}
