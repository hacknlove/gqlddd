import { getModelsByNames } from "~/domains/Model/public/getModelByName"

export default async function findVideoModels(video) {
  return getModelsByNames({ names: video.models, site: video.primarySite })
}
