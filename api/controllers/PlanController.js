/**
 * PlanController
 *
 * @description :: Server-side logic for managing plans
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  index: function(req, res) {
    Plan.find({userId: req.user.id, sort :'id DESC'}).exec(function(err, plans){
      res.view({plans: plans});
    });
  },
  show: function(req, res) {
    Plan.findOne({id: req.param('id')}).exec(function(err, plan){
      res.view({plan: plan});
    });
  },
  new: function(req, res) {
    res.view();
  },
  create: function(req, res) {
    return res.redirect('/');
  }
};

