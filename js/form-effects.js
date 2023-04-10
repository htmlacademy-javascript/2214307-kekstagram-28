const RANGE_OPTIONS = {
  chrome: {
    effect: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
  },

  sepia: {
    effect: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
  },

  marvin: {
    effect: 'invert',
    min: 0,
    max: 100,
    step: 1,
  },

  phobos: {
    effect: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
  },

  heat: {
    effect: 'brightness',
    min: 0,
    max: 3,
    step: 0.1,
  },
};

const UNIT = {
  inver: '%',
  blur: 'px',
};

const image = document.querySelector('.img-upload__preview img');
const sliderField = document.querySelector('.img-upload__effect-level');
const effectLevel = document.querySelector('.effect-level__value');

const createSlider = () => {
  noUiSlider.create(sliderField, {
    range: {
      min: 0,
      max: 100,
    },
    start: 100,
    step: 1,
    connect: 'lower',
  });
};

const resetFilter = () => {
  image.style.filter = null;
  sliderField.classList.add('hidden');
};

const changeEffect = (evt) => {
  if (evt.target.value === 'none') {
    resetFilter();
    return;
  }

  sliderField.classList.remove('hidden');

  const {effect, min, max, step} = RANGE_OPTIONS[evt.target.value];
  const unit = UNIT[effect] ? UNIT[effect] : '';

  sliderField.noUiSlider.updateOptions({
    range: {
      min,
      max,
    },
    start: max,
    step,
    connect: 'lower',
  });

  sliderField.noUiSlider.on('update', () => {
    effectLevel.value = sliderField.noUiSlider.get();
    image.style.filter = `${effect}(${effectLevel.value}${unit})`;
  });
};

export {changeEffect,resetFilter,createSlider};


