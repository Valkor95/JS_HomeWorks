'use strict' //eslint-disable-line

(function () {
  const generateList = function (array) {
    const ul = document.createElement('ul');

    array.forEach((item) => {
      const li = document.createElement('li');

      if (!Array.isArray(item)) {
        li.textContent = item;
      } else {
        const next = generateList(item);
        li.append(next);
      }

      ul.append(li);
    });

    return ul;
  };

  const creatTree = function (container, arr){
    document.querySelector(container).prepend(generateList(arr));
  }

  const array = [1, 2, [1.1, 1.2, 1.3], 3];
  creatTree('body', array)
}());
