import{getRandomInteger} from './util.js';

const DESCRIPTIONS = ['я', 'это снова я', 'люди с улицы', 'неизвестно что', 'природа'];

const MESSAGES = ['Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = ['Аня', 'Борис', 'Иван', 'Маша', 'Жора'];

const POST_COUNT = 25;

let postIndex = 1;

let commentIndex = 1;

const createMessage = () => {
  const message = Array.from({ length: getRandomInteger(1, 2) }, () =>
    MESSAGES[getRandomInteger(0, MESSAGES.length - 1)])

  return Array.from(new Set(message)).join(' ');
};

const createComment = () => ({
  id: commentIndex++,
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: createMessage(),
  name: NAMES[getRandomInteger(0, NAMES.length - 1)],
});

const createPost = () => ({
  id: postIndex,
  url: `photos/${postIndex++}.jpg`,
  descriptions: DESCRIPTIONS[getRandomInteger(0, DESCRIPTIONS.length - 1)],
  likes: getRandomInteger(15, 200),
  comments: Array.from({ length: getRandomInteger(1, 10) }, createComment),
});

const createPosts = () => Array.from({ length: POST_COUNT }, createPost);
console.log(createPosts());

export{createPosts};
