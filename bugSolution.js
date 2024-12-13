```javascript
// Corrected aggregation pipeline to handle ties
db.collection.aggregate([
  {$match: { /* some filter */ } },
  {$group: { _id: '$field', count: {$sum: 1} }},
  {$sort: {count: -1}},
  {$setWindowFields: {
    sortBy: { count: -1 },
    output: {
      rank: {$rank: {}} 
    }
  }},
  {$match: { rank: {$lte: 10} } } 
]);
```