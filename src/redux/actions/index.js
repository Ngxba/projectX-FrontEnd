const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const SIGNIN = 'SIGNIN';

export const increment = (number = 1) => ({
  type: INCREMENT,
  payload: number,
});

export const decrement = (number = 1) => ({
  type: DECREMENT,
  payload: number,
});

export const signin = () => ({
  type: SIGNIN,
});
