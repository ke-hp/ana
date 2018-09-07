module.exports = (mongoose:any) => {
    const Model = mongoose.model('sysInfo', new mongoose.Schema({
        mac: {
            type: String,
            required: true
        },
        timestamp: {
            type: String,
            required: true
        },
        keyWord: {
            type: String,
            required: true,
            unique: true
        },
        topic: {
            type: String
        },
        payload: {}
    }));
    return Model;
}