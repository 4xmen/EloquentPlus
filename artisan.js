// require maudols 
var env = require('dotenv').config();
var mysql = require('mysql');

// db connect
var dbh = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});


// get command line agruman
var cmdln = process.argv.slice(2);


// handle command line agrumans
switch (cmdln[0]) {
    case 'list':
    case 'help':
    case '--help':
    case '--h':
        require('./arts/list');
        break;

    case 'make:model':
        if (cmdln[1] != undefined) {
            require('./arts/model').make(cmdln[1]);
        } else {
            console.log('The model name is empty : | ');
        }
        break;

    default:
        console.log('undefined command : ( ');

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