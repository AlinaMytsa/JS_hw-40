'use strict';


const form = document.querySelector('#form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const inputsData = Array.from(
    event.target.querySelectorAll('input, select, textarea')
  )

    .reduce((accum, item) => {
      accum[item.name] = item.value;
      return accum;
    },);

  localStorage.setItem(
    'inputData',
    JSON.stringify(inputsData)
  );

})


