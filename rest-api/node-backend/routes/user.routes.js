const express = require('express');
const app = express();
const userRoute = express.Router();
let User = require("../model/User");

//Add book
userRoute.route('/register')
    .post((req, res, next) => {
    User.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    });
});
//
// //Get all books
// userRoute.route('/').get((req, res) => {
//     User.find((error, data) => {
//         if (error) {
//             return next(error)
//         } else {
//             res.json(data)
//         }
//     });
// });
//
// //Get User by id
// userRoute.route('/read-book/:id').get((req, res) => {
//     User.findById(req.params.id, (error, data) => {
//         if (error) {
//             return next(error)
//         } else {
//             res.json(data)
//         }
//     });
// });
//
// //Update User by id
// userRoute.route('/update-book/:id').put((req, res, next) => {
//     User.findByIdAndUpdate(req.params.id, {$set: req.body}, (error, data) => {
//         if (error) {
//             return next(error)
//         } else {
//             res.json(data)
//         }
//     });
// });
//
// //Delete User by id
// userRoute.route('/delete-book/:id').delete((req, res, next) => {
//     User.findByIdAndRemove(req.params.id, (error, data) => {
//         if (error) {
//             return next(error)
//         } else {
//             res.status(200).json({msg: data})
//         }
//     });
// });

module.exports = userRoute;