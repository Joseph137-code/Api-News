const express            = require('express')
const router             = express.Router();

const {welcome, getNews, newsCategory } = require('../controllers/newsControllers')

router.get('/', welcome )

router.get('/news', getNews)

router.get('/news/:category', newsCategory)

module.exports = router;