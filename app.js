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

app.get('/practice', (req,res,next)=>{
  res.sendFile(path.join(__dirname, './public/practice.html'))
})

app.get('/api/practice1', (req,res,next)=>{
  
  const people = 
  [
    {
    'name' : '최병찬',
    'age' : 29,
    'job' : 'web developer'
    },
    {
      'name' : '유지예',
      'age' : 28,
      'job' : 'web developer'
    },
    {
      'name' : '허정윤',
      'age' : 27,
      'job' : 'web developer'
    },
    {
      'name' : '김진수',
      'age' : 26,
      'job' : 'web developer'
    }
  ];
  const result = {'people' : people}
  res.json(result);
})

app.listen(3000, ()=>{
  console.log('server started... http://localhost:3000/');
})
