const checkstring = (string, length) => String(string.length <= length);

console.log(checkstring('проверяемая строка', 20));
console.log(checkstring('проверяемая строка', 18));
console.log(checkstring('проверяемая строка', 10));

const checkStringIs = (string) => {
  string = String(string).toLowerCase().replace(/\s/g, '');
  return string === string.split('').reverse().join('');
};

console.log(checkStringIs('топот')); // Результат: true - строка является палиндромом
console.log(checkStringIs('ДовОд')); // Результат: true - несмотря на разный регистр, тоже палиндром
console.log(checkStringIs('Кекс')); // Результат: false - это не палиндром

const findNumberInStr = (string) => {
  string = String(string).replace(/[^0-9]/g, '');
  return parseInt(string, 10);
}

console.log(findNumberInStr('2023 год'));// Результат: число 2023
console.log(findNumberInStr('ECMAScript 2022'));// Результат: число 2022
console.log(findNumberInStr('1 кефир, 0.5 батона')); // Результат: число 105
console.log(findNumberInStr('а я томат'));// Результат: NaN


const createNewString = (string, length, extension) => {
  if (string.length >= length) {
    return string;
  }

  while (string.length < length) {
    const extensionLength = length - string.length;
    string = extension.slice(0, extensionLength) + string;
  }
  return string;
}

// Добавочный символ использован один раз
console.log(createNewString('1', 2, '0'));// Результат: строка '01'

// Добавочный символ использован три раза
console.log(createNewString('1', 4, '0'));// Результат: строка '0001'

// Добавочные символы обрезаны с конца
console.log(createNewString('q', 4, 'werty'));// Результат: строка 'werq'

// Добавочные символы использованы полтора раза
console.log(createNewString('q', 4, 'we'));// Результат: строка 'wweq'

// Добавочные символы не использованы, исходная строка не изменена
console.log(createNewString('qwerty', 4, '0')); // Результат: строка 'qwerty'



