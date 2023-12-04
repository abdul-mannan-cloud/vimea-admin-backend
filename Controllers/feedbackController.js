const Feedback = require('../Models/Feedback');

const getAllFeedback = async (req, res) => {
    try {
        const feedback = await Feedback.find({});
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

const editFeedback = async (req,res) => {
    try{
        const id = req.body._id;
        console.log("hello wolrd")
        console.log(req.body)
        const updatedFeedback = await Feedback.findByIdAndUpdate(id,req.body,{new:true});
        console.log("hello wolrd11")
        console.log(updatedFeedback)
        res.status(200).json(updatedFeedback);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


module.exports = {
    getAllFeedback,
    addFeedback,
    editFeedback
};
