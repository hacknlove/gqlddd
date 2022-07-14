import { typeDefs as QueryVideosTypedefs } from "./queries/Video"
export const typeDefs = `
${QueryVideosTypedefs}
type Video {
    videoId: ID!
    uuid: String
    site: String
    absoluteUrl: String
    videoTokenId: String
    trailerTokenId: String
    slug: String
    images: Images
    previews: Previews
    models: [Model]
    rating: Float
    views: Float
    tour: TourStats
    title: String
    freeVideo: Boolean
    chapters: VideoChapters
    description: String!
    descriptionHtml: String
    showcase: Showcase
    categories: [Category]
    pictureSet: PictureSet
    carousel: [PictureSetImageObject]
    directors: [Director]
    runLength: Time
    previewDate: DateTime
    releaseDate: DateTime
    comments(input: CommentListInput): [Comment]
    isDenied: Boolean
    isExclusive: Boolean
    isUpcoming: Boolean
    isPreReleasePeriod: Boolean
    picturesInSet: Int
    channel: ChannelInfo
    downloadResolutions: [VideoDownloadResolution]
    related(count: Int!): [Video]
    tags: [String]
}
`