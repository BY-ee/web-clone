const figlet = require('figlet');

figlet("figletS", function (err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.error(err);
        return;
    }
    console.log(data);
});