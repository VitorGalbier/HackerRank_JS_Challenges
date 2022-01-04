//         0  1   2
let num= [[1, 2, 3],//0 
          [4, 5, 6],//1
          [9, 8, 9]]//2
function diagonalDifference(arr){
    let rightD = 0;
    let leftD = 0;
    for(i=0; i<arr.length; i++){
        for(j=0; j<arr.length; j++){
            if(i==j){
                rightD += arr[i][j];
            } 
            if(i + j == arr.length -1){
                leftD += arr[i][j];
            }
        }
    }
    return rightD > leftD ? rightD - leftD : leftD - rightD;
}


function diagonalDifference(arr) {
    let a = arr.reduce((s, v, i) => s + v[i], 0);
    let b = arr.reduce((s, v, i) => s + v[(v.length-1)-i], 0);
    return a > b ? a - b : b - a;
}
diagonalDifference(num)