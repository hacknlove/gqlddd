import { ObjectId } from "mongodb";
import mongoProxy from "../../../mongoProxy"
import { queryDecorator } from "../shared/queryDecorator"

export const Video = async (_parent: any, args: { _id: string; slug: string; site: string }, _context: any, _info: any) => {
  const query = queryDecorator()

  if (args._id) {
    query._id = new ObjectId(args._id)
  }
  if (args.slug) {
    query.targetUrl = `/${args.slug}`
  }
  if (args.site) {
    query.primarySite = args.site
  }
  
  await mongoProxy.waitFor
  return mongoProxy.videos.findOne(queryDecorator(query))
}

export const typeDefs = `
type Query {
  Video(_id: ID, slug: String, site: String): Video
}
`