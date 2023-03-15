import {createPosts} from './data.js';

const dataPhotos = createPosts();
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const pictures = document.querySelector('.pictures');

const createPhoto = (photo) => {
  const picture = pictureTemplate.cloneNode(true);
  picture.querySelector('.picture__img').src = photo.url;
  picture.querySelector('.picture__comments').textContent = photo.comments.length;
  picture.querySelector('.picture__likes').textContent = photo.likes;
  return picture;
};

const renderPhotos = () => dataPhotos.forEach((photo) => pictures.append(createPhoto(photo)));
export {renderPhotos};
