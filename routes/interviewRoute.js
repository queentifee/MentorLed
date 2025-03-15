const express = require('express');
const router = express.Router();
const { getAllInterviews, getInterviewById, getPaginatedInterviews } = require ('../controllers/interviewController')

router.get ('/get-all-interviews', getAllInterviews)
router.get ('/get-interview-by-id/:id', getInterviewById)
router.get ('/get-paginated-interviews', getPaginatedInterviews)

module.exports = router;