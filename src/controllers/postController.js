const Post = require("../models/Post");

exports.createPost = async (req, res) => {
  try {
    const { name, description, age } = req.body;
    if (!name || !description || age === undefined) {
      return res.status(400).json({ message: "name, description and age are required" });
    }
    const post = await Post.create({ name, description, age });
    return res.status(201).json({ message: "Post created successfully", post });
  } catch (error) {
    return res.status(400).json({ message: "Could not create post", error: error.message });
  }
};

exports.getPosts = async (_req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    return res.status(200).json({ count: posts.length, posts });
  } catch (error) {
    return res.status(500).json({ message: "Could not fetch posts", error: error.message });
  }
};

exports.getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: "Post not found" });
    return res.status(200).json({ post });
  } catch (error) {
    return res.status(400).json({ message: "Invalid post ID", error: error.message });
  }
};

exports.updatePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!post) return res.status(404).json({ message: "Post not found" });
    return res.status(200).json({ message: "Post updated successfully", post });
  } catch (error) {
    return res.status(400).json({ message: "Could not update post", error: error.message });
  }
};

exports.deletePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) return res.status(404).json({ message: "Post not found" });
    return res.status(200).json({ message: "Post deleted successfully", post });
  } catch (error) {
    return res.status(400).json({ message: "Could not delete post", error: error.message });
  }
};
