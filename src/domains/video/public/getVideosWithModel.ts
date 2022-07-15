import mongoProxy from "../../../mongoProxy";

export async function getVideosWithModel({ name, site }) {
  await mongoProxy.waitFor;

  const query = {
    models: name
  } as any

  if (site) {
    query.primarySite = site;
  }

  return mongoProxy.videos.find(query).toArray();
}