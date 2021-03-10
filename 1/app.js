function ganjil(){
    var userInput = document.getElementById("inputanuser").value
    
    var rows =""
    if(userInput>4){
        window.alert(`Tidak boleh >4`)
        return
    }

    let angkaGanjil = 1

    for(let i=0; i<userInput; i++){
        for(let j=0 ; j<=i; j++){
            rows += `${angkaGanjil}`
            angkaGanjil += 2
        }
        rows += "<br>"
    }
    console.log(userInput)

    document.getElementById("jawaban").innerHTML = rows
}

function huruf(){
    var userInput = document.getElementById("inputanuser").value

    var rows = ""
    let angkaGenap = 2
    let dictionary = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    for(let i=0; i<userInput; i++){
        for(let j=0; j<=i ; j++){
            rows += `${dictionary[angkaGenap-1]}`
            angkaGenap +=2

        }
        rows += "<br>"
    }console.log(userInput)

    document.getElementById("jawaban").innerHTML = rows
}


