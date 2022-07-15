import mongoProxy from "../../../mongoProxy"

export const Model = async (_parent: any, args: { _id: string; slug: string; site: string }, _context: any, _info: any) => {
  const query = {} as any

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

export const typeDefs = `
type Query {
  Model(_id: ID, slug: String, site: String): Model
}
`