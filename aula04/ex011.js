var idade =  22
console.log(`Voê tem ${idade} anos.`)
if (idade < 16) {
    console.log('Não vota.')
} else if (idade < 18 || idade >= 70) {
    console.log('Voto opcional.')
} else if (idade < 70){
    console.log('Voto obrigatório.')
}