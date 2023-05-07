function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('por favor digite um número')
    } else {
        let n = Number(num.value) //o valor digitado em (num)
        let c = 1
        tab.innerHTML = '' //antes de começar a mostrar a tabuada, é limpa a area
        while (c <= 10) {
            let item = document.createElement('option') //nova variavel
            item.text = `${n} x ${c} = ${n*c}` //(c) que começa com 1 && (n=num convertido pra n) q foi digitado
            item.value = `tab${c}`
            tab.appendChild(item) 
            c++ //adiciona (c=1) + 1
        }
    }
}