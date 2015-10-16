/**
 * MessageController
 *
 * @description :: Server-side logic for managing messages
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  index: function(req, res) {
    Message.find({userId: req.user.id, sort :'id DESC'}).exec(function(err, messages){
      res.view({messages: messages});
    });
  },
  show: function(req, res) {
    Message.findOne({id: req.param('id')}).exec(function(err, message){
      res.view({message: message});
    });
  },
  new: function(req, res) {
    User.findOne({id: req.param('user_id')}).exec(function(err, user){
      res.view({user: req.user, to_user: user});
    });
  },
  create: function(req, res) {
    Message.create({userId: req.user.id, toUserId: req.param('user_id'), text: req.param('message')}).exec(function(err, message){
      if(req.param('attach_plan_id')){
        Plan.findOne({id: req.param('attach_plan_id')}).exec(function(err, plan){
          Collaborator.create({userId: req.user.id, toUserId: req.param('user_id'), planId: plan.id}).exec(function(err, collaborator){
            Collaborator.create({userId: req.user.id, toUserId: req.param('user_id'), planId: plan.id}).exec(function(err, c){
              return res.redirect('/user/?user_id=' + req.param('user_id'));
            });
          });
        });
      }else{
        return res.redirect('/user/?user_id=' + req.param('user_id'));
      }
    });
  }
};

