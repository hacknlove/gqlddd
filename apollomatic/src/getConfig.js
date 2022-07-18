const { F_OK, R_OK } = require('fs').constants
const { join } = require('path')
const { access } = require('fs/promises')

const defaultConfig = {
  csrfPrevention: true,
  playground: 'development',
}

module.exports = async function getConfig () {
  const filePath = join(process.cwd(), './apollomatic.config.js')

  await access(filePath, F_OK | R_OK).catch(err => {
    console.error(err)
    process.exit(1)
  })

  const config = require(filePath)

  if (config instanceof Function) {
    try {
      return await config(defaultConfig)
    } catch (err) {
      console.error(err)
      process.exit(1)
    }
  }
  return config
}