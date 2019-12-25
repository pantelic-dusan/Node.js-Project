let scores = [
  {
    "name": "Player",
    "score": 0
  }
];

// Radi samo kada je ime users
db.createCollection('users');
const scoresCollection = db.getCollection('users');

for (let score of scores)
  scoresCollection.insert(score);