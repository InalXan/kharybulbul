import jwt from 'jsonwebtoken'

const verifyToken = (req, res, next) => {
  const token = req.headers['authorization']

  // Token'ın olup olmadığını kontrol edin
  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  // "Bearer " kısmını çıkarın
  const bearerToken = token.split(' ')[1]

  // Token'ı doğrulayın
  jwt.verify(bearerToken, 'secret', (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Unauthorized' })
    }
    req.user = decoded // req.user'a token'dan çözümlenen kullanıcıyı ekleyin
    next()
  })
}

export default verifyToken
