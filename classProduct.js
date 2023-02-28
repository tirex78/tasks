/**
 * 3. Создать класс данных “Товар”
 * С полями
 * Название
 * Цена
 * Количество
 * Описание
 * Наполнить массив объектами такого класса.
 * Написать метод, который получает строку вида
 * ================
 * “name-contains-fd&price-=2&quantity->5&description-ends-abc”
 * "name-starts-fd&quantity-=5"
 * 
 * На выходе возвращает массив, только с подходящими объектами
 * возможны (contains, starts, ends для строковых и <, =, >, <=, >= для числовых) 
 */

class Product {
  constructor(name, price, quantity, description) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.description = description;
  }

}

// Расширяем базовый прототип класса(объекта), добавляем новые поля и функции
String.prototype.contains = String.prototype.includes //Проверяем, содержит ли строка указанную подстроку.
String.prototype.starts = String.prototype.startsWith //Проверяем, начинается ли строка с указанных символов.
String.prototype.ends = String.prototype.endsWith //Проверяем, заканчивается ли строка символами, заданными первым параметром
Number.prototype['>'] = function (value) {
  return this > value;
}
Number.prototype['<'] = function (value) {
  return this < value;
}
Number.prototype['='] = function (value) {
  return this == value;
}
Number.prototype['<='] = function (value) {
  return this <= value;
}
Number.prototype['>='] = function (value) {
  return this >= value;
}

function filter(arr, str) {
  const strArr = str.split('&') // разбиваем строку
  const props = strArr.map(item => ({
    // создаем объект с параметрами используя регулярные выражения для разбивки, test проверяет наличие -, если есть true
    obj: item.split(/(-|>=?|<=?|=)/).filter(v => v && /[^-]/.test(v))
  }));
  const newArr = arr.filter(value => {
    for (let prop of props) {
      if (!value[prop.obj[0]][prop.obj[1]](prop.obj[2]))
        return false;
    }
    return true; // если true добавляем элемент в новый массиы
  })

  return newArr;
}

let arr = []

arr.push(new Product('Bookfd', 2, 3, 'descrabc'))
arr.push(new Product('fd_Book_2', 2, 7, 'descr_2 abc'))
arr.push(new Product('Book', 15, 8, 'descr_3'))
arr.push(new Product('fdBook', 2, 5, 'abc descr'))
arr.push(new Product('FirstBookfd', 2, 8, 'descr_abc'))

console.log(arr)

console.log(filter(arr, 'name-contains-fd&price-=2-&quantity->5&description-ends-abc'))

console.log(filter(arr, 'name-starts-fd&quantity-=5'))