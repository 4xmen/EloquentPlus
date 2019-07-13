var fs = require("fs");
var plur = require('pluralize')
exports.make = (name) => {
    var path = './database/migrations/' + name + '.js';
    if (fs.existsSync(path)) {
        console.log('Error: Unable to create migration')
        console.log(`The migration "${name}" is exists : (`);
        return;
    }
    var pl = plur.plural(name);
    fs.writeFile(path, `
// 4xmen under GPL-3 License 
// import modules

class Create${pl}Table extends Migration {
    
    up (){
        Schema.create = function(table){
            table.bigIncrements('id');
            table.timestamps();
        }
    }
    
    down(){
        Schema.drop('${pl}');
    }
}
    `, (e) => {
        if (e == null)
            console.log(`${name} migration class created successfully : ) `);
    });

};