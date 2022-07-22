import { getVideosWithModel } from "../Video/public/getVideosWithModel"

const videos = (model) => getVideosWithModel({ name: model.name, site: model.primarySite })

export default videos
