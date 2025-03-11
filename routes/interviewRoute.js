const express = require('express');
const router = express.Router();
const { interviewQuestions } = require ('../controllers/interviewController')

router.post('/interview-questions', interviewQuestions);

module.exports = router;