var dbm = global.dbm || require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
  db.createTable('user_like', {
    id: { type: 'int', primaryKey: true, autoIncrement: true },
    userId: { type: 'int', notNull: true },
    contentType: { type: 'string', notNull: true },
    contentId: { type: 'int', notNull: true },
    updatedAt: 'datetime',
    createdAt: 'datetime'
  }, function(){
    db.addIndex('user_like', 'like_user_id_index', 'userId', function(){
      db.addIndex('user_like', 'like_content_type_and_id_index', ['contentType', 'contentId'], function(){
        db.addIndex('user_like', 'like_user_and_content_type_and_id_index', ['userId', 'contentType', 'contentId'], {unique: true}, callback);
      })
    })
  });
};

exports.down = function(db, callback) {
  db.dropTable('user_like', callback);
};
