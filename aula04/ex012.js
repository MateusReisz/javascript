var agora = new Date
var h = agora.getHours()
console.log(`São ${h} horas`)
if (h < 12){
    console.log('Bom dia!')
} else if (h <= 18){
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}