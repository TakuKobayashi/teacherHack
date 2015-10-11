var dbm = global.dbm || require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
  db.createTable('school', {
    id: { type: 'int', primaryKey: true, autoIncrement: true },
    userId: { type: 'int', notNull: true },
    name: { type: 'string', notNull: true },
    responsible: { type: 'string', notNull: true },
    address: 'string',
    updatedAt: 'datetime',
    createdAt: 'datetime'
  }, function(){
    db.addIndex('school', 'school_user_id', 'userId', callback);
  });
};

exports.down = function(db, callback) {
  db.dropTable('school', callback);
};
