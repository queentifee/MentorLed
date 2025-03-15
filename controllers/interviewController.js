const Interview = require("../models/interview"); 

const dotenv = require ("dotenv");

dotenv.config();




exports.getAllInterviews = async (req, res) => {
  try {
    const Interviews = await Interview.find();
    res.status (200).json(Interviews);
  
  }catch (error) {
    res.status(500).json ({ error: error.message});
  }

};

exports.getInterviewById = async (req, res) => {
  try {
    const Interviews = await Interview.findById(req.params.id);
    if (!Interviews) {
      return res.status (404).json ({ error: 'Interview not found' });
    }
    res.json(Interviews);
  }catch (error) {
    res.status(500).json ({ error: error.message })
  }
};

exports.getPaginatedInterviews = async (req, res) => {
  try{
    let { page = 1, limit = 10} = req.query; 

    page = parseInt(page);
    limit = parseInt(limit);

    if (page < 1 || limit < 1) {
      return res.status (400).json ({ error: "Page and limit must be positive numbers"})
    }

    const totalInterviews = await Interview.countDocuments(); // Get total interviews
    const interviews = await Interview.find().skip((page - 1) * limit).limit(limit);

    res.json ({
      totalInterviews,
      currentPage: page,
      totalPages: Math.ceil(totalInterviews/limit),
      interviews
    });


  } catch (error) {
     res.status(500).json ({ error: error.message});
  }
  
};


  