const express = require('express');
const app = express();
const path = require('path');

app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.get(['/', '/:url'], (req,res,next)=>{
  if(req.params.url != undefined) res.sendFile(path.join(__dirname, './public/', req.params.url))
  // if(req.params.url != undefined) next();
  else res.render('index');
})
app.use('/', express.static(path.join(__dirname, './public')));


app.listen(3000, ()=>{
  console.log('server started...');
})