var angka = document.getElementById('angka')
angka.addEventListener('keyup', checkInput, false)
var elForm = document.getElementById('elForm')
elForm.addEventListener('submit', cegahSubmit, false)
var btnGanjil = document.getElementById('btnGanjil')
btnGanjil.addEventListener('click', tampilGanjil,false)
var btnHuruf = document.getElementById('btnHuruf')
btnHuruf.addEventListener('click', tampilHuruf, false)

function checkInput(){
  let inputAngka = parseInt(angka.value) 
  // cek input bukan huruf dan angka dari 0 - 4 
  if((!Number.isInteger(inputAngka)) && angka.value.length > 0){
    window.alert('Harap masukan angka!')
    clearForm()
  }else if(inputAngka < 0){
    window.alert('Angka tidak boleh Negatif')
    clearForm()
  }else if(inputAngka > 4){
    window.alert('Angka tidak boleh lebih dari 4')
    clearForm()
  }
}

function clearForm(){
  document.getElementById('angka').value = ''
}

function cegahSubmit(e){
  e.preventDefault()
  clearForm()
}

function tampilGanjil(){
  let inputAngka = parseInt(angka.value)
  let angkaGanjil = [1,3,5,7,9,11,13,15,17,19]
  let urutan = 0
  let result = ''
  for(let i = 1; i <= inputAngka; i++){
    for(let j = 1; j <= i; j++){
      result += `${angkaGanjil[urutan]} `
      urutan += 1
    }
    result += '<br>'
  }
  document.getElementById('result').innerHTML = result
}

function tampilHuruf(){
  let inputAngka = parseInt(angka.value)
  let huruf = ['B','D','F','H','J','L','N','P','R','T']
  let urutan = 0
  let result = ''
  for(let i = 1; i <= inputAngka; i++){
    for(let j = 1; j <= i; j++){
      result += `${huruf[urutan]} `
      urutan += 1
    }
    result += '<br>'
  }
  document.getElementById('result').innerHTML = result
}