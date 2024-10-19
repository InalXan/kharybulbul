import Product from '../db/models/product_model.js'
import Category from '../db/models/category_model.js'
import fs from 'fs'

const addProduct = async (req, res) => {
  try {
    const { name, categoryId } = req.body

    // file control
    if (!req.file) {
      return res.status(400).json({ message: 'file can not upload' })
    }

    // Image Buffer
    const imageBuffer = fs.readFileSync(req.file.path)

    // create image model in database
    const product = new Product({
      name,
      productImage: imageBuffer,
      category: categoryId
    })

    const savedProduct = await product.save()

    // find category and add product for category
    const category = await Category.findById(categoryId)
    if (!category) {
      return res.status(404).json({ message: 'category not found' })
    }

    category.products.push(savedProduct._id)
    await category.save()

    res.status(201).json(savedProduct)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const getAllProduct = async (req, res) => {
  try {
    const products = await Product.find().populate('category')
    res.json(products)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params

    // Find the product by ID
    const product = await Product.findById(id)
    if (!product) {
      return res.status(404).json({ message: 'Product not found' })
    }

    // Find the category and remove the product reference
    const category = await Category.findById(product.category)
    if (category) {
      category.products = category.products.filter((prodId) => prodId.toString() !== id)
      await category.save()
    }

    // Delete the product
    await Product.findByIdAndDelete(id)

    res.status(200).json({ message: 'Product deleted successfully' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export { addProduct, getAllProduct, deleteProduct }
