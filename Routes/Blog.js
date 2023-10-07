const express = require('express');
const router = express.Router();
const { addBlog } = require('../Controllers/blogController');
const upload = require('../middleware/multerMiddleware');


router.post('/addblog', upload.array('images'), addBlog);
// router.post('/editblog', upload.array('images'), editBlog);
// router.get('/getallblogss', getAllBlogs);
// router.delete('/deleteblog/:productId', deleteBlog);

module.exports = router;
