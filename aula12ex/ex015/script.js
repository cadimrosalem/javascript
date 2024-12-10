function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'imagens/homemcriança.png')
            } else if (idade < 21) {
                // Adolescente
                img.setAttribute('src', 'imagens/homemjovem.png')
            } else if (idade < 60) {
                // Adulto
                img.setAttribute('src', 'imagens/homemadulto.png')
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/homemidoso.png')
            }
                
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'imagens/mulhercriança.png')
            } else if (idade <21) {
                // Adolescente
                img.setAttribute('src', 'imagens/mulherjovem.png')
            } else if (idade < 60) {
                // Adulto
                img.setAttribute('src', 'imagens/mulheradulta.png')
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/mulheridosa.png')
            }
        }           
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.` 
        res.appendChild(img)    
    }
} 
