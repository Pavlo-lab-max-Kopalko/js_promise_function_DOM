'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve, reject) => {
    element.addEventListener('click', (e) => {
      if (e.target === element) {
        resolve(
          `It was ${eventName} on the element: ${element.nodeName}, id: ${element.id}.`,
        );
      }
    });

    element.addEventListener('contextmenu', (e) => {
      if (e.target === element) {
        resolve(
          `It was ${eventName} on the element: ${element.nodeName}, id: ${element.id}.`,
        );
      }
    });

    element.addEventListener('blur', (e) => {
      if (e.target === element) {
        resolve(
          `It was ${eventName} on the element: ${element.nodeName}, id: ${element.id}.`,
        );
      }
    });
  });
}

const printMessage = (message) => {
  const newDiv = document.createElement('div');
  const newComtent = document.createTextNode(message);

  newDiv.className = 'message';
  newDiv.appendChild(newComtent);

  document.body.insertAdjacentElement('beforebegin', newDiv);
};

const loginField = document.getElementById('login');
const passwordField = document.getElementById('password');
const button = document.getElementById('submit');

waitFor(loginField, 'click').then(printMessage);
waitFor(passwordField, 'click').then(printMessage);
waitFor(button, 'click').then(printMessage);

waitFor(loginField, 'input').then(printMessage);
waitFor(passwordField, 'input').then(printMessage);

waitFor(loginField, 'blur').then(printMessage);
waitFor(passwordField, 'blur').then(printMessage);
waitFor(button, 'blur').then(printMessage);
