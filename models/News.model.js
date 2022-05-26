const mongoose = require("mongoose");

const newsSchema = mongoose.Schema({
  header: String,
  text: String,
  categoryId: {
    ref: "Categories",
    type: mongoose.SchemaTypes.ObjectId,
  },
});

const News = mongoose.model("News", newsSchema);

module.exports = News;
