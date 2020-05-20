const tbody = document.querySelector('.tbody');

(async function(){
  let template = document.querySelector('#user-template').innerHTML;
  tbody.innerHTML = Mustache.render(template, await template1Value());  
})()

function template1Value() {
  return fetch('./api/practice1').then((response)=>(response.json()))
}