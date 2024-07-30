const figlet = require('figlet');

figlet("figlet", function (err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.error(err);
        return;
    }
    console.log(data);
});