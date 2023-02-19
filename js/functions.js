function length(str) {
  if (str >= 18) {
    return (true);
  } else {
    return (false);
  }
}

console.log(length(('проверяемая строка', 20)));
console.log(length(('проверяемая строка', 18)));
console.log(length(('проверяемая строка', 10)));

function palindrome(str) {
  str = str.toLowerCase();
  return str === str.split('').reverse().join('');
}

console.log(palindrome('топот')); // Результат: true - строка является палиндромом
console.log(palindrome('ДовОд')); // Результат: true - несмотря на разный регистр, тоже палиндром
console.log(palindrome('Кекс')); // Результат: false - это не палиндром

function numFromStr(str) {
  str = str.replace(/[^0-9]/g, '');
  if (str.length !== 0) {
    return str;
  }
  return ('Nan');
}

console.log(numFromStr('2023 год'));// Результат: число 2023
console.log(numFromStr('ECMAScript 2022'));// Результат: число 2022
console.log(numFromStr('1 кефир, 0.5 батона')); // Результат: число 105
console.log(numFromStr('а я томат'));// Результат: NaN


// // Добавочный символ использован один раз
// имя_функции('1', 2, '0');// Результат: строка '01'

// // Добавочный символ использован три раза
// имя_функции('1', 4, '0');// Результат: строка '0001'

// // Добавочные символы обрезаны с конца
// имя_функции('q', 4, 'werty');// Результат: строка 'werq'

// // Добавочные символы использованы полтора раза
// имя_функции('q', 4, 'we');// Результат: строка 'wweq'

// // Добавочные символы не использованы, исходная строка не изменена
// имя_функции('qwerty', 4, '0'); // Результат: строка 'qwerty'
