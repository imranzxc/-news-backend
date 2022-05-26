const Comments = require("../models/Comments.model");

module.exports.commentsController = {
  postComments: (req, res) => {
    Comments.create({
      comName: req.body.string,
      comText: req.body.string,
      comNewsId: req.body.comNewsId,
    }).then((data) => {
      res.json(data);
    });
  },
  deleteComment: (req, res) => {
    Comments.findByIdAndRemove(req.params.id).then((data) => {
      res.json("Комментарий удален");
    });
  },
  getCommentsById: (req, res) => {
    Comments.find({comNewsId: req.params.id}).then((data) => {
      res.json(data);
    });
  },
};
