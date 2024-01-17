
const buttonsCont = document.querySelector('#buttons-container');
const mainNums = document.querySelector('#main-nums');
const firstNum = document.querySelector('#first-num');
const lastNum = document.querySelector('#last-num');
const operator = document.querySelector('#operator');
const operatorsArr = ['*', '/', '+', '-'];

let firstNumber = 0;
let op;
let lastNumber = 0;
let firstNumberFlag = false;
let operatorFlag = false;
let secondNumberFlag = false;

buttonsCont.addEventListener('click', (e) => {
    let clickedButton = e.target.outerText
    if (firstNumberFlag === false) {
        if ( !isNaN(parseInt(clickedButton)) 
            && (firstNum.textContent !== '')) {
            firstNum.textContent = firstNum.textContent + clickedButton;
            firstNumber = firstNum.textContent;
        } else if (!isNaN(parseInt(clickedButton)) 
            && (firstNum.textContent == '')) {
            firstNum.textContent = clickedButton;
            firstNumber = firstNum.textContent;
        }        
    }

    if (operatorsArr.includes(clickedButton) 
        && (operator.textContent === '') 
        && (firstNum.textContent !== '')) {
            operator.textContent = clickedButton;
            op = clickedButton;
            firstNumberFlag = true;
            operatorFlag = true;
    }

    if ((firstNumberFlag === true) && (operatorFlag === true)) {
        if ( !isNaN(parseInt(clickedButton)) 
            && (lastNum.textContent !== '')) {
                lastNum.textContent = lastNum.textContent + clickedButton;
                lastNumber = lastNum.textContent;
        } else if (!isNaN(parseInt(clickedButton)) 
            && (lastNum.textContent == '')) {
                lastNum.textContent = clickedButton;
                lastNumber = lastNum.textContent;
        }        
    }
    
    console.log(firstNumber, lastNumber)
})


// function add {

// }

// function subtract {

// }

// function multiply {

// }

// function divide {

// }