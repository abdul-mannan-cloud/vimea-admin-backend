const express = require('express');
const router = express.Router();
const { addBlog, editBlog, getAllBlogs, deleteBlog } = require('../Controllers/blogController');
const upload = require('../middleware/multerMiddleware');


router.post('/addblog', upload.array('images'), addBlog);
router.post('/editblog', upload.array('images'), editBlog);
router.get('/getallblogs', getAllBlogs);
router.delete('/deleteblog/:blogId', deleteBlog);

module.exports = router;
