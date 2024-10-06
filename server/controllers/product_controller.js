import Product from "../db/models/product_model.js";
import Category from "../db/models/category_model.js"; 
import fs from "fs";

const addProduct = async (req, res) => {
  try {
    const { name, categoryId } = req.body;

    // file control
    if (!req.file) {
      return res.status(400).json({ message: "file can not upload" });
    }

    // Image Buffer
    const imageBuffer = fs.readFileSync(req.file.path);

    // create image model in database
    const product = new Product({
      name,
      productImage: imageBuffer, 
      category: categoryId
    });

    const savedProduct = await product.save();

    // find category and add product for category
    const category = await Category.findById(categoryId);
    if (!category) {
      return res.status(404).json({ message: "category not found" });
    }

    category.products.push(savedProduct._id);
    await category.save();

    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllProduct = async (req, res) => {
  try {
    const products = await Product.find().populate('category');
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export { addProduct, getAllProduct };