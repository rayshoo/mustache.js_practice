const tbody = document.querySelector('.tbody');
const templateBlocks = document.querySelectorAll('.template-block');

function getTemplate() {
  return fetch('./template.json').then((response)=>(response.json()))
}
function template1Value() {
  return fetch('./api/practice1').then((response)=>(response.json()))
}

render();

async function render(){
  let template = await getTemplate();
  tbody.innerHTML = Mustache.render(template['template2'], await template1Value());  
}