import Contact from '../db/models/contact_model.js'
import mongoose from 'mongoose'
const submitForm = async (req, res) => {
  try {
    const { fullname, number, message } = req.body
    console.log('Alınan veriler:', fullname, number, message) // Verilerin alındığını kontrol edin

    if (!fullname || !number || !message) {
      return res.status(400).json({ message: 'Name, number, and message are required' })
    }

    const newContact = new Contact({
      fullname,
      number,
      message
    })

    await newContact.save()
    res.status(201).json({ message: 'Contact form submitted successfully' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal server error' })
  }
}
const messageBox = async (req, res) => {
  try {
    const messages = await Contact.find() // findOne yerine find kullanarak tüm mesajları alın
    if (!messages || messages.length === 0) {
      return res.status(494).json({ message: 'Mesaj verisi bulunamadı' })
    }
    return res.status(200).json(messages) // Tüm mesajları frontend'e JSON formatında gönderin
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Mesaj kutusu alınamadı' })
  }
}

const deleteMessage = async (req, res) => {
  try {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).send({ error: 'Geçersiz mesaj ID' }) // Geçersiz ID kontrolü
    }

    const deletedMessage = await Contact.findByIdAndDelete(id)
    if (!deletedMessage) {
      return res.status(404).send({ error: 'Mesaj bulunamadı' })
    }

    res.status(200).send({ message: 'Mesaj başarıyla silindi' })
  } catch (error) {
    console.error('Mesaj silme hatası:', error)
    res.status(500).send({ error: 'Mesaj silme hatası' })
  }
}
export { submitForm, messageBox, deleteMessage }
