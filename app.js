let arrData = [{
        no: 1,
        username: "alee",
        email: "alee@gmail.com",
        role: "admin",
    },
    {
        no: 2,
        username: "jennie",
        email: "jenniebp@gmail.com",
        role: "user",
    },
    {
        no: 3,
        username: "alee",
        email: "elsa@disney.com",
        role: "user",
    },
];

const arrRole = ["admin", "user"];

function funUsers(index) {
    var listUser = arrData.map((val) => {
        if (val.no != index) {
            return `
    <tr>
     <td>${val.no}</td>
     <td>${val.username}</td>
     <td>${val.email}</td>
     <td>${val.role}</td>

     <td><input type ='button' value='Delete' onclick ="deleteData(${val.no})"/></td>
     <td><input type ='button' value='Edit' onclick ="edit(${val.no})"/></td>
    </tr>
    `;
        }

        return `
    <tr>
    <td>${val.no}</td>
    <td><input value='${val.username}' type ="text" id ="usernameEdit"></td>
    <td><input value='${val.email}' type ="text" id ="emailEdit"></td>
    <td><input value='${val.role}' type ="select" id="roleEdit"></td>

    <td><input type='button' value='Save' onclick="save(${val.no})"/></td>
    <td><input type='button' value='Cancel' onclick="cancel(${val.no})"/></td>
    </tr>
    `;
    });

    var listRole = arrRole.map((el) => {
        return `<option value=${el}>${el}</option>`;
    });
    document.getElementById("render").innerHTML = listUser.join("");
    document.getElementById("roleInput").innerHTML = listUser.join("");
}

function funInputData() {
    let username = document.getElementById("usernameInput").value;
    let email = document.getElementById("userEmail").value;
    let role = document.getElementById("roleFilter").value;

    arrData.push({
        no,
        username,
        email,
        role,
    });

    document.getElementById("usernameInput").value = "";
    document.getElementById("userEmail").value = "";
    document.getElementById("roleFilter").value = "";

    funUsers();
}

function edit(index) {
    funUsers(index);
}

function deleteData(index) {
    arrData = arrData.filter((val) => {
        return val.no !== index;
    });
}

function save(index) {
    let name = document.getElementById("usernameEdit").value;
    let email = documnet.getElementById("emailEdit").value;
    let role = document.getElementById("roleEdit").value;

    let itemIndex = arrData.findIndex((val) => (val.no = index));

    arrData[itemIndex] = {
        ...arrData[itemIndex],
        username,
        email,
    };
    funUsers();
}

function cancel() {
    funUsers();
}