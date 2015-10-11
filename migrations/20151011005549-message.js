var dbm = global.dbm || require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
  db.createTable('messages', {
    id: { type: 'int', primaryKey: true, autoIncrement: true },
    userId: { type: 'int', notNull: true },
    toUserId: { type: 'int', notNull: true },
    text: 'string',
    updatedAt: 'datetime',
    createdAt: 'datetime'
  }, function(){
    db.addIndex('messages', 'message_user_id', 'userId', function(){
      db.addIndex('messages', 'message_to_user_id', 'toUserId', callback);
    });
  });
};

exports.down = function(db, callback) {
  db.dropTable('messages', callback);
};
