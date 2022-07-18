import mongoProxy from "../../../lib/mongoProxy";

export async function getVideosWithModel({ name, site }) {
  await mongoProxy.waitFor;

  const query = {
    models: name
  }

  if (site) {
    query.primarySite = site;
  }

  return mongoProxy.videos.find(query).toArray();
}