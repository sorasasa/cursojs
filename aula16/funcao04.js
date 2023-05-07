function fatorial (n) {
    let fato = 1 
    for (let c = n; c > 1 ; c --) {//começa no numero e enquanto ele for maior que 1, ele vai diminuir de 1 em 1
        fato *= c //fatorial recebe ele mesmo vezes c
    }
    return fato
}
console.log(fatorial(5)) //funçao != fato
//5!= 5 x 4 x 3 x 2 x 1 = 120