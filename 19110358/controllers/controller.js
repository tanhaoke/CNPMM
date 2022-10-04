const { posts } = require("../models/model.js");

exports.defaultView = (req, res) => {
  res.render("index", { posts: posts });
};

exports.getAllPosts = (req, res) => {
  res.render("create");
};

exports.getPostById = (req, res) => {
  const id = req.params.id;
  const item = posts.find((item) => item.id == id);
  if (item) {
    res.render("detail", {
      id: item.id,
      title: item.title,
      content: item.content,
      comments: item.comments,
    });
  } else {
    res.send("Error");
  }
};

exports.getViewPost = (req, res) => {
  res.render("create");
};

exports.createPost = (req, res) => {
  const body = req.body;

  const data = {
    id: posts.length,
    body,
    comments: [],
  };
  const result = [posts, data];
  res.render("index", result);
  res.redirect("/");
};

exports.addCommentPost = (req, res) => {
  const id = req.params.id;
  const body = req.body;

  const item = posts.find((item) => item.id == id);
  if (item) {
    item.comments.push(body);
    res.redirect("/");
  } else {
    res.end(JSON.stringify({ error: "Not have Post" }));
  }
};
