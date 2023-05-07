function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res') //lembra
    if (fano.value.length == 0 || Number(fano.value) > ano) { //se tiver vazio ou for o ano atual
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
       
        var img = document.createElement('img')  //cria img no html
        img.setAttribute('id','foto') //criou um id pro img
        
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) { //se a idade for maior ou igual a 0 e menor que 10
                img.setAttribute('src','bebe-menino.png')//criança
                
            }else if (idade >= 10 && idade < 21) {
                img.setAttribute('src','jovem-menino.png')//jovem
                
            }else if (idade < 50 ) {
                img.setAttribute('src','adulto-homem.png') //adulto
            }else {
                img.setAttribute('src','idoso-homem.png')//idoso
            }
            
        }else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) { //se a idade for maior ou igual a 0 e menor que 10
                img.setAttribute('src','bebe-menina.png') //criança
            }else if (idade >= 10 && idade < 21) {
                img.setAttribute('src','jovem-menina.png') //jovem
            }else if (idade < 50 ) {
                img.setAttribute('src','adulto-mulher.png') //adulto
            }else {
                img.setAttribute('src','idoso-mulher.png') //idoso
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img) //pra aparecer um elemento img
}
}