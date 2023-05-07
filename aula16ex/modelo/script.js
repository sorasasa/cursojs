//aq vai as variaveis globais
    let num = document.getElementById('txtn')//numero digitado
    let lista = document.getElementById('flista')
    let res = document.getElementById('res')
    let valores = [] //vetor vazio pra adicionar os dados//os valores digitados vem pra cá

//só vai aceitar numeros entre 1 e 100
function isNumero(n){
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    }else {
        return false
    }
}
//vai receber um numero e uma lista
function inLista(n, l){
    if (l.indexOf(Number(n)) != -1) { //(-1) significa q o valor nao foi encontrado na lista
        return true
    }else {
        return false
    }
}
//vai verificar E ADICIONAR SOMENTE SE *for* um numero e *se* ja estiver na lista
function adicionar(){
//(!)=não//lista de valores
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value)) //push adiciona um elemento em um vetor #aula 15
        var item = document.createElement('option') //cria uma tag html
        item.text = `Valor ${num.value} adicionado` //item tem o valor text, ou seja o conteudo é uma string
        lista.appendChild(item) //vai aparecer/adicionar o elemento criado dentro da lista
        res.innerHTML='' //quando conseguir, tem q apagar o resultado (dps de finalizar e adicionar outro numero)
    }else {
        window.alert('Valor inválido ou ja inserido na lista')
    }
    num.value="" //independente do if-else vai apagar o valor do input-text depois de digitado
    num.focus() //essa função vai fzr o input-text voltar a ter foco de digitação(sem precisar clicar)

}
function finalizar(){
    if (valores.length==0){ //se a lista tiver vazia (tanto no array quanto no select)
        window.alert('Adicione valores antes de finalizar!')
    }else {
        let tot = valores.length //pra saber quantos elementos(tag options) o vetor tem//
//vai analisar um por um cada valor do laço
        let maior = valores[0]
        let menor = valores[0]//o menor e o maior numero ate o momento é o primeiro//
        let soma = 0
        let media = 0
//laço de percurso, pra varrer o vetor inteiro, aula de array
//cria variavel '(pos)ição' dentro do vetor 'valores'(numero digitado vai pra dentro de [pos] tmb??)
        for (var pos in valores){ 
            soma += valores[pos] //soma recebe soma(0) + o valor digitado
            if (valores[pos] > maior) //se o valor [pos] for maior que o 'maior valor'...
                maior = valores[pos] //o 'maior valor' passa a ser [pos]
            if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }
//saber onde declarar a variavel é importante
        media = soma / tot
        res.innerHTML= '' //p zerar o valor (??)
        res.innerHTML += `<p>Ao todo temos ${tot} valores cadastrados.</p>` //oq ele tem += a string
        res.innerHTML += `<p>O maior valor digitado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor digitado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }
}