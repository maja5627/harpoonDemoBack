const express = require('express');
const router = express.Router();
const recordService = require('./records.service');

// routes
router.post('/record/add', create);
router.post('/update/:id', edit);
router.delete('/:id', deleteOne);
router.get('/record', getAll);
router.get('/record/:id', getOne);


module.exports = router;


function create(req, res, next) {
    console.log('create record', req.body);
    recordService.create(req.body, res)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function edit(req, res, next) {
    console.log('edit record', req.params.id);
    recordService.edit(req.params.id, req.body, res)
        .then(result => res.json(result))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    console.log('get all records', req.body);
    recordService.getAll(req.body, res)
        .then(result => res.json(result))
        .catch(err => next(err));
}

function getOne(req, res, next) {
    console.log('get one records', req.params.id);
    recordService.getOne(req.params.id, res)
        .then(result => res.json(result))
        .catch(err => next(err));
}

function deleteOne(req, res, next) {
    console.log('deleteOne',req.params.id);
    recordService.deleteOne(req.params.id, res)
        .then(result => res.json(result))
        .catch(err => next(err));
}