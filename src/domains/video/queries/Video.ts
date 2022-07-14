import mongoProxy from "../../../mongoProxy"
import { queryDecorator } from "../shared/queryDecorator"

export const Video = async (_parent: any, args: { videoId: string; slug: string; site: string }, _context: any, _info: any) => {
  const query = queryDecorator({})

  if (args.videoId) {
    query.videoId = args.videoId
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
input VideoInput {
  videoId: ID
  slug: String
  site: Site
}
type Query {
  Video(videoId: ID, slug: String, site: Site): Video
}
`