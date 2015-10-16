var dbm = global.dbm || require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
  db.createTable('user', {
    id: { type: 'int', primaryKey: true, autoIncrement: true },
    name: 'string',
    lastLoginedAt: { type: 'datetime', notNull: true },
    mailAddress: { type: 'string', notNull: true },
    password: { type: 'string', notNull: true },
    assignSchoolId: { type: 'int', notNull: true },
    responsible: { type: 'string'},
    updatedAt: 'datetime',
    createdAt: 'datetime'
  }, function(){
    db.addIndex('user', 'user_last_logined_at_index', 'lastLoginedAt', function(){
      db.addIndex('user', 'user_mail_address_index', ['mailAddress', 'password'], callback)
    })
  });
};

exports.down = function(db, callback) {
  db.dropTable('user', callback);
};
