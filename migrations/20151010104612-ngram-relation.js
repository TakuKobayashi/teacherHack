var dbm = global.dbm || require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
  db.createTable('ngram_relation', {
    id: { type: 'int', primaryKey: true, autoIncrement: true },
    sourceType: { type: 'string', notNull: true },
    sourceId: { type: 'int', notNull: true },
    ngramId: { type: 'int', notNull: true },
    updatedAt: 'datetime',
    createdAt: 'datetime'
  }, function(){
    db.addIndex('ngram_relation', 'ngram_relation_ngram_id', 'ngramId', function(){
      db.addIndex('ngram_relation', 'ngram_relation_source_type_and_id', ['sourceType', 'sourceId'], callback);
    });
  });
};

exports.down = function(db, callback) {
  db.dropTable('ngram_relation', callback);
};
