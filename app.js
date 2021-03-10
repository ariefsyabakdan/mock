// No. 1

// function hasilAngka() {

//     let postNumber = document.getElementById("postNum").value;

//     var space = " "
//     var angka = 3
//     var array = [1,3,5,7,9,11]

//     let intPost = parseInt(postNumber)
    
//     if(intPost === angka) {

//         space += `${array[0]}`
//         space += `${array[1], array[2]}`
//         space += `${array[3], array[4], array[5]}`            

//     }

//     return space;

//     }

//     document.getElementById("result").innerHTML = space;

    // for(let i=0; i < num; i++) {

    //     if(num % 2 == 1) {

    //         space += postNumber[i]

    //     }
    //  }

    // let input = `${space}`

    // document.getElementById("result").innerHTML = input;



// No. 2

// function fibonacci(val) {

//     // let inputFibo = document.getElementById("angkaFibo").value;

//         if (val <= 1) {
//         return val;
//         } 
        
//         else {
//         return fibo(val - 1) + fibo(val - 2);
//         }

//   }

  
//   document.getElementById("resultFibo").innerHTML;



// No. 3


let userData = [{ 
    username:'alee', 
    email:'alee@gmail.com', 
    role:'admin',
  },

   { 
    username:'jennie', 
    email:'jennie@gmail.com', 
    role:'user',
   },

   { 
    username:'elsa', 
    email:'elsa@gmail.com', 
    role:'user',
    }
  ] 


function showData() {

let textInput = userData.map(value => {

return (`<tr>
          <td>${value.username}</td>
          <td>${value.email}</td>
          <td>${value.role}</td>
        </tr>`)      
})

document.getElementById("writeFill").innerHTML = textInput.join("")

}

function inputData() {

let username = document.getElementById("username").value;
let email = document.getElementById("email").value;
let role = document.getElementById("role").value;


    userData.push({
        username, email, role
    })


document.getElementById("username").value = ""
document.getElementById("email").value = ""

showData();

}






