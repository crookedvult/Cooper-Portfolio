const colorPicker = document.getElementById("color-picker")
const colorButton = document.getElementById("color-button")

function invertHex(hex) {
  return (Number(`0x1${hex}`) ^ 0xFFFFFF).toString(16).substr(1).toUpperCase()
}

function changeColor() {
  let newValue
  newValue = document.getElementById('color-picker').value;
  document.body.style.backgroundColor = newValue;
  let oppositeColor = invertHex(newValue.toString())
  console.log(oppositeColor);
  
  document.getElementById('color-button').style.backgroundColor = oppositeColor;
  
  const collection = document.getElementsByClassName("color-label");
  for (let i = 0; i < collection.length; i++) {
    collection[i].style.backgroundColor = oppositeColor;
  }
}

