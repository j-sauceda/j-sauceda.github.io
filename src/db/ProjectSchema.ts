import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image_url: {
    type: String,
    required: true,
  },
  featured: {
    type: Boolean,
    required: true,
  },
  categories: {
    type: [String],
    required: true,
  },
  backend_url: {
    type: String,
    required: false,
  },
  deployment_url: {
    type: String,
    required: false,
  },
  download_url: {
    type: String,
    required: false,
  },
  frontend_url: {
    type: String,
    required: false,
  },
  monorepo_url: {
    type: String,
    required: false,
  },
});

// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
export default mongoose.models?.Project || mongoose.model("Project", ProjectSchema);
