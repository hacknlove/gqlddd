import { Video } from "./queries/Video"

export const resolvers = {
  Query: {
    Video
  },
  Mutation: {},
  Video: {
    site: (video: any) => video.primarySite,
    videoId: (video: any) => video.videoId || video.newId,
    slug: (video: any) => video.targetUrl.substring(1),
    videoTokenId: (video: any) => video.videoUrl1080P,
    trailerTokenId: (video: any) => video.previewVideoUrl1080P,
    runLength: (video: any) => video.runLengthForDisplay ? video.runLengthForDisplay : video.runLength,
    rating: (video: any) => video.totalRateVal,
    isPreReleasePeriod: (video: any) => new Date(video.previewDate) > new Date(),
  }
}
