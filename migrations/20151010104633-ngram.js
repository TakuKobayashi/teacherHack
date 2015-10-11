var dbm = global.dbm || require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
  db.createTable('ngrams', {
    id: { type: 'int', primaryKey: true, autoIncrement: true },
    word: { type: 'string', notNull: true },
    counter: { type: 'int', notNull: true },
    updatedAt: 'datetime',
    createdAt: 'datetime'
  }, function(){
    db.addIndex('ngrams', 'ngram_word', 'word', callback);
  });
};

exports.down = function(db, callback) {
  db.dropTable('ngrams', callback);
};
