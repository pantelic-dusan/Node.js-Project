let scores = [
  {
    "username": "Player",
    "score": 0,
    "date": new Date()
  }
];

db.createCollection('scores');
const scoresCollection = db.getCollection('scores');

for (let score of scores)
  scoresCollection.insert(score);