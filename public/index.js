const body = document.querySelector('body');

function fetchUser() {
  var url = 'https://jsonplaceholder.typicode.com/users/1'
  return fetch(url).then(function(response) {
    //console.log(response.json())
    return response.json();
  });
}

function fetchTodo() {
  var url = 'https://jsonplaceholder.typicode.com/todos/1';
  return fetch(url).then(function(response) {
    //console.log(response.json())
    return response.json();
  });
}

// fetchUser();
// fetchTodo();

ss()
async function ss(){
  logTodoTitle();
  console.log(3);
}

async function logTodoTitle() {
  var user = await fetchUser();
  if (user.id === 1) {
    var todo = await fetchTodo();
    console.log(todo.title); // delectus aut autem
  }
}


var view = {
  title: "Joe",
  calc: function () {
    return 2 + 4;
  }
};

var output = Mustache.render("{{title}} spends {{calc}}", view);
console.log(output)

function renderHello() {
  fetch('aa.txt')
    .then((response) => response.text())
    .then((template) => {
      var rendered = Mustache.render(template, { name: 'Luke' });
      document.getElementById('target').innerHTML = rendered;    
      console.log(template)
    });
}

function getTemplate() {
  return fetch('template.json').then((response)=>(response.json()))
}
// renderHello1();

async function render(){
  let template = await getTemplate();
  template = Mustache.render(template['template1'], {name : 'Brian'});
  body.innerHTML += template;
  console.log(2);
}

render();
console.log(1);