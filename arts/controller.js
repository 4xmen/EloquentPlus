var fs = require("fs");

exports.make = (name) => {
    var path = './app/Http/' + name + '.js';
    if (fs.existsSync(path)) {
        console.log('Error: Unable to create controller')
        console.log(`The controller "${name}" is exists : (`);
        return;
    }
    fs.writeFile(path, `
// 4xmen under GPL-3 License 
// import modules

class ${name} extends Controller {

}
    `, (e) => {
        if (e == null)
            console.log(`${name} controller class created successfully : ) `);
    });

};