'use strict';

const tree = document.querySelector('.tree');
const { children } = tree;

for (const el of children) {
  el.classList.add('header');
}

const headers = document.querySelectorAll('.header');

headers.forEach(header => {
  const span = document.createElement('span');

  span.textContent = header.childNodes[0].textContent;
  header.childNodes[0].replaceWith(span);

  const list = header.querySelector('ul');

  span.addEventListener('click', () => {
    if (list.style.display === '') {
      list.style.display = 'none';
    } else {
      list.style.display = '';
    }
  });
});
