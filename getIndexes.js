db.getCollectionNames().forEach(function(collection){
    indexes = db[collection].getIndexes();
    print('Indexes from ' + collection + ': ');
    printjson(indexes);
});