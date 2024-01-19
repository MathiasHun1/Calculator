const operationButton = document.querySelectorAll('.button')
const resultButton = document.querySelector('.result')
const mainScreen = document.querySelector('#main-screen')
const secondaryScreen = document.querySelector('.secondary-screen')
const clearButton = document.querySelector('#ac')
const delButton = document.querySelector('#del')

const operatorArr = ['+', '-', '*', '/']
let firstNum = ''
let lastNum = ''
let operator = ''
let result = ''
let isResult = false
let mainText = mainScreen.textContent

// Event listeners
operationButton.forEach(button => {
    button.addEventListener('click', (e) => {
        console.log(e.target.textContent)
        updateScreen(e.target.textContent)       
    })
})

resultButton.addEventListener('click', () => {
    if (operator !== '' && firstNum !== '' && lastNum !== '') {
        mainScreen.textContent = operate(firstNum, lastNum, operator)
        result = operate(firstNum, lastNum, operator)
    }
})

clearButton.addEventListener('click', clear)

delButton.addEventListener('click', del)




// functions
function updateScreen(input) {
    if (!isNaN(parseFloat(input)) || input === '.') {updateNumber(input)}
    if (operatorArr.includes(input)) {updateOp(input)}
}


function updateNumber(input) {
    if (operator === '') {
        mainScreen.textContent += input
        firstNum = parseFloat(mainScreen.textContent)
    } else if (operator !== '') {
        if (mainScreen.textContent !== '' && lastNum === '') {
            mainScreen.textContent = input
            lastNum = parseFloat(mainScreen.textContent)
        } else if (lastNum !== '') {
            mainScreen.textContent += input
            lastNum = parseFloat(mainScreen.textContent)
        }
    }
    console.log('firstNum: ' + firstNum)
    console.log('lastNum: ' + lastNum)    
}

function updateOp (input) {
    if (firstNum === '') {
        return
    } else if (firstNum !== '' && lastNum === '') {
        operator = input
    } else if (firstNum !== '' && operator !== '' && lastNum !== '') {
        result = operate(firstNum, lastNum, operator)
        mainScreen.textContent = result
        isResult = true
        firstNum = result
        lastNum = ''
        operator = input
    }
}

function clear() {
    firstNum = ''
    lastNum = ''
    operator = ''
    result = ''
    isResult = false
    mainScreen.textContent = ''
}

function del() {
    if (firstNum === '') {
        return
    } else if (firstNum !=='' && operator === '' && lastNum === '') {
        firstNum = ''
        mainScreen.textContent = ''
    } else if (firstNum !=='' && operator !== '' && lastNum === '') {
        operator = ''
        
    } else if (firstNum !=='' && operator !== '' && lastNum !== '') {
        lastNum = ''
    }   
}

function operate (a, b, operator, precision = 7) {
    if (operator === '+') return (a + b).toFixed(precision)
    if (operator === '-') return (a - b).toFixed(precision)
    if (operator === '*') return (a * b).toFixed(precision)
    if (operator === '/') {
        if (lastNum === 0) {
            alert("You can't do that")
            clear()
            return
        } else return (a / b).toFixed(precision)
    }
}