module.exports = (mongoose: any) => {
  const Model = mongoose.model(
    "mac",
    new mongoose.Schema({
      ap: { type: Number },
      company: { type: String },
      connected: { type: Boolean, default: false },
      mac: { type: String, required: true, unique: true },
      sta: { type: Number },
      time: { type: Date },
      type: { type: Number },
      ver: { type: String },
    }),
  );
  return Model;
};
