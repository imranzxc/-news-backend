const mongoose = require("mongoose");

const categoriesSchema = mongoose.Schema({
  catName: String,
  
});

const Categories = mongoose.model('Categories', categoriesSchema);

module.exports = Categories;