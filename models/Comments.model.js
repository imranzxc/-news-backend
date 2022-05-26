const mongoose = require("mongoose");

const commentsSchema = mongoose.Schema({
  comName: String,
  comText: String,
  comNewsId:{
    ref: "News",
    type: mongoose.SchemaTypes.ObjectId,
  }
});

const Comments = mongoose.model('Comments', commentsSchema);

module.exports = Comments;