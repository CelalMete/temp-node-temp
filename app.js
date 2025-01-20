
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('./models/kullanıcı.js');

const app = express();
const PORT = 5000;

// MongoDB bağlantısı
mongoose
  .connect('mongodb://localhost:27017/yenidb', {
 
  })
  .then(() => console.log('MongoDB bağlantısı başarılı!'))
  .catch((err) => console.error('MongoDB bağlantı hatası:', err));

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Ana Sayfa
app.get('/', (req, res) => {
  res.send(`
    <form action="/add-user" method="POST">
      <label for="firstName">Ad:</label>
      <input type="text" name="ad" id="ad" required />
      <br />
      <label for="lastName">Soyad:</label>
      <input type="text" name="soyad" id="soyad" required />
      <br />
      <button type="submit">Kaydet</button>
    </form>
  `);
});

// Kullanıcı Ekleme
app.post('/add-user', async (req, res) => {
  const {ad,soyad} = req.body;

  try {
    const newUser = new User({ad,soyad});
    await newUser.save();
    res.send('Kullanıcı başarıyla kaydedildi!');
  } catch (error) {
    console.error('Kullanıcı kaydedilirken hata:', error);
    res.status(500).send('Bir hata oluştu.');
  }
});

// Sunucuyu Dinleme
app.listen(PORT, () => {
  console.log(`Sunucu http://localhost:${PORT} adresinde çalışıyor.`);
});
