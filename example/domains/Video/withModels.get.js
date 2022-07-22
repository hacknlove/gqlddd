import findOneVideo from "./controller/findOneVideo";
import findVideoModels from "./models.field";

export default async function findVideoModelsEndpoint(req, res) {
  const { _id, slug, site } = req.query;
  const video = await findOneVideo({ _id, slug, site }, {
    projection: {
      _id: 0,
      title: 1,
      description: 1,
      targetUrl: 1,
      primarySite: 1,
      models: 1,
    }
  });

  video.models = await findVideoModels(video);
  res.json(video);
} 