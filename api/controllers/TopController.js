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
        Message.find({
          toUserId: req.user.id,
          readFlg: false,
          limit:3,
          sort :'id DESC'
        }).exec(function(err, messages){
          Plan.find({
            userId: req.user.id,
            limit:3,
            sort :'id DESC'
          }).exec(function(err, plans){
            res.view({user: req.user, school: school, messages: messages, plans: plans});
          })
      	});
      });
    }else{
      res.view("homepage");
    }
  }
};

