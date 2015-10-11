var dbm = global.dbm || require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
  db.createTable('connections', {
    id: { type: 'int', primaryKey: true, autoIncrement: true },
    userId: { type: 'int', notNull: true },
    toUserId: { type: 'int', notNull: true },
    updatedAt: 'datetime',
    createdAt: 'datetime'
  }, function(){
    db.addIndex('connections', 'connection_user_id', 'userId', function(){
      db.addIndex('connections', 'connection_to_user_id', 'toUserId', callback);
    });
  });
};

exports.down = function(db, callback) {
  db.dropTable('connections', callback);
};
