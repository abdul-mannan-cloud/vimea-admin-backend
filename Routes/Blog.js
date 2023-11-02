const express = require('express');
const router = express.Router();
const { addBlog, editBlog, getAllBlogs, deleteBlog } = require('../Controllers/blogController');

router.post('/addblog', addBlog);
router.post('/editblog', editBlog);
router.get('/getallblogs', getAllBlogs);
router.delete('/deleteblog/:blogId', deleteBlog);

module.exports = router;
