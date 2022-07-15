import { getModelsByNames } from "../model/public/getModelByName"
import { Video } from "./queries/Video"

export const resolvers = {
  Query: {
    Video
  },
  Mutation: {},
  Video: {
    site: (video: any) => video.primarySite,
    slug: (video: any) => video.targetUrl.substring(1),
    models: (video: any) => getModelsByNames({ names: video.models, site: video.primarySite }),
  }
}
