const COMMENT_COUNTER = 5;

const bigPicture = document.querySelector('.big-picture');
const bigPictureCancel = document.querySelector('.big-picture__cancel');
const bigPictureImg = document.querySelector('.big-picture__img img');
const likesCount = document.querySelector('.likes-count');
const socialCaption = document.querySelector('.social__caption');
const socialCommentsList = document.querySelector('.social__comments');
const socialCommentsItem = document.querySelector('.social__comment');
const socialCommentsLoader = document.querySelector('.social__comments-loader');
const socialCommentsCount = document.querySelector('.social__comments-count');

let comments = [];
let showingComments = [];

const fillCommentCount = () => {
  socialCommentsCount.innerHTML = `${showingComments} из <span class="comments-count">${comments.length}</span> комментариев`;
};

const createComment = (comment) => {
  const commentTemplate = socialCommentsItem.cloneNode(true);
  const img = commentTemplate.querySelector('.social__picture');
  commentTemplate.querySelector('.social__text').src = comment.message;
  img.src = photo.avatar;
  img.alt = photo.name;
  return picture;
};

const renderComments = () => {
  comments.forEach((comment) => socialCommentsList.append(createComment(comment)));
};

const fillBigPicture = (photo) => {
  comments = photo.comments;
  socialCaption.textContent = photo.description;
  bigPictureImg.alt = photo.description;
  bigPictureImg.src = photo.url;
  likesCount.textContent = photo.likes;
};

const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  bigPictureCancel.removeEventListener('click', onBigPictureCancelClick);
  document.removeEventListener('keydown', onBigPictureKeydown);
};

const openBigPicture = (photo) => {
  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');
  fillBigPicture(photo);
  renderComments();
  bigPictureCancel.addEventListener('click', onBigPictureCancelClick);
  document.addEventListener('keydown', onBigPictureKeydown);
};

function onBigPictureKeydown(evt) {
  if (evt.keycode === 'Escape' && !evt.target.closest('.social__footer-text')) {
    evt.preventDefault();
    closeBigPicture();
  }
}

function onBigPictureCancelClick(evt) {
  evt.preventDefault();
  closeBigPicture();
}


export { openBigPicture };
