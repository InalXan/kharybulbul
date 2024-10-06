import Category from "../db/models/category_model.js";
import fs from "fs";

const addCategory = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: "Dosya yüklenmedi" });
        }
        const imageBuffer = fs.readFileSync(req.file.path);

        const newCategory = new Category({
            name: req.body.name,
            categoryImage: imageBuffer  
        });
        await newCategory.save();

        // fs.unlinkSync(req.file.path);  

        return res.status(201).json({ message: "Kategori başarıyla eklendi", category: newCategory });
    } catch (err) {
        return res.status(500).json({ message: "Kategori eklenirken hata oluştu", error: err.message });
    }
};
const getAllCategory = async (req, res) => {
    try {
      const categories = await Category.find().populate('products');
      res.json(categories);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

const getSingleCategory = async (req, res) => {
    try {
      const category = await Category.findById(req.params.id).populate('products');
      res.json(category);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
export {addCategory, getAllCategory, getSingleCategory};