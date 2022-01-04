/*Crie uma função, que após 5 segundos, dobre o resultado do número passado como parâmetro. Essa função deverá retornar uma Promise. Use o setTimeOut como temporizador.*/


function dobro(n) {
    return new Promise((resolve) => {
        setTimeout(() => { resolve(n * 2) }, 1000)
    }
    ).then((resultado) =>resultado)
}

/*Crie uma função assíncrona que irá receber um parâmetro x. Crie três variáveis: a, b e c dentro do corpo da função. Cada uma dessas variáveis receberá um await da função do passo anterior. Você deve passar como parâmetros dessa função os números 10, 20 e 30, respectivamente.
Retorne a soma de todos esses elementos, inclusive
o parâmetro da função assíncrona.*/

async function naoToEntendendo(x){
    let a = await dobro(10)
    console.log(a)
    let b = await dobro(20) + a
    console.log(b)
    let c = await dobro (30) + b
    console.log(c)
    console.log(c + x)
}
naoToEntendendo(1)