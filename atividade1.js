// 1 - crie um algoritmo que imprime no console de 10 a 60, 
// iterando a cada 5, exceto para os numeros 35 e 45 
// que irão ser substituidos pela palavra "PULOU".

let inicio = 5

while( inicio <= 55){
    inicio+=5
    if(inicio ===35 || inicio===45){
        console.log('PULOU')
        continue
    }
    
    console.log(inicio)
}