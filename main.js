const bill = document.querySelector("[data-billinput]");

const numberPeople = document.querySelector("[data-numberpeople]")

const percentButton = document.querySelectorAll("[data-percentbt]")

const custom = document.querySelector("[data-custompercent]")

const displayAmount = document.querySelector("[data-amount]")

const displayTotal = document.querySelector("[data-total]")

const resetButton = document.querySelector("[data-reset]")

const errorMessage = document.querySelector(".errorMessage")

const resetSound = new Audio("./Sound/Reset.wav")
const tick = new Audio("./Sound/Tick.wav")
const percentSound = new Audio("./Sound/Equal.wav")


let peopleNumber = parseInt(numberPeople.value)

let buttonValue = 0;

let billNumber = parseInt(bill.value)


percentButton.forEach(button => 
    button.addEventListener("click", ()=>{
      
        buttonValue = parseFloat(button.value)
        if(billNumber == 0 || isNaN(billNumber) || billNumber == Infinity || peopleNumber == 0 || numberPeople.value == "" ) {
          return
        }
        else {
          percentSound.play()
          calcTips()
        }
      
    })
    )

bill.addEventListener("input", ()=>{
  billNumber = parseFloat(bill.value)
 tick.play()

  if(billNumber == 0 || isNaN(billNumber) || billNumber == Infinity || peopleNumber == 0 || numberPeople.value == "" ) {
    return
  }
  else {
    
    calcTips()
  }

 
})


numberPeople.addEventListener("input", ()=>{
  peopleNumber = parseFloat(numberPeople.value)
  tick.play()
  if(peopleNumber === 0)  {
    numberPeople.classList.add("error")
    errorMessage.classList.add("activeerror")
  }

if (peopleNumber !== 0) {
  numberPeople.classList.remove("error")
    errorMessage.classList.remove("activeerror")
}
if(peopleNumber == 0 || isNaN(peopleNumber) || peopleNumber == Infinity || bill.value == "") {
    
  return
  
 }
  else {
    numberPeople.classList.remove("error")
    errorMessage.classList.remove("activeerror")
    calcTips()
  }

})


custom.addEventListener("input", ()=>{
  customValue = parseFloat(custom.value)
 
  buttonValue = customValue
     
        
  if (isNaN(buttonValue) || buttonValue == 0 || buttonValue == "" || peopleNumber == 0 || numberPeople.value == "" ) {
    return
  }
  else {
    percentSound.play()
    calcTips()
  }
})


function calcTips() {
  
  
 
    displayAmount.innerHTML = `$${(billNumber * buttonValue / 100 / peopleNumber).toFixed(2)}`
      
    displayTotal.innerHTML =  `$${((billNumber * buttonValue / 100 + billNumber)/ peopleNumber).toFixed(2)} `
    
  
}


resetButton.addEventListener("click", ()=>{
    restart()
    
    
})


function restart() {
  if(  displayTotal.innerHTML != "$0.00" || displayAmount.innerHTML != "$0.00") resetSound.play()
  bill.value = ""
  numberPeople.value = "" 
  percentButton.value = ""
  custom.value = ""
  
  displayTotal.innerHTML = "$0.00"
  displayAmount.innerHTML = "$0.00"
  
}

