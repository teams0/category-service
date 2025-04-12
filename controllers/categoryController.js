const Category = require('../models/Category');

exports.createCategory = async (req, res) => {
  const category = new Category(req.body);
  await category.save();
  res.status(201).json(category);
};

exports.getCategories = async (_, res) => {
  const categories = await Category.find();
  res.json(categories);
};
