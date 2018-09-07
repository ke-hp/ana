module.exports = (mongoose: any) => {
    const Model = mongoose.model('mac', new mongoose.Schema({
        mac: { type: String, required: true, unique: true },
        company: { type: String },
        sta: { type: Number },
        ver : { type: String },
        ap: { type: Number },
        type: { type: Number },
        connected: { type: Boolean, default: false },
        time: { type: Date }
    }));
    return Model;
}