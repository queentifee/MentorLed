const Interview = require("../models/interview"); 

const dotenv = require ("dotenv");

dotenv.config();


exports.interviewQuestions = async (req, res) => {
  const { title,  description, questions } = req.body;

  if (!title || !description || !questions || !Array.isArray(questions)) {
    return res.status(400).json({ message: 'All fields are required' });
  }
  try {
    // Save form data to the database
    const newData = new Interview({
      title,
      description,
      questions,
    });
    await newData.save(); 

    res.status(201).json({
      message: 'new data submitted successfully!',
      data: { title, description, questions } 
    });
  } catch (error) {
    console.error('Error saving data:', error);
    res.status(500).json({ message: 'Failed to save data', error: error.message });
  }
};

  