/**
 * TopController
 *
 * @description :: Server-side logic for managing tops
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  index: function (req,res) {
    if(req.isAuthenticated()){
      School.findOne({id: req.user.assignSchoolId}).exec(function(err, school){
        res.view({user: req.user, school: school});
      });
    }else{
      res.view("homepage");
    }
  }
};

