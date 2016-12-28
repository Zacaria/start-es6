/**
 * The import example leverages the need of browserify
 * This is also applicable to require problems
 */
import {someValue} from './other';

const es6Func = (param = '') => {
  document.querySelector('.gulp').classList.add('is-success');
  document.querySelector('.gulp .imported').innerText += ' ' + param;
};

es6Func(someValue);
