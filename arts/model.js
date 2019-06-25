var fs = require("fs");

exports.make = (name) => {
    var path = './app/' + name + '.js';
    if (fs.existsSync(path)) {
        console.log('Error: Unable to create model')
        console.log(`The model "${name}" is exists : (`);
        return;
    }
    fs.writeFile(path, `
// 4xmen under GPL-3 License 
// import modules

class ${name} extends Model {

}
    `, (e) => {
        if (e == null)
            console.log(`${name} model class created successfully : ) `);
    });

};