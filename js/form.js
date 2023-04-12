import { activateScale, resetScale } from './form-scale.js';
import { changeEffect, resetFilter, createSlider } from './form-effects.js';
import { addValidator, resetPristine, validatePristine } from './form-validate.js';
import { renderFailMessage, renderSuccessMessage } from './send-messages.js';
import { sendData } from './api.js';

const GET_URL = 'https://28.javascript.pages.academy/kekstagram';
const form = document.querySelector('.img-upload__form');
const overlay = document.querySelector('.img-upload__overlay');
const cancelButton = document.querySelector('#upload-cancel');
const fileField = document.querySelector('#upload-file');
const effectsField = document.querySelector('.effects');
const submitButton = document.querySelector('.img-upload__submit');
const image = document.querySelector('.img-upload__preview img');

const onSendFail = () => {
  renderFailMessage();
  submitButton.disabled = false;
};

const openModal = () => {
  overlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

const closeModal = () => {
  form.reset();
  resetScale();
  resetFilter();
  resetPristine();
  overlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

const onSendSuccess = () => {
  renderSuccessMessage();
  closeModal();
  submitButton.disabled = false;
};

const onCancelButtonClick = () => closeModal();
const onFileInputChange = (evt) => {
  image.src = URL.createObjectURL(evt.target.files[0]);
  openModal();
};
const onEffectsFieldChange = (evt) => changeEffect(evt);

const onFormSubmit = (evt) => {
  evt.preventDefault();
  if (validatePristine()) {
    submitButton.disabled = true;
    sendData(GET_URL, onSendSuccess, onSendFail, new FormData(evt.target));
  }
};

function onDocumentKeydown(evt) {
  if (evt.key === 'Escape' && !evt.target.closest('.text__hashtags') &&
    !evt.target.closest('.text__description')) {
    if (document.querySelector('.error')) {
      return;
    }
    evt.preventDefault();
    closeModal();
  }
}

const addFormAction = () => {
  fileField.addEventListener('change', onFileInputChange);
  cancelButton.addEventListener('click', onCancelButtonClick);
  effectsField.addEventListener('change', onEffectsFieldChange);
  form.addEventListener('submit', onFormSubmit);
  activateScale();
  addValidator();
  createSlider();
};

export { addFormAction };
