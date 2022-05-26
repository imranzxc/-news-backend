const Categories = require("../models/Categories.model");

module.exports.categoriesController = {
  postCategory: (req, res) => {
    Categories.create({
      catName: req.body.catName,
    }).then((data) => {
      res.json(data);
    });
  },
  deleteCategory: (req, res) => {
    Categories.findByIdAndRemove(req.params.id).then((data) => {
      res.json("Категория удален");
    });
  },
  getCategories: (req, res) => {
    Categories.find(req.params.id).then((data) => {
      res.json(data);
    });
  },
};