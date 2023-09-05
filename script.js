const calculationDescription = []
var calcIndx = 0

const numberKeyHandler = (e) => {
  if (!calculationDescription[calcIndx]) {
    calculationDescription[calcIndx] = e.target.value
  } else {
    calculationDescription[calcIndx] += e.target.value
  }

  printToResult()
}

const operationKeyHandler = (e) => {
  if (e.target.value === '=') {
    calculate()
  } else {
    calcIndx++
    calculationDescription[calcIndx] = e.target.value
    calcIndx++

    printToResult()
  }
}

const calculate = () => {
  let result = calculationDescription[0]

  for (let i = 1; i < calculationDescription.length; i += 2) {
    const operation = calculationDescription[i]
    switch(operation) {
      case '+':
        result = addition(result, calculationDescription[i + 1])
        break
      case '-':
        result = subtraction(result, calculationDescription[i + 1])
        break
      case 'x':
        result = multiplication(result, calculationDescription[i + 1])
        break
      case '/':
        result = division(result, calculationDescription[i + 1])
        break
    }
  }

  printResult(result)
}

const addition = (num1, num2) => {
  return parseFloat(num1) + parseFloat(num2)
}

const subtraction = (num1, num2) => {
  return parseFloat(num1) - parseFloat(num2)
}

const multiplication = (num1, num2) => {
  return parseFloat(num1) * parseFloat(num2)
}

const division = (num1, num2) => {
  if (parseFloat(num2) === 0) {
    return 'No division by zero'
  }

  return parseFloat(num1) / parseFloat(num2)
}

const printResult = (data) => {
  document.querySelector('#result').value = data
}

const printToResult = () => {
  let data = ''
  for (let i = 0; i < calculationDescription.length; i++) {
    data += calculationDescription[i]
  }

  printResult(data)
}

const startUp = () => {
  const numberKeys = document.querySelectorAll('.numberKey')
  numberKeys.forEach(numberKey => {
    numberKey.addEventListener('click', numberKeyHandler)
  })

  const operationKeys = document.querySelectorAll('.operationKey')
  operationKeys.forEach(operationKey => {
    operationKey.addEventListener('click', operationKeyHandler)
  })
}

startUp()