/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

// var mongoose       = require('mongoose');
module.exports = {

    list: function (req, res) {
        var userModel = sails.models['user'];

        userModel.find().exec(function (err, userInfo) {
            if (err) {
                res.json(500, err);
            }
            else {

                res.json(200, userInfo);
            }
        })
    },
    CreateUser:function(req,res){

        var createUserMOdel=sails.models['user'];

        console.log("req.body.....",req.body);
        createUserMOdel.create({name:req.body.name,userType:req.body.userType,email:req.body.email,password:req.body.password,dob:req.body.dob}).exec(function(err,createUser){

            console.log("err.....",err);
            console.log("createUser.....",createUser);
            if(err)
            {
                res.json(500,err);


            }
            else{
                res.json(200,createUser);

            }
            

        });





    }

}