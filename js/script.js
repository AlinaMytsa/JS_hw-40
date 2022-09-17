'use strict';

(function (){

const form = document.querySelector('#form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const inputsData = Array.from(
    event.target.querySelectorAll('input, select, textarea')
  )

    .reduce((accum, item) => {
      accum[item.name] = item.value;
      return accum;
    }, {});

  localStorage.setItem(
    'inputData',
    JSON.stringify(inputsData)
  );



const dataForList = Object.values(inputsData);

const list = document.createElement('ul');

for (let i = 0; i < dataForList.length; i += 1){
  const li = document.createElement('li');
  li.innerHTML = li[i];
  list.append(li);
}

document.body.append(list);

})
})()


