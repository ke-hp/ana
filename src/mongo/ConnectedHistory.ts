module.exports = (mongoose: any) => {
  const Model = mongoose.model(
    "connectedHistory",
    new mongoose.Schema({
      connected: { type: Boolean, required: true },
      mac: { type: String, required: true },
      time: { type: Date },
    }),
  );
  return Model;
};
