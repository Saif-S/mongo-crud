const User = require('../models/user.model');

function findAll(req, res){
    User.find().then(user => {
        res.status(200).send(user);
    }).catch(err => {
        res.status(500).send({Error: err});
    });
}

function Create(req, res){
    if(!req.body){
        return res.status(404).send('Fill all required fileds');
    }
    const user = new User({
        _id: req.body.id,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        contact: req.body.contact,
        email: req.body.email
    });
    user.save().then(data => {
        res.send({Data: data})
    }).catch(err => {
        res.status(500).send({Error: err});
    });
}

function findOne(req, res){
    User.findById(req.params.id).then(user => {
        if(!user){
            res.status(404).send({Msg: 'User not found'});
        }
        res.send(user);
    }).catch(err => {
        res.status(500).send({Error: err});
    });
}

function update(req, res){
    if(!req.body){
        res.send({Msg: 'Fill all fields'});
    }
    User.findByIdAndUpdate(req.params.id, {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        contact: req.body.contact,
        email: req.body.email       
    }, {new: true}).then(user => {
        if(!user){
            res.status(404).send({Msg: 'no user Found'});
        }
        res.send(user)
    });
}

function Delete(req, res){
    User.findByIdAndDelete(req.params.id).then(user => {
        if(!user){
            res.status(404).send({Msg: 'no user Found'});
        }
        res.send({Msg: 'User deleted'});
    });
}

module.exports = {findAll, Create, findOne, update, Delete}