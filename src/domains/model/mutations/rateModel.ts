import mongoProxy from "../../../mongoProxy"

export async function rateModel ({ _id, rating }) {
  await mongoProxy;

}

export const typeDefs = `
type Mutation {
  rateModel(_id: ID!, rating: Int!): Model
}
`