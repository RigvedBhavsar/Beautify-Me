const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const requireLogin = require('../middleware/requireLogin');
const Appointment = mongoose.model("Appointment")


router.get('/allapmnt', (req, res) => {
    Appointment.find()
        .populate("tookBy", "_id name")
        .then(list => {
            res.json({ list })
        }).catch(err => {
            console.log(err);
        })
})

router.post('/addAppointment', requireLogin, (req, res) => {
    const { name, date, service } = req.body;
    if (!name || !date || !service) {
        return res.status(422).json({ error: "please select all Fields" });
    }
    req.user.password = undefined;
    const apmnt = new Appointment({
        name,
        date,
        service,
        tookBy: req.user
    })
    apmnt.save().then(result => {
        res.json({ apmnt: result })
    })
        .catch(err => {
            console.log(err);
        })
})
module.exports = router;