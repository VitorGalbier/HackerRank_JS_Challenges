// You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.

let candle = [1, 2, 4, 4]

function birthdayCakeCandles(candles) {
    let bigCandles = 0
    let maxcandle = Math.max(...candles)
    for(let i = 0; i < candles.length; i++){
        if(candles[i] == maxcandle){
            bigCandles += 1
        }
    }
    return bigCandles
}

function birthdayCakeCandles(candles) {
    let bigCandles = 0
    candles.forEach(element => { //element é cada elemento da array, o prcessamento é pior
        if(element == Math.max(...candles)){
            bigCandles += 1
        }
    })
    console.log(bigCandles)
}

birthdayCakeCandles(candle)