var dbm = global.dbm || require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
  db.createTable('album', {
    id: { type: 'int', primaryKey: true, autoIncrement: true },
    userId: { type: 'int', notNull: true },
    imagePath: { type: 'string', notNull: true },
    message: 'text',
    updatedAt: 'datetime',
    createdAt: 'datetime'
  }, function(){
    db.addIndex('album', 'albumuser_id', 'userId', callback);
  });
};

exports.down = function(db, callback) {
  db.dropTable('album', callback);
};
