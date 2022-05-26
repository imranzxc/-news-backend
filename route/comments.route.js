const { Router } = require('express');
const { commentsController } = require('../controllers/comments.controller');


const router = Router();

router.post('/news/comments/:id', commentsController.postComments)
router.delete('/comments/:id', commentsController.deleteComment)
router.get('/news/comments/:id', commentsController.getCommentsById )


module.exports = router