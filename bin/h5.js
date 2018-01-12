#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const program = require('commander');
const updateNotifier = require('update-notifier');
const pkg = require('../package.json');
const chalk = require('chalk');
const log = console.log.bind(this);

// new version update notification
// updateCheck 1 week
updateNotifier({pkg, updateCheckInterval: 1000 * 60 * 60 * 24 * 7}).notify();

program
    .version(pkg.version)
    .command('init', 'init project')
    .command('list', 'list all templates')
    .command('start', 'run on dev mode')
    .command('build', 'build for production');

program.on('--help', function () {
    log('');
    log('  Examples:');
    log('');
    log('    # Init project');
    log(chalk.green('    $ h5 init'));
    log('');
    log('    # Base on template init project');
    log(chalk.green('    $ h5 init -t templateName'));
    log('');
    log('    # See all templates');
    log(chalk.green('    $ h5 list'));
    log('');
    log('    # See specific subcommand help');
    log(chalk.green('    $ h5 help init'));
    log('');
    log('')
});

program.parse(process.argv);

if (!program.runningCommand) {
    log('');
    log('  Unknow command: ' + program.args.join(' '));
    log('');
    log('  See help `h5 help`');
    log('');
    program.help()
}
