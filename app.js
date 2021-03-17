// no 1
function showGanjil() {
  let inputPattern = document.getElementById("inputPattern").value;
  let data = [];
  let number = 1;

  for (let i = 1; i <= inputPattern; i++) {
    let numRow = "";
    for (let j = 1; j <= i; j++) {
      numRow += number + " ";
      number += 2;
    }
    data.push(numRow);
  }
  let listNumber = data.map((el) => {
    return `
      <h3>${el}</h3>
    `;
  });

  document.getElementById("resultPattern").innerHTML = listNumber.join("");
}

function showHuruf() {
  let inputPattern = document.getElementById("inputPattern").value;
  let dictionary = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let data = [];
  let number = 1;

  for (let i = 1; i <= inputPattern; i++) {
    let numRow = "";
    for (let j = 1; j <= i; j++) {
      numRow += dictionary[number] + " ";
      number += 2;
    }
    data.push(numRow);
  }
  console.log(data)
  let listNumber = data.map((el) => {
    return `
      <h3>${el}</h3>
    `;
  });

  document.getElementById("resultPattern").innerHTML = listNumber.join("");
}

// NO 2
function makeFibo() {
  let inputFibonacci = document.getElementById("inputFibonacci").value;
  let array = [];
  let num = 0;

  for (let i = 0; i < inputFibonacci; i++) {
    if (num >= inputFibonacci) {
      break;
    }

    if (i <= 1) {
      array.push(i);
    } else {
      num = array[i - 2] + array[i - 1];

      if (num >= inputFibonacci) {
        break;
      }
      array.push(num);
    }
  }
  return array;
}
function showFibonacci() {
  let array = makeFibo();

  let render = array.join(", ");

  document.getElementById("resultFibonacci").innerHTML = `<h2>${render}</h2>`;
}

function ganjilFibonacci() {
  let array = makeFibo();
  let oddArray = array.filter((el) => el % 2 !== 0);
  let sum = 0;

  oddArray.forEach((el) => {
    sum += el;
  });
  let render = oddArray.join(" + ");
  console.log(oddArray)
  render += ` = ${sum}`;

  document.getElementById("resultFibonacci").innerHTML = `<h2>${render}</h2>`;
}

function genapFibonacci() {
  let array = makeFibo();
  let evenArray = array.filter((el) => el % 2 == 0);
  let sum = 0;

  evenArray.forEach((el) => {
    sum += el;
  });
  let render = evenArray.join(" + ");
  render += ` = ${sum}`;

  document.getElementById("resultFibonacci").innerHTML = `<h2>${render}</h2>`;
}

// no.3
let usersData = [
  {
    no: 1,
    userName: "alee",
    email: "alee@gmail.com",
    role: "admin",
  },
  {
    no: 2,
    userName: "jennie",
    email: "jeniie@gmail.com",
    role: "user",
  },
  {
    no: 3,
    userName: "elsa",
    email: "elsa@gmail.com",
    role: "user",
  },
];

function showTable(number) {
  if (number) {
    let listEdit = usersData.map((el) => {
      if (el.no == number) {
        return `
          <tr>
            <td>#</td>
            <td><input type="text" value="${el.userName}" id="editUserName"></td>
            <td><input type="text" value="${el.email}" id="editEmail"></td>
            <td>
              <select id="editRole">
                <option value="user">user</option>
                <option value="admin">admin</option>
              </select>
            </td>
            <td><button onclick="save(${el.no})">SAVE</button> <button onclick="cancel()">CANCEL</button></td>
          </tr>
        `;
      } else {
        return `
        <tr>
        <td>${el.no}</td>
        <td>${el.userName}</td>
        <td>${el.email}</td>
        <td>${el.role}</td>
        <td><button onclick="editUser(${el.no})">EDIT</button> <button onclick="deleteUser(${el.no})">DELETE</button></td>
      </tr>
        `;
      }
    });
    document.getElementById("renderTable").innerHTML = listEdit.join("");
  } else {
    let list = usersData.map((el) => {
      return `
        <tr>
          <td>${el.no}</td>
          <td>${el.userName}</td>
          <td>${el.email}</td>
          <td>${el.role}</td>
          <td><button onclick="editUser(${el.no})">EDIT</button> <button onclick="deleteUser(${el.no})">DELETE</button></td>
        </tr>
      `;
    });

    document.getElementById("renderTable").innerHTML = list.join("");
  }
}

function deleteUser(no) {
  usersData = usersData.filter((el) => {
    return el.no !== no;
  });

  showTable();
}

function editUser(no) {
  showTable(no);
}

function cancel() {
  showTable();
}

function save(number) {
  let index = usersData.findIndex((el) => el.no == number);
  let userName = document.getElementById("editUserName").value;
  let email = document.getElementById("editEmail").value;
  let role = document.getElementById("editRole").value;

  usersData[index] = {
    ...usersData[index],
    userName,
    email,
    role,
  };

  showTable();
}

function addUser(e) {
  e.preventDefault();

  let userName = document.getElementById("InputUserName").value;
  let email = document.getElementById("InputEmail").value;
  let role = document.getElementById("InputRole").value;
  let no = usersData.length + 1;

  if (!userName) {
    alert("tolong isi user name");
  } else if (!email) {
    alert("tolong isi email");
  } else {
    usersData.push({
      no,
      userName,
      email,
      role,
    });

    document.getElementById("InputUserName").value = "";
    document.getElementById("InputEmail").value = "";

    showTable();
  }
}

showTable();

console.log('finished')