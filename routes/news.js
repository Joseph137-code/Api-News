const express            = require('express')
const router             = express.Router();

const {welcome, getNews, newsCategory } = require('../controllers/newsControllers')

router.get('/news', welcome )

router.get('/obtain', getNews)

router.get('/news/:category', newsCategory)

module.exports = router;