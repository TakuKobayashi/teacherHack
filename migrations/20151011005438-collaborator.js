var dbm = global.dbm || require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
  db.createTable('collaborators', {
    id: { type: 'int', primaryKey: true, autoIncrement: true },
    userId: { type: 'int', notNull: true },
    toUserId: { type: 'int', notNull: true },
    planId: { type: 'int', notNull: true },
    updatedAt: 'datetime',
    createdAt: 'datetime'
  }, function(){
    db.addIndex('collaborators', 'collaborator_user_id', 'userId', function(){
      db.addIndex('collaborators', 'collaborator_to_user_id', 'toUserId', function(){
        db.addIndex('collaborators', 'collaborator_to_plan_id', 'planId', callback);
      });
    });
  });
};

exports.down = function(db, callback) {
  db.dropTable('collaborators', callback);
};
