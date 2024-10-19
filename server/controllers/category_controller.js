import Category from '../db/models/category_model.js'
import fs from 'fs'

// Add category
const addCategory = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'File not uploaded' })
    }
    const imageBuffer = fs.readFileSync(req.file.path)

    const newCategory = new Category({
      name: req.body.name,
      categoryImage: imageBuffer
    })

    await newCategory.save()

    return res.status(201).json({ message: 'Category added successfully', category: newCategory })
  } catch (err) {
    return res.status(500).json({ message: 'Error adding category', error: err.message })
  }
}

// Delete category
const deleteCategory = async (req, res) => {
  try {
    await Category.findByIdAndDelete(req.params.id)
    return res.status(200).json({ message: 'Category deleted successfully' })
  } catch (err) {
    return res.status(500).json({ message: 'Error deleting category', error: err.message })
  }
}

// Update category
const updateCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndUpdate(
      req.params.id,
      { name: req.body.name },
      { new: true }
    )
    return res.status(200).json({ message: 'Category updated successfully', category })
  } catch (err) {
    return res.status(500).json({ message: 'Error updating category', error: err.message })
  }
}

// Get all categories
const getAllCategory = async (req, res) => {
  try {
    const categories = await Category.find()
    res.json(categories)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export { addCategory, deleteCategory, updateCategory, getAllCategory }
