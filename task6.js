let arr = [1,1,1]
let isSame = true
for (i = 0;i < arr.length - 1;i++){
    if (arr[i] !== arr[i+1]){
        isSame = false
        break;
    }
}
console.log(isSame)