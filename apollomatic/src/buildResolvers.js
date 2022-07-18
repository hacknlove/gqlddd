const { readFile, appendFile } = require('fs/promises')

const glob = require('util').promisify(require('glob'))

const parseRegex =/schema\/(?<directory>.*)\/(?<filename>.*)\.(?<type>.*?)\.js$/

function getName (directory, filename) {
  return filename === 'index'
    ? directory
    : filename
}

const resolversFileName = './.apollomatic/resolvers.js'

module.exports = async function buildResolvers () {
  const files = await glob('./schema/**/*.{query,mutation,type,field}.js')

  const kinds = {
    query: [],
    mutation: [],
    type: {},
  }

  for (const path of files) {

    const parse = path.match(parseRegex)

    if (!parse) {
      console.error('Unexpected file:', path)
      process.exit(1)
    }

    const { directory, filename, type } = parse.groups
    const importName = `${directory}_${filename}_${type}`
    switch (type) {
      case 'query':
      case 'mutation':
        kinds[type].push({
          name: getName(directory, filename),
          importName,
        })
        break;
      case 'type': {
        const name = getName(directory, filename);
        kinds.type[name] = kinds.type[name] ?? {}
        kinds.type[name].importName = importName
        kinds.type[name].fields = kinds.type[name].fields ?? []
        break;
      }
      case 'field': {
        kinds.type[directory] = kinds.type[directory] ?? {}
        kinds.type[directory].fields = kinds.type[directory].fields ?? []
        kinds.type[directory].fields.push({
          name: filename,
          importName,
        })
      }
    }

    await appendFile(resolversFileName, `import ${importName} from '${path}';\n`);
  }

  await appendFile(resolversFileName, `\nexport default {\n`);

  if (kinds.query.length) {
    await appendFile(resolversFileName, `\tQuery: {\n`)
    for (const query of kinds.query) {
      console.log(query)
      await appendFile(resolversFileName, `\t\t${query.name}: ${query.importName},\n`);
    }
    await appendFile(resolversFileName, `\t},\n`)
  }

  if (kinds.mutation.length) {
    await appendFile(resolversFileName, `\tQuery: {\n`)
    for (const query of kinds.query) {
      console.log(query)
      await appendFile(resolversFileName, `\t\t${query.name}: ${query.importName},\n`);
    }
    await appendFile(resolversFileName, `\t},\n`)
  }

  for (const [name, type] of Object.entries(kinds.type)) {
    await appendFile(resolversFileName, `\t${name}: {\n`)
    if (type.importName) {
      await appendFile(resolversFileName, `\t\t...${type.importName},\n`)
    }
    for (const field of type.fields) {
      await appendFile(resolversFileName, `\t\t${field.name}: ${field.importName},\n`);
    }
    await appendFile(resolversFileName, `\t},\n`)
  }

  await appendFile(resolversFileName, `}\n`)
}