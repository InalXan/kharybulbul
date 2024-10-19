import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:5000/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})

// Her istekten önce token'ı eklemek için interceptor ekliyoruz
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// login api isteği
export const login = async (email, password) => {
  try {
    const response = await api.post('/admin/login', {
      email,
      password
    })
    return response.data
  } catch (error) {
    throw error
  }
}

// profil bilgilerini almak için GET isteği
export const getProfile = () => {
  return api.get('/admin/profile')
}
// contact form
export const sendContactForm = async (formData) => {
  try {
    console.log('Gönderilen form verileri:', formData) // Form verilerini kontrol et
    const response = await api.post('/contact', formData)
    return response.data
  } catch (error) {
    if (error.response) {
      console.error('Sunucudan gelen hata:', error.response.data)
    } else {
      console.error('İstek hatası:', error.message)
    }
    throw error
  }
}
export const contactInbox = async () => {
  return api.get('/admin/inbox')
}
export const deleteMessage = async (id) => {
  return api.delete(`/admin/inbox/${id}`)
}

// Add Category
export const addCategory = async (formData) => {
  try {
    const response = await api.post('/admin/category', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    return response.data
  } catch (error) {
    throw error
  }
}

// Fetch Categories
export const fetchCategories = async () => {
  try {
    const response = await api.get('/admin/category')
    return response.data
  } catch (error) {
    throw error
  }
}

// Delete Category
export const deleteCategory = async (id) => {
  try {
    const response = await api.delete(`/admin/category/${id}`)
    return response.data
  } catch (error) {
    throw error
  }
}

// Update Category
export const updateCategory = async (id, formData) => {
  try {
    const response = await api.put(`/admin/category/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    return response.data
  } catch (error) {
    throw error
  }
}
