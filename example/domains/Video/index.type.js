export default {
  site: video => video.primarySite,
  slug: video => video.targetUrl.substring(1),
}