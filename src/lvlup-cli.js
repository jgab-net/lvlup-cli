import yargs from 'yargs';

// noinspection BadExpressionStatementJS
yargs // eslint-disable-line
  .command({
    command: 'seed:create <name>',
    aliases: ['sc'],
    desc: 'create a seed file',
    builder: (builder) => {
      builder
        .positional('name', {
          describe: 'name of seed file'
        });
    },
    handler: (argv) => {
      if (argv.verbose) console.info(`making file :${argv.name}`);
      console.log(argv.name);
    }
  })
  .command({
    command: 'seed:up',
    aliases: ['seed', 'su'],
    desc: 'run seeds',
    handler: (argv) => {
      if (argv.verbose) console.info('running seeds');
    }
  })
  .command({
    command: 'seed:down',
    aliases: ['sd'],
    desc: 'rollback seeds',
    handler: (argv) => {
      if (argv.verbose) console.info('rollback seeds');
    }
  })
  .option('verbose', {
    alias: 'v',
    default: false
  })
  .argv;
