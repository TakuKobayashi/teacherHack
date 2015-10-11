var dbm = global.dbm || require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
  db.createTable('message', {
    id: { type: 'int', primaryKey: true, autoIncrement: true },
    userId: { type: 'int', notNull: true },
    toUserId: { type: 'int', notNull: true },
    text: 'string',
    updatedAt: 'datetime',
    createdAt: 'datetime'
  }, function(){
    db.addIndex('message', 'message_user_id', 'userId', function(){
      db.addIndex('message', 'message_to_user_id', 'toUserId', callback);
    });
  });
};

exports.down = function(db, callback) {
  db.dropTable('message', callback);
};
