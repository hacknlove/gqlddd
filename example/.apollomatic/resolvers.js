import Model_Model_query from './schema/Model/Model.query.js';
import Model_videos_field from './schema/Model/videos.field.js';
import Video_index_query from './schema/Video/index.query.js';
import Video_index_type from './schema/Video/index.type.js';
import Video_models_field from './schema/Video/models.field.js';

export default {
	Query: {
		Model: Model_Model_query,
		Video: Video_index_query,
	},
	Model: {
		videos: Model_videos_field,
	},
	Video: {
		...Video_index_type,
		models: Video_models_field,
	},
}
