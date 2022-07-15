import { typeDefs as QueryVideosTypedefs } from "./queries/Video"
export const typeDefs = `
${QueryVideosTypedefs}
type Video {
    _id: ID!
    slug: String
    site: String,
    models: [Model]
}
`