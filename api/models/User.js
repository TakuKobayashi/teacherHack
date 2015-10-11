/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/
var bcrypt = require('bcrypt');

module.exports = {

  attributes: {
    name: { type: 'string'},
    sessionToken: { type: 'string'},
    lastLoginedAt: { type: 'datetime'},
    mailAddress: { type: 'string'},
    password: { 
      type: 'string',
      minLength: 6,
      required: true
    },
    sessionToken: { type: 'string'},
    updatedAt: { type: 'datetime'},
    createdAt: { type: 'datetime'},
    toJSON: function() {
      var obj = this.toObject();
      return obj;
    }
  },
  beforeCreate: function(user, cb) {
    bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(user.password, salt, function(err, hash) {
        if (err) {
          console.log(err);
          cb(err);
        } else {
          user.password = hash;
          user.lastLoginedAt = new Date();
          cb();
        }
      });
    });
  }
};
