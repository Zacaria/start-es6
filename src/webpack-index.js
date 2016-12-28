/**
 * The import example leverages the need of a bundler
 * This is also applicable to require problems
 */
import {someValue} from './other';

const es6Func = (param = '') => {
  document.querySelector('.webpack').classList.add('is-success');
  document.querySelector('.webpack .imported').innerText += ' ' + param;
};

es6Func(someValue);
