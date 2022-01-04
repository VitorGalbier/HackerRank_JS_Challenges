let num = [1, 0, 3, -2, -1, 6]
function plusMinus (arr){
    let positivo = 0
    let negativo = 0
    let zero = 0
    for(let i = 0; i<arr.length; i++){
        if(arr[i]>0){
            positivo += 1;
        }
        else if(arr[i]==0){
            zero += 1;
        }
        else if(arr[i]<0){
            negativo += 1;
        }
    }
    console.log((positivo/arr.length).toFixed(6))
    console.log((negativo/arr.length).toFixed(6))
    console.log((zero/arr.length).toFixed(6))
}
plusMinus(num)

function plusMinus (arr){
    let positivo = 0
    let negativo = 0
    let zero = 0
    arr.forEach(element => {
        if(element>0){
            positivo += 1;
        }
        else if(element==0){
            zero += 1;
        }
        else if(element<0){
            negativo += 1;
        }
    });
    console.log((positivo/arr.length).toFixed(6))
    console.log((negativo/arr.length).toFixed(6))
    console.log((zero/arr.length).toFixed(6))
}
plusMinus(num)