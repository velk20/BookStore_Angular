const express = require('express');
const app = express();
const bookRoute = express.Router();
let Book = require("../model/Book");

//Add book
bookRoute.route('/add-book').post((req, res, next) => {
    Book.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    });
});

//Get all books
bookRoute.route('/').get((req, res) => {
    Book.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    });
});

//Get Book by id
bookRoute.route('/read-book/:id').get((req, res) => {
    Book.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    });
});

//Update Book by id
bookRoute.route('/update-book/:id').put((req, res, next) => {
    Book.findByIdAndUpdate(req.params.id, {$set: req.body}, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    });
});

//Delete Book by id
bookRoute.route('/delete-book/:id').delete((req, res, next) => {
    Book.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.status(200).json({msg: data})
        }
    });
});

module.exports = bookRoute;