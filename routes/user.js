const express = require('express');
const connection = require('../connection');
const router = express.Router();
const { query } = require('express');

const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
require('dotenv').config();
//registration
router.post('/registration', (req, res) => {
    let user = req.body;
    var query = "select email,password from user where email=?";
    connection.query(query, [user.email], (err, results) => {
        if (!err) {
            if (results.length <= 0) {
                query = "insert into user(firstname, lastname, email,password) values(?,?,?,?)";
                connection.query(query, [user.firstname, user.lastname, user.email, user.password], (err, results) => {
                    if (!err) {
                        return res.status(200).json({ message: "Successfully Registered" });
                    }
                    else {
                        return res.status(500).json(err);
                    }
                })
            }
            else {
                returnres.status(400).json({ message: "Email Already Exist" });
            }
        }
        else {
            return res.status(500).json(err);
        }
    })
})
//login credential
router.post('/login', (req, res) => {
    const user = req.body;
    var query = "select email,password from user where email=?";
    connection.query(query, [user.email], (err, results) => {
        if (!err) {
            if (results.length <= 0 || results[0].password != user.password) {
                return res.status(401).json({ message: "Incorrect Username Or Password" });
            }
            else if (results[0].password == user.password) {
                return res.status(200).json({ message: "Successfully Logged In" });
            }
            else {
                return res.status(400).json({ message: "Something Went Wrong. please try again later" });
            }
        }
        else {
            return res.status(500).json(err);
        }
    })
})

//fetchdata
router.get('/profile', (req, res) => {
    var query = "select firstname,lastname,email,password from user";
    connection.query(query, (err, results) => {
        if (!err) {
            return res.status(200).json(results);
        }
        else {
            return res.status(500).json(err);
        }
    })
})




module.exports = router;