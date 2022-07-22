import { ObjectId } from "mongodb";
import mongoProxy from "~/lib/mongoProxy"
import { queryDecorator } from "./queryDecorator"

export default async function findOneVideo ({ _id, slug, site }, options) {
  const query = {}

  if (_id) {
    query._id = new ObjectId(_id)
  }
  if (slug) {
    query.targetUrl = `/${slug}`
  }
  if (site) {
    query.primarySite = site
  }
  
  await mongoProxy.waitFor
  return mongoProxy.videos.findOne(queryDecorator(query), options)
} 