const input = document.querySelector('input')
const select = document.querySelector('select')
const colorCode = document.querySelector('#colorCode')
const generateColorCodeBtn = document.querySelector('#generateColorCodeBtn')
const colorContainr = document.querySelector('#colorContainer')

//Checking For which Mode is Selected or to be selected
let test = ''
const checkForColorMode = () => {
  if (test === '') {
    select.addEventListener('change', e => {
      return (test = e.target.value)
    })
  } else {
    select.addEventListener('change', e => {
      return (test = e.target.value)
    })
  }
  return test
}

//Generate Color code According to the selected Mode O/W Throw Error Warning
let checked = checkForColorMode()
generateColorCodeBtn.addEventListener('click', btn => {
  let inputValue = input.value
  checked = checkForColorMode()
  if (inputValue === '' || inputValue === null) {
    alert("Input field can't be empty")
  } else {
    if (checked === 'none' || checked === '') {
      alert('Please Select a mode')
      select.style.backgroundColor = 'darkgray'
    } else {
      switch (checked) {
        case 'rgbTohex':
          convertRGBtohexa(inputValue)
          break
        case 'hexTorgb':
          convertHexaToRgb(inputValue)
          break
      }
    }
  }
})

//HEX Color Code to RGB color Code
const convertHexaToRgb = hexcolor => {
  let hex = hexcolor.replace(/\#/gi, '')
  let bgInt = parseInt(hex, 16)
  let r = (bgInt >> 16) & 255
  let g = (bgInt >> 8) & 255
  let b = bgInt & 255
  colorCode.textContent = `rgb(${r} , ${g} , ${b})`
}

//RGB Color Code to HEX color Code
const convertRGBtohexa = rgbHex => {
  // let remEx = rgbHex.replace(/^rgb/gi ,'').replace(/\(|\)/gi ,'').replace(/\,/g, '')
  let remEx = rgbHex.match(/\d+/g)
  // let remBrk = remEx.replace(/\(|\)/gi ,'')
  let R = Math.max(0, Math.min(255, Number(remEx[0])))
  let G = Math.max(0, Math.min(255, Number(remEx[1])))
  let B = Math.max(0, Math.min(255, Number(remEx[2])))
  R = R.toString(16).padStart(2, '0')
  G = G.toString(16).padStart(2, '0')
  B = B.toString(16).padStart(2, '0')
  // console.log('#', R, G, B)
  colorCode.textContent = `#${R}${G}${B}`
}

//Show the Color Which you are put in the Input Box
const colorFill = e => {
  if (e.value === '') {
    colorContainr.style.backgroundColor = `transparent`
  } else {
    if (e.value.startsWith('rgb(')) {
      colorContainr.style.backgroundColor = `${e.value}`
    } else if (e.value.startsWith('#')) {
      colorContainr.style.backgroundColor = `${e.value}`
    }else{
      colorContainr.style.backgroundColor = `rgb${e.value}`
    }
  }
  let chR = (/^[A-Za-z]+/gi).test(e.value);
  let chH = (/^\W+/gi).test(e.value);
  if(chR){
    select.childNodes[3].style.display='none'
  }else{
    select.selectedIndex=0
    test='none'
    select.childNodes[3].style.display='block'
  }
  if(chH){
    select.childNodes[5].style.display='none'
  }else{
    select.selectedIndex=0
    test='none'
    select.childNodes[5].style.display='block'
  }
}







