var mongoose = require('mongoose');
var schema = mongoose.Schema;
var kullanicischema = new mongoose.Schema({
    ad: String,
    soyad: String
},{collation:'kullanicilar'})
var kullanicilar = mongoose.model('kullanici',kullanicischema)
module.exports = kullanicilar;

