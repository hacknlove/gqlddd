import { typeDefs as QueryModelTypedefs } from "./queries/Model"
import { typeDefs as MutationRateModelTypedefs } from "./mutations/rateModel"

export const typeDefs = `
${QueryModelTypedefs}
${MutationRateModelTypedefs}
type Model {
    _id: ID!
    name: String
    sex: String
    videos: [Video]
}
`