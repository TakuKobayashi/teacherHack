var dbm = global.dbm || require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
  db.createTable('users', {
    id: { type: 'int', primaryKey: true, autoIncrement: true },
    name: 'string',
    sessionToken: { type: 'string', notNull: true },
    lastLoginedAt: { type: 'datetime', notNull: true },
    mailAddress: { type: 'string', notNull: true },
    password: { type: 'string', notNull: true },
    updatedAt: 'datetime',
    createdAt: 'datetime'
  }, function(){
    db.addIndex('users', 'user_last_logined_at_index', 'lastLoginedAt', function(){
      db.addIndex('users', 'user_mail_address_index', ['mailAddress', 'password'], callback)
    })
  });
};

exports.down = function(db, callback) {
  db.dropTable('users', callback);
};
