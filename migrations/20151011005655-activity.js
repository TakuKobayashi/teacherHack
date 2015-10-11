var dbm = global.dbm || require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
  db.createTable('activity', {
    id: { type: 'int', primaryKey: true, autoIncrement: true },
    userId: { type: 'int', notNull: true },
    sourceType: 'string',
    sourceId: 'int',
    message: { type: 'string', notNull: true },
    action_date: { type: 'datetime', notNull: true },
    updatedAt: 'datetime',
    createdAt: 'datetime'
  }, function(){
    db.addIndex('activity', 'activitie_user_id', 'userId', function(){
      db.addIndex('activity', 'activitie_source_type_and_id', ['sourceType', 'sourceId'], callback);
    });
  });
};

exports.down = function(db, callback) {
  db.dropTable('activity', callback);
};
