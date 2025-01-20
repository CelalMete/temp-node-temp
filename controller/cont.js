var path = require('path');
var {kisiler} = require('../data.js')


module.exports.index = function(req,res,next){
    const { idtek }=req.params
    const tek = kisiler.find((kisi)=>kisi.id==idtek)
    res.send(tek)
    next()
}
exports.homePage = (req, res) => {
    res.render('../views/home.ejs', { title: 'Ana Sayfa' });
};
exports.aboutPage = (req, res) => {
    res.render('../views/about.ejs', { title: ' hakkında' });
};