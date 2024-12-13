# MongoDB Aggregation Pipeline Bug: $limit with $group and Ties

This repository demonstrates a common pitfall in MongoDB aggregation pipelines when using the `$limit` stage after a `$group` stage that produces ties.  The `$limit` operator does not guarantee returning exactly the specified number of documents when ties exist in the sorting criteria.

The included `bug.js` file showcases the problem.  The `bugSolution.js` file provides a correct solution demonstrating how to handle ties appropriately using additional stages.

## Problem

The original aggregation pipeline groups documents, sorts them, and limits the results to the top 10. However, if the `count` field for the top 10 has ties, the `$limit` stage might return fewer than 10 documents.