import About from '../db/models/about_model.js'
import fs from 'fs'
import path from 'path'
const addAbout = async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'Dosya yüklenmedi' })
    }
    // const imageBuffer = fs.readFileSync(req.file.path);
    const imageName = req.file.filename

    const newAbout = new About({
      name: req.body.name,
      aboutImage: imageName,
      description: req.body.description
    })
    await newAbout.save()

    // fs.unlinkSync(req.file.path);

    return res.status(201).json({ message: 'Add About Data Succesfully', about: newAbout })
  } catch (err) {
    return res.status(500).json({ message: 'Add About error', error: err.message })
  }
}

const __dirname = path.resolve()

const getAbout = async (req, res) => {
  try {
    const aboutData = await About.findOne()
    if (!aboutData) {
      return res.status(404).json({ message: 'Hakkında verisi bulunamadı' })
    }

    return res.status(200).json({
      id: aboutData._id,
      name: aboutData.name,
      description: aboutData.description,
      imageUrl: `http://localhost:3000/uploads/about/${aboutData.aboutImage}`
    })
  } catch (err) {
    return res
      .status(500)
      .json({ message: 'Hakkında verisi alınırken hata oluştu', error: err.message })
  }
}
const deleteAbout = async (req, res) => {
  try {
    const aboutData = await About.findByIdAndDelete(req.params.id)
    if (!aboutData) {
      res.status(404).json({
        success: false,
        message: 'About Data Not Found'
      })
    }
    return res.status(200).json({
      success: true,
      message: 'Delete About Data Succesfully'
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'About Data Delete Failed' })
  }
}
export { addAbout, getAbout, deleteAbout }
