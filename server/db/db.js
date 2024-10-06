import mongoose from 'mongoose'

const DB_LINK =
  'mongodb+srv://admin:3y3vaye1@anproduction.7j0m3fs.mongodb.net/?retryWrites=true&w=majority&appName=anproduction'
const connection_db = async () => {
  let connect = mongoose.connect(DB_LINK)
  try {
    connect
    console.log('Database connection Succesfully')
  } catch (error) {
    console.log('Database connection failed: ', error)
  }
}

export default connection_db
