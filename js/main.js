const comp_arr = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']
const simple_arr = ['green', 'black', 'blue', 'white']

let three_colors = ['#f1f1f1']
// prevc
// hex
// swatch
const prevc_swatch = document.querySelector('.prevc .swatch')
const prevc = document.querySelector('.prevc')
let arr = comp_arr; // improve on it

const change_color = document.getElementById('bgc_change')
let bg_color = document.getElementById('bgcolor')
let simple = document.getElementById('simple')
let complex = document.getElementById('complex')


change_color.addEventListener('click', new_color)
simple.addEventListener('click', simple1)
complex.addEventListener('click', complex1)

prevc.style.display = 'none'
document.getElementById('prev_color').addEventListener('click', () => {
  prevc.style.display = 'block'
  prevc_swatch.style.backgroundColor = three_colors[1]
})










function simple1(e){
  e.preventDefault()
  simple.style.color = 'blue'
  complex.style.color = 'gray'
  simple.style.borderBottom = 'solid 2px'
  complex.style.borderBottom = 'none'

  arr = simple_arr;
}

function complex1(e){
  e.preventDefault()
  complex.style.color = 'blue'
  simple.style.color = 'gray'
  complex.style.borderBottom = 'solid 2px'
  simple.style.borderBottom = 'none'

  arr = comp_arr;
}

function new_color(){
  let color
  if (arr.length > 7){
    color = `#${hex()}${hex()}${hex()}${hex()}${hex()}${hex()}`
    document.body.style.backgroundColor = color

    bg_color.innerText = `#${hex()}${hex()}${hex()}${hex()}${hex()}${hex()}`
  }else{
    color = arr[Math.floor(Math.random() * arr.length)]
    document.body.style.backgroundColor = color
  }
  three_colors.unshift(color)
}

function hex(){
  return arr[Math.floor(Math.random()*16)]
}

three_colors.length = 3