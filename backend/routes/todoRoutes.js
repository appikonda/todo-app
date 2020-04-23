var express = require('express');
var router = express.Router();
var path = require('path');



let Todo = require('../models/todo');

// get todos list
router.get('/', (req, res, next) => {
    console.log("posting...");
    Todo.find((err, todos) => {
        if(err){
            console.log(err);
        }else{
            console.log(todos)
            res.json(todos);
        }
    });
  });

  router.post('/add', function(req, res, next) {
    console.log("posting...");
    console.log(req.body);
    console.log("------")
 
    let todo = new Todo(req.body);

    todo.save().then(todo =>{
        console.log("todo added successfully");
        res.status(200).json({'todo': 'todo added successfully'});
    }).catch(err =>{
        console.log("todo failed ");
        res.status(400).send('failed to add todo')

    })
  });

  
router.get('/todo/:id', (res, req) => {
    let id = req.params.id;
    Todo.findById(id, (err, todo)=>{
         if(err) console.log(err) 
         else res.json(todo) 
    });
});

router.post('/update/:id', (res,req) =>{
    let id = req.params.id;
    Todo.findById(id,(err, todo)=>{
        if(!todo){
            res.send()
        }else{
          todo.description = req.body.description;
          todo.responsible = req.body.responsible;
          todo.completed = req.body.completed;
          todo.prioriy = req.body.prioriy;
          todo.save().then(() => {
            res.json('Todo updated!');
        })
        .catch(err => {
            res.status(400).send("Update not possible");
        });
        }
    } );
})


module.exports = router;
