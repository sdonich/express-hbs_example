const express = require('express');
const expressHbs = require('express-handlebars');
const hbs = require('hbs');
const app = express();

const contact = require('./data/contact');
  
// устанавливаем настройки для файлов layout
app.engine('hbs', expressHbs(
  {
    layoutsDir: 'views/layouts', 
    defaultLayout: 'layout',
    extname: 'hbs'
  }
))

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
 
app.use('/contact', function(req, res){

  res.render('contact', contact);
}); 
 
app.use('/', function(req, res){
      
  res.render('home.hbs', contact);
});
app.listen(3000, () => console.log('Server is running'));