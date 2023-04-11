import { renderThumbnails } from './pictures.js';
import { shuffleArray } from './util.js';

const RANDOM_COMMENTS_COUNT = 10;

const imgFilters = document.querySelector('.img-filters');

const removeElements = (elements) => {
  elements.forEach((element) => element.remove());
};

const rerenderThumbnails = (data, id) => {
  const dataCopy = data.slice();
  removeElements(document.querySelectorAll('.picture'));
  if (id === 'filter-discussed') {
    const sortArray = dataCopy.sort((a, b) => a.comments.length - b.comments.length);
    renderThumbnails(sortArray);
    return;
  }
  if (id === 'filter-random') {
    const sortArray = shuffleArray(dataCopy).slice(0, RANDOM_COMMENTS_COUNT);
    renderThumbnails(sortArray);
    return;
  }
  renderThumbnails(data);
};

const onImgFiltersClick = (evt, data) => {
  if (evt.target.closest('.img-filters__button') && !evt.target.closest('img-filters__button--active')) {
    document.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
    evt.target.classList.add('img-filters__button--active');
    const id = evt.target.id;
    rerenderThumbnails(data, id);
  }
};

const initFilter = (data) => {
  imgFilters.classList.remove('img-filters--inactive');
  imgFilters.addEventListener('click', (evt) => {
    onImgFiltersClick(evt, data);
  });
  // renderThumbnails(data);
};

export { initFilter };
