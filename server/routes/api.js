var apiRouter = require('express').Router();
var RecyclingBins = require('../models').RecyclingBins;

apiRouter.get('/bins', function (req, res, next) {
  RecyclingBins.findAll()
  .then(bins => res.send(bins))
  .catch(err => next(err))
})

module.exports = apiRouter;
