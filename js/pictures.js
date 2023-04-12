import { openBigPicture } from './big-picture.js';
import { getData } from './api.js';
import { initFilter } from './filter.js';

const GET_URL = 'https://28.javascript.pages.academy/kekstagram/data';
const ERROR_TIMEOUT = 5000;
const thumbnailTemplate = document.querySelector('#picture').content.querySelector('.picture');
const container = document.querySelector('.pictures');
const ERROR_TEXT = 'ПРоизошла Ошибка';

const createThumbnail = (data) => {
  const thumbnail = thumbnailTemplate.cloneNode(true);
  const img = thumbnail.querySelector('.picture__img');
  img.src = data.url;
  img.alt = data.description;
  thumbnail.querySelector('.picture__comments').textContent = data.comments.length;
  thumbnail.querySelector('.picture__likes').textContent = data.likes;

  thumbnail.addEventListener('click', (event) => {
    event.preventDefault();
    openBigPicture(data);
  });
  return thumbnail;
};

const renderThumbnails = (data) => {
  data.forEach((item) => container.append(createThumbnail(item)));
};

const onGetSuccess = (data) => {
  renderThumbnails(data);
  initFilter(data);
};

const onGetFail = () => {
  const errorBlock = document.createElement('div');
  errorBlock.style.position = 'fixed';
  errorBlock.style.top = '0';
  errorBlock.style.width = '100%';
  errorBlock.style.height = '60px';
  errorBlock.style.color = 'red';
  errorBlock.style.textAlign = 'center';
  errorBlock.style.padding = 'center';
  errorBlock.textContent = ERROR_TEXT;
  document.body.append(errorBlock);

  setTimeout(() => {
    errorBlock.remove();
  }, ERROR_TIMEOUT);
};

const getPicturesData = () => getData(GET_URL, onGetSuccess, onGetFail);
export { getPicturesData, renderThumbnails };
