var valores = [2, 3, 4, 5, 8, 1]
console.log(valores)

/*
  FORMA COMPLETA

for(let pos = 0; pos < valores.length; pos++){
 console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

*/

// FORMA ABREVIADA:]

for(let pos in valores){
    console.log(`A posição ${pos} tem  valor ${valores[pos]}`)
}

// -----------------
