var dbm = global.dbm || require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
  db.createTable('plan', {
    id: { type: 'int', primaryKey: true, autoIncrement: true },
    userId: { type: 'int', notNull: true },
    title: 'string',
    description: 'text',
    startAt: 'datetime',
    endAt: 'datetime',
    updatedAt: 'datetime',
    createdAt: 'datetime'
  }, function(){
    db.addIndex('plan', 'plan_user_id', 'userId', function(){
      db.addIndex('plan', 'plan_start_and_end_at', ['startAt','endAt'], callback);
    });
  });
};

exports.down = function(db, callback) {
  db.dropTable('plan', callback);
};
