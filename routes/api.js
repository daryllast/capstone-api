var express = require('express');
var router = express.Router();

let {Category, Answer, Question} = require('../lib/models')

//GET /categories
//GET /questions
// GET /answers


//GET /categories
router.get('/categories', async function (req, res, next) {
  let categories = await Category.findAll({})
  res.json(categories)
});

//GET /questions
//http://localhost:3000/api/v1/categories/4/questions //req.params

router.get('/categories/:categoryId/questions', async function (req, res, next) {
  // req.query, req.query.categoryId 
  let questions = await Question.findAll({where: {categoryId: req.params.categoryId }})
  res.json(questions)
});

//GET /answers
router.get('/answers', async function (req, res, next) {
  //r req.query, req.query.questionId 
  app.get('/answers',() => {
    console.log(req.query.questionId)
  })
  let answers = await Answer.findAll({where: {questionID: 'something that you send from the front end'}})
  res.json(answers)
});

router.get('/test', function(req, res, next) {
    res.json({sucess:true})
  });

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;