let s = 7//ponto inicial da casa
let t = 11//ponto final da casa
let a = 5//arvore a
let b = 15//arvore b
let macas = [-2, 2, 1]//posições maças
let laranja = [5, -6]//posições laranjas
function tree (dInicialdaCasa, dFinaldaCasa, lcMaca, LcLaranja, qtdMaca, qtdLaranja){
    let macasPegas = 0//colheita de maçãs
    let laranjasPegas = 0 //colheita de laranja

    for(let i=0; i<qtdMaca.length; i++){
        if(qtdMaca[i]+lcMaca >= dInicialdaCasa && qtdMaca[i]+lcMaca <= dFinaldaCasa){
            macasPegas += 1
        }
    }
    for(let j = 0; j<qtdLaranja.length; j++){
        if(qtdLaranja[j]+LcLaranja >= dInicialdaCasa && qtdLaranja[j]+LcLaranja <= dFinaldaCasa){
            laranjasPegas += 1
        }
    }
    console.log(macasPegas)
    console.log(laranjasPegas)
}

tree(s, t, a, b, macas, laranja)