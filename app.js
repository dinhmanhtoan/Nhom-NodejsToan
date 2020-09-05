const express = require('express');
const app  = express();
const ejs = require('ejs');
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 5000

//app.use(expressLayouts);
app.listen(PORT,(req,res) => console.log("ket noi thanh cong"));
app.use(express.static('public'))
app.set('view engine','ejs');
app.set('views','./views');
app.use(bodyParser.urlencoded({extended:true}))

app.use('/',require('./routes/marketplace'));


// function processFile(content) {
//   let total = 0;s
//   const quantity =  json.filter(e=>  e.quantity >=7)
//   quantity.map(e =>{
//    total += parseInt(e.price.slice(1,-1))
// })
//   return total;
// }
