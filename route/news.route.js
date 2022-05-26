const { Router } = require('express');
const { newsController } = require('../controllers/news.controller');


const router = Router();

router.post('/news', newsController.postNews)
router.delete('/news/:id', newsController.deleteNews)
router.patch('/news/:id', newsController.patchNewsId)
router.get('/news/:id', newsController.getNewsId)
router.get('/news', newsController.getNews)
router.get('/news/category/:id', newsController.getNewsCategory)

module.exports = router