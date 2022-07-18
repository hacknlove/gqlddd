import { getModelsByNames } from "../Model/public/getModelByName"

const models = video => getModelsByNames({ names: video.models, site: video.primarySite })

export default models