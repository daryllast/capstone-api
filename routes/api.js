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
  console.log(req.params)
  let questions = await Question.findAll({where: {categoryId: req.params.categoryId }})
  res.json(questions)
});

//GET /answers
router.get('/questions/:questionId/answers', async function(req, res, next) {
  // HINT: req.query, req.query.questionId
  let answers = await Answer.findAll({where: {questionId: req.params.questionId}})
  res.json(answers)
});

// POST questions - create an answer for category
router.post('/categories/:categoryId/questions', async function (req, res, next) {
  //r req.query, req.query.questionId 
  console.log('req.body', req.body)
    console.log('req.params', req.params)
    req.body.categoryId = req.params.categoryId
    console.log('the final body is', req.body)
  // let answers = await Answer.findAll({where: {questionID: 'something that you send from the front end'}})
let question = await Question.create(req.body)
  res.json(question)
 
});


//POST answers
router.post('/questions/:questionId/answers', async function (req, res, next) {
  //r req.query, req.query.questionId 
  console.log('req.body', req.body)
    console.log('req.params', req.params)
    req.body.questionId = req.params.questionId
    console.log('the final body is', req.body)
  // let answers = await Answer.findAll({where: {questionID: 'something that you send from the front end'}})
let answer = await Answer.create(req.body)
  res.json(answer)
 
});

router.get('/test', function(req, res, next) {
    res.json({sucess:true})
  });

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
