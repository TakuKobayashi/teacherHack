/**
* Plan.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    userId: { type: 'int'},
    title: { type: 'string'},
    description: { type: 'text'},
    startAt: { type: 'datetime'},
    endAt: { type: 'datetime'},
    likeCount: { type: 'int'}
  }
};

