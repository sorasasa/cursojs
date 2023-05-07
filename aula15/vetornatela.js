let valores = [5,3,2,7,4,3,9] //vetor
valores.sort()
/*
for (var pos=0; pos < valores.length;pos++) { //variavel
    console.log (`A posição ${pos} tem como valor ${valores[pos]}`) 
}
*/
for (let pos in valores) {
    console.log(`A posição ${pos} tem como valor ${valores[pos]}`)
}