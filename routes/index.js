var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
   var appid = req.query.appid;
   res.set('location', 'https://webhooks.mongodb-stitch.com/api/client/v2.0/app/stitch-badges-dkhza/service/badgeservice/incoming_webhook/badge?'+'appid='+appid);
   res.status(301).send()
});

module.exports = router;
