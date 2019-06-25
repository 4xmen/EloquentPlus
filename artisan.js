var env = require('dotenv').config();
var mysql = require('mysql');
var dbh = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});



var cmdln = process.argv.slice(2);

switch (cmdln[0]) {
    case 'list':
    case 'help':
    case '--help':
    case '--h':
        require('./arts/list');
        break;

    case 'make:model':
        break;

    default:
        console.log('undefined command :( ');

}

// dbh.connect(function(err) {
//     if (err) {
//         console.error('error connecting: ' + err.stack);
//         return;
//     }

//     dbh.query('SELECT 1', function(error, results, fields) {
//         // if (error) throw error;
//         console.log(error, results, fields);
//         // connected!
//         dbh.end();
//     });

//     console.log('connected as id ' + dbh.threadId);

// });