function contar(){
    var ini = document.getElementById('txin')
    var fim = document.getElementById('txfim')
    var pass = document.getElementById('txpas')
    var res = document.querySelector('div#res')

    if (ini.value.length == 0 || fim.value.lenght == 0 || pass.value.lenght == 0){
        res.innerHTML = 'Impossivel contar'
    } else {
       res.innerHTML = 'Contando: <br>'
       var i = Number(ini.value)
       var f = Number(fim.value)
       var p = Number(pass.value)
       if(i <= 0){
        window.alert('Passo invalido! Considerando PASSO 1')
        p = 1
       }
       if(i < f){
        for(var c = i; c <= f; c += p) {
            res.innerHTML += `${c} \u{1f449}`
       } 
    } else {
        for(var c = i; c >= f; c -= p){
            res.innerHTML += `${c} \u{1f449}`
        }
    }
    res.innerHTML += `\u{1f3c1}`
    }
}