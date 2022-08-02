/** @format */

import './style.css';
import Icon from './review.png';

function component() {
  const element = document.createElement('div');
  element.classList.add('hello');

  // Add the image to our existing div.

  const myIcon = new Image();

  myIcon.src = Icon;

  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());
