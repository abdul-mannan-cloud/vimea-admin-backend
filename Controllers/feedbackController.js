const Feedback = require('../models/Feedback');

const getAllFeedback = async (req, res) => {
    try {
        const feedback = await Feedback.find();
        res.json(feedback);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const addFeedback = async (req, res) => {
    try {
        const newFeedback = new Feedback(req.body);
        const savedFeedback = await newFeedback.save();
        res.status(201).json(savedFeedback);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


module.exports = {
    getAllFeedback,
    addFeedback,
};
