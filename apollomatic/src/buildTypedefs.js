const { readFile, appendFile } = require('fs/promises')

const glob = require('util').promisify(require('glob'))

module.exports = async function buildTypeDefs () {
  const files = await glob('./schema/**/*.graphql')

  for (const path of files) {
    const content = await readFile(path, 'utf8')
    await appendFile('./.apollomatic/schema.graphql', `${content}\n`)
  }
}