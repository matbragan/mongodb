Mongo().getDBNames().forEach(function(db) {
    if(['admin', 'config', 'local'].indexOf(db) < 0) {
        Mongo().getDB(db).dropDatabase();
    }
});