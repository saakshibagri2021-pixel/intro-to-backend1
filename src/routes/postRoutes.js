const express = require("express");
const {
  createPost,
  getPosts,
  getPostById,
  updatePost,
  deletePost
} = require("../controllers/postController");

const router = express.Router();

router.post("/", createPost);
router.get("/", getPosts);
router.get("/:id", getPostById);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);

module.exports = router;
