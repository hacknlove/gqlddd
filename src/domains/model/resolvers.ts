import { getVideosWithModel } from "../video/public/getVideosWithModel"
import { Model } from "./queries/Model"

export const resolvers = {
  Query: {
    Model
  },
  Mutation: {},
  Model: {
    videos: (model: any) => getVideosWithModel({ name: model.name, site: model.primarySite }),
  }
}
