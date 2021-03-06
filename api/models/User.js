/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/
module.exports = {

  attributes: {
    name: { type: 'string'},
    lastLoginedAt: { type: 'datetime'},
    mailAddress: { type: 'string'},
    password: { 
      type: 'string',
      minLength: 6,
      required: true
    },
    assignSchoolId: { type: 'int'},
    responsible: { type: 'string'},
    toJSON: function() {
      var obj = this.toObject();
      return obj;
    }
  },
  beforeCreate: function(user, cb) {
    user.lastLoginedAt = new Date();
    cb();
  }
};
