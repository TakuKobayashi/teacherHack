var dbm = global.dbm || require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
  db.createTable('profile', {
    id: { type: 'int', primaryKey: true, autoIncrement: true },
    userId: { type: 'int', notNull: true },
    description: 'text',
    imagePath: 'string',
    updatedAt: 'datetime',
    createdAt: 'datetime'
  }, function(){
    db.addIndex('profile', 'profile_user_id', 'userId', callback);
  });
};

exports.down = function(db, callback) {
  db.dropTable('profile', callback);
};
