import mongoose from 'mongoose';

const exampleSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    field: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
  },

  {
    timestamps: true,
  }
);

const Example =
  mongoose.models.Example || mongoose.model('Example', exampleSchema);
export default Example;
