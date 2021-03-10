// arrGanjil = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
// console.log(arrGanjil[0])
// arrHuruf = ["B", "D", "F", "H", "J", "L", "N", "P", "R", "T"]
let result = document.getElementById("renderResult")

function funInputNumber() {
    let inputNumber = document.getElementById("inputNumber").value
    console.log(inputNumber)

    if (inputNumber < 0 || inputNumber > 4) {
        alert("Angka tidak boleh kurang dari 0 atau lebih dari 4")
    }
}

function resultGanjil(){
    let resultGanjil = `
            <h1>1</h1>
            <h1>3  5</h1>
            <h1>7  9  11</h1>

    `
    result.innerHTML = resultGanjil
}

function resultHuruf(){
    let resultGanjil = `
            <h1>B</h1>
            <h1>D   F</h1>
            <h1>H   J   L</h1>

    `
    result.innerHTML = resultGanjil
}

// // FIBONANCI

// // function funInputNumber() {
// //     let inputNumber = document.getElementById("inputNumber").value
// //     console.log(inputNumber)

// //     if (inputNumber < 0) {
// //         alert("Angka tidak boleh kurang dari 0")
// //     }
// // }

// // function funShow(){
// //     let fibonacciNumber = [1, 1]
// //     let inputNumber = document.getElementById("inputNumber").value
// //     while(fibonacciNumber[i] < inputNumber) {
// //         function fibo(number) {
// //             for (let i = 3; let number=0; i <= number + 1; i++) {
// //                 let newNumber = parseInt(fibonacciNumber[i - 3] + fibonacciNumber[i - 2])
// //                 fibonacciNumber.push(newNumber)
// //             }
// //             return (fibonacciNumber[number - 1])
// //         } 
// //     }
    
// // console.log(fibo(number))
// // }


const arrUsersData = [
    {
        no: 1,
        username: "alee",
        email: "alee@gmail.com",
        role: "admin"
    },
    {
        no: 2,
        username: "jennie",
        email: "jenniebp@gmail.com",
        role: "user"
    },
    {
        no: 3,
        username: "elsa",
        email: "elsa@disney.com",
        role: "user"
    },
]

const arrRole = ["admin", "user"]

function funShow() {
    var listUser = arrUsersData.map(val => {
        return (`
            <tr>
                <td>${val.no}</td>
                <td>${val.username}</td>
                <td>${val.email}</td>
                <td>${val.role}</td>
                <td>
                <input type="button" value="EDIT" onclick="funEdit()">
                </td>
                <td>
                <input type="button" value="DELETE" onclick="funDelete()">
                </td>

            </tr>
        `)
    })

    var listRole = arrRole.map(el => {
        return `<option value=${el}>${el}</option>`
    })

    document.getElementById("renderTable").innerHTML = listUser.join("")
    document.getElementById("role").innerHTML = listRole.join("")
}

function funAddUser(){
    let username = document.getElementById("username").value
    let email = document.getElementById("email").value
    let role = document.getElementById("role").value

    arrUsersData.push({
        no: new Date().getTime(),
        username,
        email,
        role
    })
    document.getElementById("username").value = ''
    document.getElementById("email").value=''
    document.getElementById("role").value=''

    if (username=="" || email ==""){
        alert("Input Masih Kosong!")
    }else{funShow()}
}

function funDelete(index) {
    console.log(index)
    // arrUsersData = arrUsersData.filter(val=> {
    //   return val.no !== index;
    // });
  
    // funShow();
}
// function funEdit(index) {
//     funShow(index);
// }

funShow()