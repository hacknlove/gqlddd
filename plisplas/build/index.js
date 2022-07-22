
const cleanDirectory = require('./cleanDirectory');
const buildResolvers = require('./buildResolvers')
const buildRoutes = require('./buildRoutes')
const buildTypedefs = require('./buildTypedefs')
const { copyFile } = require('fs/promises'); 
const fs = require('fs');
module.exports = async function main () {

  await cleanDirectory('./.plisplas')

  await Promise.all([
    buildTypedefs(),
    buildResolvers(),
    buildRoutes(),
    copyFile(__dirname + '/../start/start.js', process.cwd() + '/.plisplas/start.js'),
    copyFile(__dirname + '/../start/getConfig.js', process.cwd() + '/.plisplas/getConfig.js'),
    copyFile(__dirname + '/../start/useRoutes.js', process.cwd() + '/.plisplas/useRoutes.js'),
    copyFile(__dirname + '/../.swcrc', process.cwd() + '/.swcrc', fs.constants.COPYFILE_EXCL).catch(() => {}),
    copyFile(__dirname + '/../tsconfig.json', process.cwd() + '/tsconfig.json', fs.constants.COPYFILE_EXCL).catch(() => {}),
  ])

}
