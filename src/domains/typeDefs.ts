import { typeDefs as videoTypedefs } from "./video/typeDefs"
import { typeDefs as modelTypedefs } from "./model/typeDefs"

export const typeDefs = `
    ${videoTypedefs}
    ${modelTypedefs}
`