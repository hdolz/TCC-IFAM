const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

//inicia a variavel do server
const app = express();
const publicPath = path.join(__dirname, './public');

//how middleware works
// app.use((req,res,next)=>{
//     console.log(Date.now());
//     req.name = 'Middleware';
//     next();
// });


//handlebars middleware
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');


app.use('/', express.static(publicPath));


//index route
app.get('/',(req,res)=>{
    //res.send('INDEX');
    //use render method to render the view (express handlebars)
    res.render('index')
});


const port = 5000;

app.listen(port,(req,res)=>{
    console.log(`Listening on port ${port}`);
});