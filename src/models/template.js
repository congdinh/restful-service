import mongoose from "mongoose";

const TemplateSchema = new mongoose.Schema(
  {
    name: String,
    date: String
  },
  { collection: "templates", versionKey: false, strict: false }
);

export default mongoose.model("templates", TemplateSchema);
