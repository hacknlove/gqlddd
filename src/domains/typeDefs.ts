import { typeDefs as VideoTypedefs } from "./video/typeDefs"

export const typeDefs = `
${VideoTypedefs}
scalar Any

type Badge {
    moderator: Boolean
    model: Boolean
    director: Boolean
    seniority: String
    tipping: Boolean
}

type Category {
    categoryId: ID!
    site: Site
    slug: String
    name: String
    description: String
    shouldDisplayAsThumbnail: Boolean
    images: CategoryImages
    scenes: Int
}

type CategoryImages {
    listing: [Image]
}

type ChannelInfo {
    channelId: ID!
    name: String
    slug: String!
    description: String
    url: String!
    isThirdPartyChannel: Boolean
    isAvailable: Boolean
    channelPackId: String
    channelPackName: String
}

type Comment {
    commentId: ID!
    text: String
    likes: Int
    repliesCount: Int
    date: DateTime
    userPostCount: Int
    userSeniority: String
    displayName: String
    badges: Badge
}

input CommentListInput {
    filter: [ListFilterInput!]
    order: [ListOrderInput!]
    first: Int
    last: Int
}

scalar DateTime

input DirectiveScenesInput {
    site: Site!
}

type Director {
    directorId: ID!
    name: String!
    scenes(input: DirectiveScenesInput): Int
}

input field {
    field: String!
    desc: Boolean = false
}

enum FileExtension {
    jpeg
    webp
}

type HighdpiSrc {
  double: String
  triple: String
}

type Image {
  src: String!
  placeholder: String
  width: Int!
  height: Int!
  highdpi: HighdpiSrc
  fileExtensions: [FileExtension!]
  name: String
  webp: Image
}

type Images {
  countdown: [Image]
  listing: [Image]
  listingPortrait: [Image]
  movie: [Image]
  poster: [Image]
  promo: [Image]
}

input ListFilterInput {
    field: String!
    op: ListFilterOperation! = EQ
    value: Any
}


enum ListFilterOperation {
    LT
    LTE
    EQ
    NE
    GTE
    GT
    CONTAINS
    NOTIN
    REGEX
}

input ListOrderInput {
    field: String!
    desc: Boolean = false
    more: [field]
}

type Model {
    modelId: ID!
    oldModelId: String
    name: String!
    slug: String
    absoluteUrl: String
    scenes: Int
    biography: String
    rating: String
    angel: ModelAngel
    images: ModelImages
    allVideos(input: VideoListInput): ModelVideos
    videos(input: VideoListInput): VideoConnection
    latestVideo(input: VideoListInput): Video
}

type ModelAngel {
    intro: String
    quote: String
    images: ModelAngelImages
    btsVideo: ModelAngelVideo
    extraVideo: ModelAngelVideo
}

type ModelAngelImages {
    hero: [Image]
    thumbnail: [Image]
    crowningSmall: [Image]
    crowning: [Image]
    photoShoot: [Image]
    crowningImages: [[Image]]
    photoShootImages: [[Image]]
}

type ModelAngelVideo {
    videoSources: VideoTokenResponse
    videoPosterUrl: String
}

type ModelImages {
    listing: [Image]
    profile: [Image]
    poster: [Image]
}

type ModelVideos {
    totalCount: Int
    results: [Video!]
}

type PageInfo {
    hasPreviousPage: Boolean!
    hasNextPage: Boolean!
}

type PictureSet {
    pictureSetId: ID!
    zip: String
    slug: String
    images: [PictureSetImageObject]
    video: Video
}

type PictureSetImage {
    src: String!
    placeholder: String
    width: Int!
    height: Int!
    highdpi: HighdpiSrc
    fileExtensions: [FileExtension!]
    name: String
}

type PictureSetImageObject {
    listing: [PictureSetImage]
    main: [PictureSetImage]
}

type Preview {
    src: String!
    width: Int!
    height: Int!
    type: String
    name: String
}

type Previews {
    listing: [Preview]
    poster: [Preview]
    countdown: [Preview]
}

type Showcase {
    showcaseId: String
    title: String
    itsupId: ShowcaseItsupId
}

type ShowcaseItsupId {
    mobile: Int
    desktop: Int
}

enum Site {
  BLACKED
  VIXEN
  TUSHY
  DEEPER
  BLACKEDRAW
  TUSHYRAW
  SLAYED
  CHANNELS
}

scalar Time

type TourStats {
    views: Float
}

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

type VideoChapter {
    videoChapterId: ID!
    title: String!
    seconds: Int!
}

type VideoChapters {
    video: [VideoChapter]
    videoThumbPattern: String
    trailerThumbPattern: String
}

type VideoConnection {
    edges: [VideoEdge!]!
    pageInfo: PageInfo
    totalCount: Int
}

type VideoDownloadResolution {
    label: String
    size: String
    width: String
    res: String
}

type VideoEdge {
    node: Video!
    cursor: String
}

input VideoListInput {
    site: Site
    channelPackSlug: String
    filter: [ListFilterInput!]
    order: ListOrderInput
    before: ID
    after: ID
    first: Int
    last: Int
    skip: Int
}

type VideoToken {
    userIp: String
    timestamp: DateTime
    token: String
    cdn: String
}

type VideoTokenResponse {
    p270: VideoToken
    p360: VideoToken
    p480l: VideoToken
    p480: VideoToken
    p720: VideoToken
    p1080: VideoToken
    p2160: VideoToken
    hls: VideoToken
}

type Query {
    Version: String
}
type Mutation {
    Version: String
}
`