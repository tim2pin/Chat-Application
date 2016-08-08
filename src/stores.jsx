import Horizon from '@horizon/client';

const horizon = Horizon({
  secure: false,
  host: 'localhost:8181'
});

const chat = horizon('comments');

export {chat};
