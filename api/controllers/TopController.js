/**
 * TopController
 *
 * @description :: Server-side logic for managing tops
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  index: function (req,res) {
    if(req.isAuthenticated()){
      res.view();
    }else{
      res.view("homepage");
    }
  }
};

