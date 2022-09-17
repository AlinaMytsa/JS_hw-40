'use strict';


const dataForList = JSON.parse(window.localStorage.getItem('inputData'));

const list = document.body.appendChild(document.createElement('ul'));
console.log(dataForList);

for (let key in dataForList){
list.appendChild(document.createElement('li')).innerText = `${key}: ${dataForList[key]}`;

}
