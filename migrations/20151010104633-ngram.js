var dbm = global.dbm || require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
  db.createTable('ngram', {
    id: { type: 'int', primaryKey: true, autoIncrement: true },
    word: { type: 'string', notNull: true },
    counter: { type: 'int', notNull: true },
    updatedAt: 'datetime',
    createdAt: 'datetime'
  }, function(){
    db.addIndex('ngram', 'ngram_word', 'word', callback);
  });
};

exports.down = function(db, callback) {
  db.dropTable('ngram', callback);
};
