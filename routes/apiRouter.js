const router = require('express').Router()
const ShipApi = require('./images/shipImage.js')
const FetchApi = require('./discord/fetchBanner.js');
const QuestionApi = require('./fun/questions.js');

router.get('/discord/fetchBanner', FetchApi)
router.get('/imgs/ship', ShipApi)
router.get('/fun/question', QuestionApi)

module.exports = router