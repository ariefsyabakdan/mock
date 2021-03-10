var angka = document.getElementById('angka')
angka.addEventListener('keyup', checkInput, false)

function checkInput(){
  let inputAngka = parseInt(angka.value) 
  // cek input bukan huruf dan angka dari 0 - 4 
  if(!Number.isInteger(inputAngka) && angka.value.length !== 0){
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