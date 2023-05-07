function contar() {
    let ini = document.getElementById('in') //pode usar (var) ou (let) lembre
    let fim = document.getElementById('fm')
    let passo = document.getElementById('pa')
    let res = document.getElementById('res')
    
//se o inicio||fim||passo tiver vazio...
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        //window.alert('[ERRO] faltam dados!')
        res.innerHTML = 'Impossivel contar!'
    } else {
        res.innerHTML = 'Contando: <br/>'
//converter os valores digitados pra numeros
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo Inválido! considerando PASSO 1')
            p = 1 //se o passo for 0, vai passar a considerar como 1
        }
//Contagem crescente
        if (i < f) { 
            for(let c=i; c<=f; c+=p) { //contador começa em (inicio),enquanto o c for menor= ao (fim), vai receber ele mesmo +(p)
                res.innerHTML += `${c} \u{1F449}`//vai ser oq ja tem('Contando...') mais igual(concatenado) a contagem(c)
            }
//Contagem decrescente
        } else{
            for (let c=i; c>=f; c-=p) {//começa com (i), enquanto (c) for maior= ao (fim), vai perder o (p)
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}
