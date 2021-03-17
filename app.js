// No. 1

function hasilAngka() {

    let postNumber = document.getElementById("postNum").value;

    let space = " "
    let angka = 4
    let array = [1,3,5,7,9,11]

    let intPost = parseInt(postNumber)
    
    if (intPost <= angka && intPost !== -1) {

        space +=  `<p>${array[0]}</p>
                   <p>${array[1]} ${array[2]}</p>
                   <p>${array[3]} ${array[4]} ${array[5]}</p>`

    }

    let input = `${space}`

    document.getElementById("result").innerHTML = input;

  }


  function hasilHuruf() {

      let postHuruf = document.getElementById("postNum").value;

      let angka = 4;

      let spaces = " ";

      let array = ["B","D","F","H","J","L"]

      let intHuruf = parseInt(postHuruf)

      if(intHuruf <= angka && intHuruf !== -1) {

              spaces += `<p>${array[0]}</p>
                         <p>${array[1]} ${array[2]}</p>
                         <p>${array[3]} ${array[4]} ${array[5]}</p>`
        }
    
      let input = `${spaces}`

      document.getElementById("result").innerHTML = input; 
    
    }

// No. 2

function fibonacci() {

  let postFibo = document.getElementById("angkaFibo").value;

  let intFibo = parseInt(postFibo)

  let space = " "

  let arrayFibo = [];

  arrayFibo[0] = 0

  arrayFibo[1] = 1

    for(let i=2; i <= intFibo ; i++) {

      if (intFibo !== -1) {

       arrayFibo[i] = arrayFibo[i-2] + arrayFibo[i-1]
    
      }
    } 

    let filterFibo = arrayFibo.filter(value=>{

      return value < intFibo

    })

    space += `${filterFibo} <hr>`

    document.getElementById("resultFibo").innerHTML = space;

  }

// Fibo Ganjil

  function fiboGanjil() {

    let postFibo = document.getElementById("angkaFibo").value;
  
    let intFibo = parseInt(postFibo)
    
    let arrayFibo = [];
  
    arrayFibo[0] = 0
  
    arrayFibo[1] = 1
  
      for(let i=2; i <= intFibo ; i++) {
  
        if (intFibo !== -1) {
  
         arrayFibo[i] = arrayFibo[i-2] + arrayFibo[i-1]
      
        }
      } 
  
      let filterGanjil = arrayFibo.filter(value=>{

        return value % 2 == 1 && value < intFibo
  
      })
  
      let sumGanjil = filterGanjil.reduce(function(a,b) {

          return a + b;
      })

      let input = `${filterGanjil.join(" + ")} = ${sumGanjil}`
  
      document.getElementById("resultFibo").innerHTML = input;

  }


  // Fibo Genap

  function fiboGenap() {

    let postFibo = document.getElementById("angkaFibo").value;
  
    let intFibo = parseInt(postFibo)
    
    let arrayFibo = [];
  
    arrayFibo[0] = 0
  
    arrayFibo[1] = 1
  
      for(let i=2; i <= intFibo ; i++) {
  
        if (intFibo !== -1) {
  
         arrayFibo[i] = arrayFibo[i-2] + arrayFibo[i-1]
      
        }
      } 
  
      let filterGenap = arrayFibo.filter(value=>{

        return value % 2 == 0 && value < intFibo
  
      })
  
      let sumGenap = filterGenap.reduce(function(a,b) {

          return a + b;
      })

      let input = `${filterGenap.join(" + ")} = ${sumGenap}`
  
      document.getElementById("resultFibo").innerHTML = input;
  
  }


// No. 3

//  Add Users

let userData = [
    { 
    No : 1,
    username:'alee', 
    email:'alee@gmail.com', 
    role:'admin'
    },

   { 
    No : 2,
    username:'jennie', 
    email:'jennie@gmail.com', 
    role:'user'
   },

   { 
    No : 3,
    username:'elsa', 
    email:'elsa@gmail.com', 
    role:'user'
    }
  ] 

let roleArr = ["user","admin"]; 

function showData(number) {

  if (number) {

    let textInput = userData.map(value => {

    if (value.No == number) {
        return `
            <tr>
            <td>#</td>
            <td><input type="text" name="" value="${value.username}" id="editUsername"></td>
            <td><input type="text" name="" value="${value.email}" id="editEmail"></td>
            <td><input type="text" name="" value="${value.role}" id="editRole"></td>
            <td><button onclick="save(${value.No})">SAVE</button> <button onclick="cancel()">CANCEL</button></td>
            </tr>
        `
    }

    else {

    return (`<tr>
              <td>${value.No}</td>
              <td>${value.username}</td>
              <td>${value.email}</td>
              <td>${value.role}</td>
              <td><input type="button" value="EDIT" id="editUser(${value.No})">
                  <input type="button" value="DELETE" id="deleteUser(${value.No})">
              </td>
            </tr>`)      
        }
      })

      document.getElementById("resultUser").innerHTML = textInput.join("");
   }

   else{

    let inputData = userData.map(value=> {

       return `<tr>
       <td>${value.No}</td>
       <td>${value.username}</td>
       <td>${value.email}</td>
       <td>${value.role}</td>
       <td><button onclick="editUser(${value.No})">EDIT</button> <button onclick="deleteUser(${value.No})">HAPUS</button></td>
    </tr>`
    });
    document.getElementById("resultUser").innerHTML = inputData.join("");
 }

      let listRole = roleArr.map(el=>{
          return `<option value=${el}>${el}</option>`
        })

      document.getElementById("role").innerHTML = listRole.join("")
  }

      function deleteUser(No) {
        userData = userData.filter((el) => {
          return el.No !== No;
        });

        showData();
      }

      function editUser(No) {
        showData(No);
      }

      function cancel() {
        showData();
      }

      function save(number) {
        let index = userData.findIndex((value) => value.No == number);
        let username = document.getElementById("editUsername").value;
        let email = document.getElementById("editEmail").value;
        let role = document.getElementById("editRole").value;

        userData[index] = {
          ...userData[index],
          username,
          email,
          role,
        };

        showData();        
      }

      function inputData() {

      let username = document.getElementById("username").value;
      let email = document.getElementById("email").value;
      let role = document.getElementById("role").value;
      let No = userData.length + 1;

          if (username, email == ""){
            alert ("Anda belum menginput di semua field !")
          }

          else {
            userData.push({
              No, username, email, role
            })

            document.getElementById("username").value = ""
            document.getElementById("email").value = ""
            document.getElementById("role").value = ""

          }

          showData();
      }

      let btn = document.getElementById("addButton");
      btn.addEventListener("click",inputData)

      
    showData();


