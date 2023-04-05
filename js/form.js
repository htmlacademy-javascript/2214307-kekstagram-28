import {activateScale, resetScale} from '../form-scale.js';
// import {changeEffect, resetFilter} from './form-effects.js';
import {addValidator, resetPristine, validatePristine} from './form-validate.js';

const form = document.querySelector('.img-upload__form');
const overlay = document.querySelector('.img-upload__overlay');
const cancelButton = document.querySelector('#upload-cancel');
const fileField = document.querySelector('#upload-file');
// const submitButton = document.querySelector('.img-upload__submit');

const onDocumentKeydown = (evt) => {
  if (evt.key === 'Escape' && !evt.target.closest('.text__hashtags') &&
  !evt.target.closest('.text__description')) {
    evt.preventDefault();
    closeModal();
  }
};

const onCancelButtonClick = () => closeModal();
const onFileInputChange = () => openModal();

const onFormSubmit = (evt) => {
  if (!validatePristine()) {
    evt.preventDefault();
  }
};

const openModal = () => {
  overlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

function closeModal() {
  form.reset();
  resetScale();
  resetPristine();
  overlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
}

const addFormAction = () => {
  fileField.addEventListener('change', onFileInputChange);
  cancelButton.addEventListener('click', onCancelButtonClick);
  form.addEventListener('submit', onFormSubmit);
  activateScale();
  addValidator();
};

export {addFormAction};
