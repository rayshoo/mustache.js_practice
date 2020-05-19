function renderHello() {
  fetch('aa.txt')
    .then((response) => response.text())
    .then((template) => {
      var rendered = Mustache.render(template, { name: 'Luke' });
      document.getElementById('target').innerHTML = rendered;    
      console.log(template)
    });
}
renderHello();