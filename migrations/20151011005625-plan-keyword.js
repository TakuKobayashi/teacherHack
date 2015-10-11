var dbm = global.dbm || require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
  db.createTable('plan_keyword', {
    id: { type: 'int', primaryKey: true, autoIncrement: true },
    planId: { type: 'int', notNull: true },
    keyword: { type: 'string', notNull: true },
    updatedAt: 'datetime',
    createdAt: 'datetime'
  }, function(){
    db.addIndex('plan_keyword', 'plan_keyword_plan_id', 'planId', function(){
      db.addIndex('plan_keyword', 'plan_keyword', 'keyword', callback);
    });
  });
};

exports.down = function(db, callback) {
  db.dropTable('plan_keyword', callback);
};
