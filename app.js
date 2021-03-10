const arrRole = ["admin", "user"];

let usersData =[];

 // SHOW
function funShow(index) {
    var listUser = usersData.map((val) => {
      if (val.id != index) {
        return `
          <tr>
            <td>${val.no}</td>
            <td>${val.username}</td>
            <td>${val.email}</td>
            <td>${val.role}</td>
  
            <td><input type='button' value='Edit' onclick="edit(${val.id})"/></td>
            <td><input type='button' value='Delete' onclick="deleteData(${val.id})"/></td>
            </tr>
          `;
      }
  
      return `
        <tr>
          <td>${val.no}</td>
          <td>${val.username}</td>
          <td><input value='${val.email}' type="text" id="nameEdit"></td>
          <td><input value='${val.role}' type="text" id="priceEdit"></td>
  
          <td><input type='button' value='Save' onclick='save(${val.id})'/></td>
          <td><input type='button' value='Cancel' onclick='cancel(${val.id})'/></td>
        </tr>
      `;
    });

    var listRole = arrRole.map((el) => {
        return `<option value=${el}>${el}</option>`;
      });
      document.getElementById("renderData").innerHTML = listUser.join("");
      document.getElementById("roleInput").innerHTML = listRole.join("");
}

function funShowFilter(filterResult) {
    console.log(filterResult)
    let list = filterResult.map((val) => {
      return `
        <tr>
          <td>${val.no}</td>
          <td>${val.username}</td>
          <td>${val.email}</td>
          <td>${val.role}</td>
            <td><input type='button' value='Delete' onclick="deleteData(${val.id})"/></td>
            <td><input type='button' value='Edit' onclick="edit(${val.id})"/></td>
        </tr>
      `;
    });
    document.getElementById("renderData").innerHTML = list.join("");
  }
// INPUT DATA
    function funAddUser() {
        let username = document.getElementById("userName").value;
        let email = document.getElementById("email").value;
        let role = document.getElementById("roleForm").value;
  
        usersData.push({
        username,
        email,
        role,
        });
    
        document.getElementById("userName").value = "";
        document.getElementById("email").value = "";
        document.getElementById("roleForm").value = "";
        funShow();
    }

//   DELETE
  function deleteData(index) {
    usersData = usersData.filter((val) => {
      return val.id !== index;
    });
  
    funShow();
  }

// EDIT
  function edit(index) {
    funShow(index);
  }

//   SAVE
  function save(index) {
    let name = document.getElementById("nameEdit").value;
    let price = parseInt(document.getElementById("priceEdit").value);
    let stock = parseInt(document.getElementById("stockEdit").value);
  
    let itemIndex = arrProduct.findIndex((val) => (val.id = index));
  
    arrProduct[itemIndex] = {
      ...arrProduct[itemIndex],
      name,
      price,
      stock,
    };
  
    funShow();
  }

// CANCEL
  function cancel() {
    funShow();
  }
funShow();
