const checkstring = (string, length) => String(string.length <= length);

const checkStringIs = (string) => {
  string = String(string).toLowerCase().replace(/\s/g, '');
  return string === string.split('').reverse().join('');
};


const findNumberInStr = (string) => {
  string = String(string).replace(/[^0-9]/g, '');
  return parseInt(string, 10);
}

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
