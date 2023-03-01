// в node.js экспортирую функции через exports.functionName
// exports.getAllCategory = factory.getAll(Category);

// подключаю через require
// const factory = require('./handlerFactory');
// const Category = require('../models/categoryModel');


//Пример использования
// const authController = require('../controllers/authController')
//
// router
//   .route('/')
//   .get(categoryController.getAllCategory)
//   .post(
//     authController.protect,
//     authController.restrictTo('admin', 'member'),
//     categoryController.createCategory,
//   )

// в react обычный import, export

// ** 1.1. Преобразование строки к нижнему регистру, но первая буква большая. “Abscd”

// переведет первый символ в верхний регистр при условии, что это буква
exports.upperCase = str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

// console.log(upperCase('привет'))
// console.log(upperCase('ПРИВЕТ'))

// ** 1.2. Преобразование строки с целью правильно расстановки пробелов
/**
 * “Вот пример строки,в которой     используются знаки препинания.После знаков должны стоять пробелы , а перед знаками их быть не должно .    Если есть лишние подряд идущие пробелы, они должны быть устранены.” =>
 * “Вот пример строки,в которой используются знаки препинания. После знаков должны стоять пробелы, а перед знаками их быть не должно. Если есть лишние подряд идущие пробелы, они должны быть устранены.”
 */


const str = 'Вот пример строки,в которой     используются знаки препинания.После знаков должны стоять пробелы , а перед знаками их быть не должно .    Если есть лишние подряд идущие пробелы, они должны быть устранены.'

exports.textTransform = str => str
  .replace(/,/g, ', ')
  .replace(/ ,/g, ', ')
  .replace(/ \./g, '. ')
  .replace(/\./g, '. ')
  .replace(/ + /g, ' ')
  .trim()

//console.log(textTransform(str))

// ** 1.3. Посдчитывающие кол-во слов в строке.

exports.countWords = str => {
  var count = 0;
  var words = str.split(' ');
  for (i = 0; i < words.length; i++) {
    if (words[i] != '') {
      count += 1
    }
  }

  return count
}
//console.log(countWords(str))

// ** 1.4. Подсчитывающий, уникальные слова.
/**
 * “Текст, в котором слово текст несколько раз встречается и слово тоже” - в ответе, что “слово - 2 раза, текст - 2 раза, в - 1 раз, несколько - 1 раз“. 
 * Самостоятельно придумать наиболее удачную структуру данных для ответа.
 */

const str2 = 'Текст, в котором слово текст несколько раз встречается и слово тоже'

exports.unique = str => {
  const arr = str.toLowerCase().replace(/,/g, '').split(' ')
  let counts = {}
  let result = []

  for (let i in arr) {
    if (counts[arr[i]]) {
      counts[arr[i]]++
    } else {
      (counts[arr[i]] = 1)
    }
  }
  let j = 0;
  for (let i in counts) {
    result[j++] = {
      word: i,
      count: counts[i]
    };
  }
  return result
}


//console.log(unique(str2))
