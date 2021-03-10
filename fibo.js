function fibonanci(number){
    let numberList = [1,1,2,3,5,8,13,21,34,55,89]
    for(let i = 1; i<=number;i++){
        if(i<=2){
            numberList.push(1)
        } else {
            numberList.push(numberList[i-3]+numberList[i=2])
        }
    }
    return numberList[numberList-1]
}
console.log(fibonanci(6))