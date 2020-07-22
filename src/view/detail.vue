<template>

    <div class="detail_content">
        <div class="detail_pic">
      <img :src="top10[0].bpic_b" alt="">
      <img src="../../static/img/shadow.gif" alt="">
    </div>
    <div class="detail_intro">
        <h3 style="font-size: 30px; font-family: 黑体; color: #d32f2f;">{{top10[0].btitle}}</h3 style="font-size: 30px; font-family: 黑体; color: #ffffff;">
        <hr>
        <span>作者:{{top10[0].author}} &nbsp;</span>
        <span>时间:2019-08-21 &nbsp;</span>
        <span>访问量:{{top10[0].click}} &nbsp;</span>
        <hr>
        <p>{{top10[0].introduce}}
        </p>
        <hr>
        <span>&nbsp;百度云提取码:</span>
        <span>tvb3az</span>
        <hr>
        <span>&nbsp;解压密码:</span>
        <span>soloman.com &nbsp;</span>
        <hr>
        <div>
        <a href="https://www.555x.org/home/down/txt/id/52273"  download="https://www.555x.org/home/down/txt/id/52273">本地下载 </a>
    </div>
    </div>
  

    </div>
  </template>
  
  <script>
  export default {
      data() {
          return {
            num:'',
            top10:''
          }
      },
       
  mounted() {
      this.num=this.$route.params.nid
      this.axios.get('api/detail?mid='+this.num).then((res)=>{
        this.top10=res.data;
        this.top_show=this.top10.slice(0,10)
      })  },
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
      *{margin: 0;padding: 0;}
    .detail_content{
        height: 500px;
        width: 1200px;
        background-color: white;
        margin: 0 auto;
    }
    .detail_content>:first-child{
        display: inline-block;
        height: 100%;
        width: 30%;
        border-right: 1px solid gray;
        float: left;
    }
  
    .detail_content>.detail_pic>:first-child{
        width: 200px;
        position: relative;
        top: 50%;
        left: 50% ;
        transform:translate(-50%,-50%);
        
    }
    .detail_content>div>img{
        width: 200px;
        position: relative;
        left: 50% ;
        top:30%;
        transform:translate(-50%,-50%);

    }
    .detail_intro{
        height: 100%;
        width: 69%;
        float: left;
        display: inline-block;
        text-align: center;
        
    }
    .detail_intro>span{
        font-size: 20px;
        color: gray;
    }

    .detail_intro>p{
        text-align: left;
        height:200px;
        font-size: 25px;
        color: black;
    }
    .detail_intro>div{
        margin-top: 50px;
        height:200px;
       
    }
    .detail_intro>div>a{
        display: block;
        margin: 0 auto;
        height: 60px;
        width: 100%;
        background-color: #be3232;
        border: 3px solid #ffffff;
        border-radius: 10px;
        font-size: 30px;
        color: #ffffff;
        cursor: pointer;
        text-decoration: none;

    }
   
  </style>
  