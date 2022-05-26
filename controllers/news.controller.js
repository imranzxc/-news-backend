const News = require('../models/News.model')

module.exports.newsController = {
  postNews:(req, res) => {
    News.create({
      header: req.body.header,
      text: req.body.text,
      categoryId: req.body.categoryId,

    }).then((data) => {
      res.json(data)
    })
  }, 

  deleteNews:(req, res) => {
    News.findByIdAndRemove(req.params.id).then((data) => {
      res.json('Новость удалена')
    })
  }, 

  patchNewsId:(req, res) => {
    News.findByIdAndUpdate(req.params.id, {text: req.body.text}).then((data) => {
      res.json('Новость изменена')
    })
  }, 
  getNewsId:(req, res) => {
    News.findById(req.params.id).then((data) => {
      res.json(data)
    })
  },
  getNews:(req, res) => {
    News.find().then((data) => {
      res.json(data)
    })
  },
  getNewsCategory:(req, res) => {
    News.find({categoryId: req.params.id}).then((data) => {
      res.json(data)
    })
  }
  
}