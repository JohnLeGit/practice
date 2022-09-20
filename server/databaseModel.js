const { Pool } = require('pg');
const PG_URI = 'postgres://flwxaiju:nFt3a2-xu3cLASbHqz6VqSM4y_nTn8uX@jelani.db.elephantsql.com/flwxaiju'
const pool = new Pool({
    connectionString: PG_URI,
  });

module.exports = {
    query: (text, params, callback) => {
        console.log('executed query', text);
        return pool.query(text, params, callback);
    },
};
