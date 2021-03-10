let arrUser = [
  {
    No: 1,
    Username : "Alee",
    Email : "alee@gmail.com",
    Role : "admin"
  },
  {
    No: 2,
    Username : "Jennie",
    Email : "jenniebp@gmail.com",
    Role : "user"
  },
  {
    No: 3,
    Username : "Elsa",
    Email : "elsa@disney.com",
    Role : "user"
  },
];

const arrCategory = ["Admin", "User"];


function funShow(index) {
  var listProduct = arrUser.map((val) => {
    if (val.id != index) {
      return `
        <tr>
          <td>${val.userName}</td>
          <td>${val.emailInput}</td>
          <td>${val.role}</td>

          <td><input type='button' value='Delete' onclick="deleteData(${val.id})"/></td>
          <td><input type='button' value='Edit' onclick="edit(${val.id})"/></td>
        </tr>
        `;
    }

    return `
      <tr>
        <td>${val.userName}</td>
        <td>${val.emailInput}</td>
        <td><input value='${val.role}' type="text" id="nameEdit"></td>

        <td><input type='button' value='Add' onclick="buy(${val.id})"/></td>
        <td><input type='button' value='Save' onclick='save(${val.id})'/></td>
        <td><input type='button' value='Cancel' onclick='cancel(${val.id})'/></td>
      </tr>
    `;
  });

  var listCategory = arrCategory.map((el) => {
    return `<option value=${el}>${el}</option>`;
  });
  document.getElementById("render").innerHTML = listProduct.join("");
  document.getElementById("categoryInput").innerHTML = listCategory.join("");
}


function funInputData() {
  let userName = document.getElementById("userName").value;
  let email = document.getElementById("emailInput").value;
  let role = document.getElementById("role").value;

  arrUser.push({
    userName,
    email,
    role,

  });

  document.getElementById("userName").value = "";
  document.getElementById("emailInput").value = "";
  document.getElementById("role").value = "";

  funShow();
}

function deleteData(index) {
  arrUser = arrUser.filter((val) => {
    return val.id !== index;
  });

  funShow();
}

function edit(index) {
  funShow(index);
}

funShow();
