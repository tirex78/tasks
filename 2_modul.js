// ** 2.Написать модуль, который способен выполнять операции с числами любой длины.
// 4 метода для сложения, умножения, вычитания и деления.

const maxBigInt = Number.MAX_SAFE_INTEGER
const minBigInt = Number.MIN_SAFE_INTEGER


exports.addition = (a, b) => {
  if ((a > minBigInt && a < maxBigInt) && (b > minBigInt && b < maxBigInt)) {
    return +a + (+b)
  } else {
    return (BigInt(a) + BigInt(b)).toString()
  }
}


exports.subtraction = (a, b) => {
  if ((a > minBigInt && a < maxBigInt) && (b > minBigInt && b < maxBigInt)) {
    return +a - (+b)
  } else {
    return (BigInt(a) - BigInt(b)).toString()
  }
}


exports.multiplication = (a, b) => {
  if ((a > minBigInt && a < maxBigInt) && (b > minBigInt && b < maxBigInt)) {
    return +a * (+b)
  } else {
    return (BigInt(a) * BigInt(b)).toString()
  }
}

exports.division = (a, b) => {
  if ((a > minBigInt && a < maxBigInt) && (b > minBigInt && b < maxBigInt)) {
    return +a / (+b)
  } else {
    return (BigInt(a) / BigInt(b)).toString()
  }
}

//-----

exports.calculator = {
  '+': function (a, b) { return a + b },
  '-': function (a, b) { return a - b },
  '*': function (a, b) { return a * b },
  '/': function (a, b) { return a / b },
  'calc': function (a, b, op) {
    const maxBigInt = Number.MAX_SAFE_INTEGER
    const minBigInt = Number.MIN_SAFE_INTEGER
    if ((a > minBigInt && a < maxBigInt) && (b > minBigInt && b < maxBigInt)) {
      return this[op](+a, +b)
    } else {
      return this[op](BigInt(a), BigInt(b)).toString()
    }

  }
}
//console.log(calculator.calc('5987342879234789234897', '-23489072349807239487', '+'))
