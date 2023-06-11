'use strict'

/***********************
 * 
 *  COMMENT JS BLOCK
 * 
 */

console.log('js ready');
// Создаем массив из 5 элементов
let array = [];
for (let i = 0; i < 5; i++) {
  // Создаем каждый вложенный массив
  let nestedArray = [];
  let length = getRandomInt(5, 10); // Генерируем случайное число от 5 до 10
  for (let j = 0; j < length; j++) {
    let randomNumber = getRandomInt(1, 100); // Генерируем случайное число от 1 до 100
    nestedArray.push(randomNumber);
  }
  array.push(nestedArray);
}

// Получаем самые большие числа из каждого вложенного массива
let maxNumbers = array.map(nestedArray => Math.max(...nestedArray));

console.log(array);
console.log(maxNumbers);

// Функция для генерации случайного целого числа в заданном диапазоне
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
