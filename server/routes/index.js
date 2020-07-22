var express = require('express');
var router = express.Router();
var connection = require('../DB/sql.js')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/list_women',function(req,res,next){
   connection.query('select *from book_women',function(error,results,fields){
     res.json(results);
   })
});

router.get('/list_man',function(req,res,next){
  connection.query('select *from book_man',function(error,results,fields){
    res.json(results);
  })
});



router.get('/list_top',function(req,res,next){
  connection.query('select *from top_10 order by click desc',function(error,results,fields){
    res.json(results);
  })
});

router.get('/login',function(req,res,next){
  let user=req.query.user;
  let pwd=req.query.pwd;
  connection.query(`select *from book_user where user='${user}' and pwd='${pwd}'`,function(error,results,fields){
    res.json(results);
  })

},
router.get('/search',function(req,res,next){
  let content=req.query.content;
  connection.query(`select *from top_10 where btitle like '%${content}%'`,function(error,results,fields){
    res.json(results);
  })
}),
router.get('/detail',function(req,res,next){
  let mid=req.query.mid;
  connection.query('select *from top_10 where mid='+mid,function(error,results,fields){
    res.json(results);
  })
})




);


module.exports = router;
