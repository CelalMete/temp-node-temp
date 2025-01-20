var mongoose = require('mongoose');
mongoose.Promise = require('bluebird'); // Bluebird'ü Promises olarak ayarlıyoruz.

var mongodb = 'mongodb://localhost/yenidb';
mongoose.connect('mongodb://localhost:27017/yenidb', {
    connectTimeoutMS: 30000, // 30 saniye
    socketTimeoutMS: 45000, // 45 saniye
  })
  
// MongoDB bağlantı fonksiyonu
const connectToMongo = async () => {
  try {
    // MongoDB'ye bağlan
   /* await mongoose.connect(mongodb, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });*/
    console.log('MongoDB bağlantısı başarılı');
  } catch (error) {
    console.error('MongoDB bağlantı hatası:', error);
    process.exit(1); // Hata durumunda uygulamayı sonlandır
  }
};

module.exports = connectToMongo;