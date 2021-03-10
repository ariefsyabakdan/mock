function show() {
    var userInput = document.getElementById("inputanuser").value

    var startNum = [0]

    // for (let i = 1; i <= userInput; i++) {
    //     if (i == 1) {
    //         startNum.push(0)
    //         console.log("hehe" + startNum)
    //     } else if (i == 2) {
    //         startNum.push(1)
    //         console.log("hoho" + startNum)
    //     } else {
    //         var nextNum = startNum[i - 2] + startNum[i - 3]
    //         console.log("hihi" + startNum[i-1] + startNum[i-2])
    //         startNum.push(nextNum)

    //     }
    // }
    // console.log(startNum)

    let i = 2       
    while (startNum[startNum.length - 1] < 100) {
        if (i == 1) {
            startNum.push(0)
            console.log("hehe" + startNum)
        } else if (i == 2) {
            startNum.push(1)
            console.log("hoho" + startNum)
        } else {
            var nextNum = startNum[i - 2] + startNum[i - 3]
            console.log("hihi" + startNum[i - 2] + startNum[i - 3])
            startNum.push(nextNum)
        } 
        i++
    }
    
    if(startNum[startNum.length-1] > 100) {
        startNum.pop()
    }
    document.getElementById("jawaban").innerHTML = startNum
}

function ganjil(){
    var userInput = document.getElementById("inputanuser").value

    var startNum = [0]
   
    let i = 2
    while (startNum[startNum.length - 1] < 100) {
        if (i == 1) {
            startNum.push(0)
        } else if (i == 2) {
            startNum.push(1)
        } else {
            var nextNum = startNum[i - 2] + startNum[i - 3]
            console.log("hihi" + startNum[i - 2] + startNum[i - 3])
            startNum.push(nextNum)
        } 
        i++
    }
    
    if(startNum[startNum.length-1] > 100) {
        startNum.pop()
    }

    let arrayGanjil = []
    let total = 0
    let penambahan = ""
    for(let i=0; i<=startNum.length-1; i++){
        if(startNum[i]%2!=0){
            arrayGanjil.push(startNum[i])
            if(arrayGanjil.length == 1) {
                penambahan = `${startNum[i]}`
            } else {
                penambahan += ` + ${startNum[i]}`
            }
            total += startNum[i]
        }
    }
    console.log(arrayGanjil)

    document.getElementById("jawaban").innerHTML = penambahan + " = " + total
}

function genap(){
    var userInput = document.getElementById("inputanuser").value

    var startNum = [0]
   
    let i = 2
    while (startNum[startNum.length - 1] < 100) {
        if (i == 1) {
            startNum.push(0)
        } else if (i == 2) {
            startNum.push(1)
        } else {
            var nextNum = startNum[i - 2] + startNum[i - 3]
            console.log("hihi" + startNum[i - 2] + startNum[i - 3])
            startNum.push(nextNum)
        } 
        i++
    }
    
    if(startNum[startNum.length-1] > 100) {
        startNum.pop()
    }

    let arrayGenap = []
    let total = 0
    let penambahan = ""
    for(let i=0; i<=startNum.length-1; i++){
        if(startNum[i]%2==0){
            arrayGenap.push(startNum[i])
            if(arrayGenap.length == 1) {
                penambahan = `${startNum[i]}`
            } else {
                penambahan += ` + ${startNum[i]}`
            }
            total += startNum[i]
        }
    }
    console.log(arrayGenap)

    document.getElementById("jawaban").innerHTML = penambahan + " = " + total
}