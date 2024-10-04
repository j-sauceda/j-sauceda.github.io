import mongoose from "mongoose";

const ProfileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  linkedin_url: {
    type: String,
    required: true,
  },
  github_url: {
    type: String,
    required: false,
  },
  gitlab_url: {
    type: String,
    required: false,
  },
  google_scholar_url: {
    type: String,
    required: false,
  },
  degree: {
    type: String,
    required: true,
  },
});

export default mongoose.models.Profile || mongoose.model("Profile", ProfileSchema);
