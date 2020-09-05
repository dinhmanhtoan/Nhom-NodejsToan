const express = require('express');
const fs = require('fs');
const { parse } = require('path');
const router = express.Router();;

// convert sang Json
function processFile(contentString) {

  return  JSON.parse(contentString)
  
  }
  // đọc file Json dồng bộ
  let text = fs.readFileSync('data.json','utf8')

// product.ejs
  router.get("/product",(req,res) =>{
     let query = req.query.name
     let names = JSON.parse(text)
     let ramdom = Math.floor(Math.random() * names.length); 
     let filterdata = names.filter(e =>{
        if (e.name == query) {
          return true;
          
        }
      })   
   let total;
   if (ramdom > names.length - 4){
    total = names.length - ramdom;
    }else{
      total= false;
  }    
  console.log(total)
  console.log(ramdom)
    res.render('product',{
        product:filterdata[0],
        ramdoms:ramdom,
        name:names,
        totals:total

    })
  })

  // đọc file Json Bất đông bộ 
  //location.ejs
  fs.readFile('data.json', 'utf-8',function (err, data) {
    if (err) {
        throw err;
    }
      let contentString = data;
      let contentJson =  processFile(contentString)
      router.get('/:id?',(req,res) =>{
      let currentPage = req.params.id ||1
        console.log(currentPage);
        let postsPerPage = 10;
        let indexOfLastPost = currentPage * postsPerPage;
        let indexOfFirstPost =  indexOfLastPost - postsPerPage;
        let totalPage =  Math.ceil(contentJson.length/postsPerPage) 
        let currentPost = contentJson.slice(indexOfFirstPost,indexOfLastPost);
      res.render('location',{
        product:currentPost,
        page:totalPage,
        currentPages:currentPage
      })
   
        
        }) 
          
  });

module.exports = router;

  // fs.readFile('data.json', 'utf-8',function (err, data) {
  //   if (err) {
  //       throw err;
  //   }

  //   let contentString = data;
  //   let contentJson =  processFile(contentString)
  //        router.get('/:id',(req,res) =>{
  //         let currentPage = req.params.id
  //         console.log(currentPage);
  //         let postsPerPage = 10;
  //         let indexOfLastPost = currentPage * postsPerPage;
  //         let indexOfFirstPost =  indexOfLastPost - postsPerPage;
  //         let totalPage =  Math.ceil(contentJson.length/postsPerPage) 
  //         let currentPost = contentJson.slice(indexOfFirstPost,indexOfLastPost);
  //         // res.render('filter',{
  //         //   product:currentPost,
  //         //   page:totalPage,
  //         //   currentPages:currentPage
  //         // })
       
  //         res.render('search',{
  //           product:currentPost,
  //           page:totalPage,
  //           currentPages:currentPage
  //         }) }) 
  // });

       //  let query = req.query.name;  
 
          // res.render('oninputonchange',{
          //   product:currentPost,
          //   page:totalPage,
          //   currentPages:currentPage,
         //   querys:query
          // })


  //   app.get('/test.js', function(req, res) {
//     res.set('Content-Type', 'application/javascript');
//     res.render('testPage', { myVar : currentPost });
// });

// First I want to read the file;
 
// fs.readFile('data.json', 'utf-8',function (err, data) {
//   if (err) {
//       throw err;
//   }
 
//   let posts = [];
//   let loading = false;
//   let currentPage = 1;
//   let postsPerPage = 10;
//   let indexOfLastPost = currentPage * postsPerPage;
//   let indexOfFirstPost =  indexOfLastPost - postsPerPage
//   let contentString = data;
//   let contentJson =  processFile(contentString)
//       posts = contentJson
//   let currentPost = posts.slice(indexOfFirstPost,indexOfLastPost);
//   let totalPage =  Math.ceil(posts.length/postsPerPage)
//        router.get('/',(req,res) =>{
//         res.render('filter',{
//           total:currentPost,
//           page:totalPage
//         })}) 
// });
