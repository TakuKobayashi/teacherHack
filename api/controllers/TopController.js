/**
 * TopController
 *
 * @description :: Server-side logic for managing tops
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  index: function (req,res) {
    if(req.isAuthenticated()){
      //User.findOne(loginObj).exec(function(err, user){
      res.view({user: req.user});
    }else{
      res.view("homepage");
    }
  }
};

