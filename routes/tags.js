const express = require("express");

const router = express.Router({ mergeParams: true });
const fakeTags = require("../data/tags");
const fakePosts = require("../data/posts");

router.get("/", (req, res) => {
  res.json(fakeTags);
});

router.get("/:tagId/posts", (req, res) => {
  const tagId = Number(req.params.tagId);
  const tags = fakePosts.filter(tag => tag.tag_id.includes(tagId));
  res.json(tags);
});

module.exports = router;
