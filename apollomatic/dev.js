
const { rm, mkdir } = require('fs/promises')
const { join } = require('path')
const buildResolvers = require('./src/buildResolvers')
const buildTypedefs = require('./src/buildTypedefs')
const cleanDirectory = require('./src/cleanDirectory')

const getConfig = require('./src/getConfig')

async function cleanApollomaticDirectory () {
  const directoryPath = join(process.cwd(), './.apollomatic')

  await rm(directoryPath, { recursive: true })
    .catch(err => {
      if (err.code === 'ENOENT') {
        return
      }
      console.error(err)
      console.error(err)
      process.exit(1)
    })
  
  mkdir(directoryPath)
}

async function main () {

  const config = await getConfig()
  await cleanDirectory('./.apollomatic')

  await buildTypedefs()
  await buildResolvers()


}



main()