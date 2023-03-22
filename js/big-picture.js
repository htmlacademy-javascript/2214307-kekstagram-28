const bigPicture = document.querySelector('.big-picture');
const bigPicture__cancel = document.querySelector('.big-picture__cancel');
const bigPictureImg = document.querySelector('.big-picture__img img');
const LikesCount = document.querySelector('.likes-count');
const SocialCaption = document.querySelector('.social__caption');
const SocialCommentsList = document.querySelector('.social__comments');
const SocialCommentsItem = document.querySelector('.social__comment');
const SocialCommentsLoader = document.querySelector('.social__comments-loader');
const SocialCommentsCount = document.querySelector('.social__comments-count');

const fillBigPicture = (photo) => {
console.log(photo);
SocialCaption.textContent = photo.description;
bigPictureImg.alt = photo.description;
bigPictureImg.src = photo.url;
LikesCount.textContent = photo.likes;
};

const openBigPicture = (photo) => {
  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');
};

const closeBigPicture = (photo) => {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
};


export {openBigPicture};
