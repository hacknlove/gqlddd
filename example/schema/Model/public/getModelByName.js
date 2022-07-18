import mongoProxy from "../../../lib/mongoProxy";

export async function getModelsByNames({ names, site }) {
  await mongoProxy.waitFor;

  return mongoProxy.models.find({
    primarySite: site,
    name: { $in: names }
  }).toArray();
}
