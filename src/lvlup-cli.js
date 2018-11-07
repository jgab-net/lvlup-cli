const program = require('commander');

program
    .version('0.1.0')
    .option('-m, --migrate [name]', 'Generate migration with [name]')
    .parse(process.argv);

if (program.migrate) {
    console.log('aca');
    console.log(program.migrate);
}
