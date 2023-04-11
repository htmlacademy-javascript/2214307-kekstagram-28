const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

export { getRandomInteger };

const shuffleArray = (array) => {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

const debounce = (callback, timeoutDelay) => {
  let timeoutId;

  return(...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export {shuffleArray, debounce};
