var users = [
  {
    username: 'cefsyarif',
    email: 'cef.syarif@gmail.com',
    role: 'user'
  },
  {
    username: 'nina',
    email: 'nina.kurniasih@gmail.com',
    role: 'admin'
  },
  {
    username: 'asraf',
    email: 'asraf.bima@gmail.com',
    role: 'user'
  }
]

window.addEventListener('load', getUsers(users), false )
var elForm = document.getElementById('elForm')
elForm.addEventListener('submit', submitForm, false)
var btnAdd = document.getElementById('btnAdd')
btnAdd.addEventListener('click', addUser, false)

function deleteUser(e){
  // e.preventDefault()
  let inUser = parseInt(e.target.parentElement.parentElement.childNodes[1].textContent) - 1
  users.splice(inUser, 1)
  getUsers(users)
}

function addUser(){
  let username = document.getElementById('username').value 
  let email = document.getElementById('email').value 
  let role = document.getElementById('role').value 
  users.push({
    username,
    email,
    role
  })
  getUsers(users)
  console.log("jalan")
  clearForm()
}

function getUsers(users){
  let result = ''
  users.forEach((val, index) => {
    result += `
    <tr>
      <td>${index+1}</td>
      <td>${val.username}</td>
      <td>${val.email}</td>
      <td>${val.role}</td>
      <td><button id="editUser">EDIT</button> <button onclick="deleteUser(event)">DELETE</button></td>
    </tr>
    `
  })
  document.querySelector('.user-data table tbody').innerHTML = result
}

function submitForm(e){
  e.preventDefault()
}

function clearForm(){
  document.getElementById('username').value = ''
  document.getElementById('email').value = ''
  document.getElementById('role').selectedIndex = 0
}