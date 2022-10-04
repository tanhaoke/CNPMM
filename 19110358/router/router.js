const router = require("express").Router();
const {
  getAllPosts,
  getViewPost,
  getPostById,
  defaultView,
  createPost,
  addCommentPost,
} = require("../controllers/controller.js");

router.get("/", defaultView);

router.get("/posts", getAllPosts);

router.get("/post", getViewPost);

router.get("/post/:id", getPostById);

router.post("/post", createPost);

router.post("/comment/:id", addCommentPost);

module.exports = router;
