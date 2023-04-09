import {openBigPicture} from './big-picture.js';
import {getData} from './api.js';

const GET_URL = 'https://28.javascript.pages.academy/kekstagram/data';
const thumbnailTemplate = document.querySelector('#picture').content.querySelector('.picture');
const container = document.querySelector('.pictures');

const createThumbnail = (data) => {
  const thumbnail = thumbnailTemplate.cloneNode(true);
  thumbnail.querySelector('.picture__img').src = data.url;
  thumbnail.querySelector('.picture__img').src = data.description;
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

const onGetSuccess = (data) => renderThumbnails(data);
const onGetFail = () => {

};

const getPicturesData = () => getData(GET_URL, onGetSuccess, onGetFail);
export {getPicturesData};
