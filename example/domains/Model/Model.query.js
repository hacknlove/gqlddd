import mongoProxy from "../../lib/mongoProxy"

const Model = async (_parent, args, _context, _info) => {
  const query = {}

  if (args._id) {
    query._id = args._id
  }
  if (args.slug) {
    query.targetUrl = `/${args.slug}`
  }
  if (args.site) {
    query.primarySite = args.site
  }
  
  await mongoProxy.waitFor
  return mongoProxy.models.findOne(query)
}

export default Model