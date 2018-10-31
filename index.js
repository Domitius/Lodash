// dependencies
var fs = require('fs');
var _ = require('lodash');
var chalk = require('chalk');

// Reading JSON Contents and setting it to an object
var obj = JSON.parse(fs.readFileSync('data.json', 'utf8'));

// person is each person in items
_(obj).forEach(person => {

  // fields is each persons fields and values
  _(person).forEach(fields => {
    console.log(chalk.bgBlue("Fields and Values:"));
    console.log(fields);

    // value is each fields value
    _(fields).forEach(value => {
      console.log(chalk.red(value));
    });
  });
});
