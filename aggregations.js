// bucket - creation of buckets passed in boundaries
db.books.aggregate([
    {
        $bucket: {
            groupBy: '$pageCount',
            boundaries: [0, 100, 200, 300, 400, 500, 600, 700, 800],
            default: 'others',
            output: {
                count: {$sum: 1}
            }
        }
    }
]);

// bucketAuto - auto creation of buckets
db.books.aggregate([
    {
        $bucketAuto: {
            groupBy: '$pageCount',
            buckets: 3
        }
    }
]);

// collStats - stats of collection
db.books.aggregate([
    {
        $collStats: {
            queryExecStats: {},
            count: {}
        }
    }
]);

// sort - sort the values
db.books.aggregate([
    { $sort: { pageCount: -1 } },
]);

// limit - limit the result
db.books.aggregate([
    { $sort: { pageCount: -1 } },
    { $limit: 3 }
]);

// match - match the value
db.books.aggregate([
    { $sort: { pageCount: -1 } },
    { $match: { authors: 'Gavin King' } },
    { $limit: 3 }
]);

// out - create a new collection
db.books.aggregate([
    { $match: { categories: 'Java', pageCount: { $gt: 800 } } },
    { $sort: { pageCount: -1 } },
    { $limit: 5 },
    { $out: 'bigJavaBooks' }
]);

// project - return only the passed keys
db.books.aggregate([
    { $sort: { pageCount: -1 } },
    { $limit: 12 },
    { $project: { _id: 0, title: 1, categories: 1, pageCount: 1} }
]);

// sample - a sample of result
db.books.aggregate([
    { $match: { categories: 'Java' } },
    { $project: { _id: 0, title: 1, authors: 1 } },
    { $sample: { size: 10 } }
]);

// skip - skip the result
db.books.aggregate([
    { $match: { categories: 'Microsoft' } },
    { $sort: { pageCount: -1 } },
    { $project: { title: 1, pageCount: 1 } },
    { $skip: 2 },
    { $limit: 2 }
]);

// unwind - unwind an array
db.books.aggregate([
    { $unwind: '$categories' },
    { $limit: 3 }
]);

// sortByCount - sort by count the result of unwind
db.books.aggregate([
    { $unwind: '$categories' },
    { $sortByCount: '$categories' }
]);

// unset - remove keys from result
db.books.aggregate([
    { $match: { categories: 'PowerBuilder' } },
    { $sort: { pageCount: -1 } },
    { $unset: ['_id', 'status'] }
]);

// count - count the result
db.books.aggregate([
    { $match: { categories: 'Java', pageCount: { $gte: 500 } } },
    { $count: 'Count' }
]);
