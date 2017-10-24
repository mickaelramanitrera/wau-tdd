var express = require('express');
var router = express.Router();

//get all todos
router.get('/todo', function(req, res, next) {
    res.json({message : 'Get all todos'}, 200);
});

//post a todo
router.post('/todo', function(req, res, next) {
    res.json({message : 'Add a new todo'}, 200);
});

//update a todo
router.put('/todo/:id', function(req, res, next) {
    var id = req.params.id;
    res.json({message : 'Update todo with id '+id}, 200);
});

//delete a todo
router.delete('/todo/:id', function(req, res, next) {
    var id = req.params.id;
    res.json({message : 'Delete a todo with id '+id}, 200);
});

module.exports = router;