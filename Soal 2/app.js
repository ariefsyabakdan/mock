var angka = document.getElementById('angka')
angka.addEventListener('keyup', checkInput, false)
var btnShow = document.getElementById("showFibonanci")
btnShow.addEventListener('click', showFibo, false)
var btnGanjil = document.getElementById('fiboGanjil')
btnGanjil.addEventListener('click', fiboGanjil, false)
var btnGenap = document.getElementById('fiboGenap')
btnGenap.addEventListener('click', fiboGenap, false)

function checkInput(){
  let inputAngka = parseInt(angka.value)
  if((!Number.isInteger(inputAngka)) && angka.value.length > 0){
    window.alert('Harap masukan angka')
    clearForm()
  }
}

function clearForm(){
  angka.value = ''
}

function fibonanci(urutan){
  let urutanNM2 = 0
  // Urutan ke N-1 
  let urutanNM1 = 0
  let result = 0
  for(i = 1; i <= urutan;i++){
    urutanNM2 = urutanNM1
    urutanNM1 = result
    if(i==1){
      result = 0
    }else if(i==2){
      result = 1
    }
    else{
      result = urutanNM2 + urutanNM1
    }
  }
  return result
}

function showFibo(){
  let inputAngka = parseInt(angka.value)
  let fibo = []
  let result = ''
  for(let i = 1; i <= inputAngka; i++){
    if(fibonanci(i) > inputAngka){
      break;
    }
    fibo.push(fibonanci(i))
  }
  for(let i = 0; i < fibo.length; i++){
    if(i == fibo.length-1){
      result += `${fibo[i]}`
    }else{
      result += `${fibo[i]}, `
    }
  }
  document.getElementById('result').innerHTML = result
}

function fiboGanjil(){
  let inputAngka = parseInt(angka.value)
  let fibo = []
  let sum = 0
  let result = ''
  for(let i = 1; i <= inputAngka; i++){
    if(fibonanci(i) > inputAngka){
      break
    }
    if(fibonanci(i) % 2 !== 0){
      fibo.push(fibonanci(i))
      sum += fibonanci(i)
    }
  }
  for(let i = 0; i < fibo.length; i++){
    if(i == fibo.length - 1){
      result += `${fibo[i]} = ${sum}`
    }else{
      result += `${fibo[i]} + `
    }
  }
  document.getElementById('result').innerHTML = result
}

function fiboGenap(){
  let inputAngka = parseInt(angka.value)
  let fibo = []
  let sum = 0
  let result = ''
  for(let i = 1; i <= inputAngka; i++){
    if(fibonanci(i) > inputAngka){
      break
    }
    if(fibonanci(i) % 2 === 0){
      fibo.push(fibonanci(i))
      sum += fibonanci(i)
    }
  }
  for(let i = 0; i < fibo.length; i++){
    if(i == fibo.length - 1){
      result += `${fibo[i]} = ${sum}`
    }else{
      result += `${fibo[i]} + `
    }
  }
  document.getElementById('result').innerHTML = result
}