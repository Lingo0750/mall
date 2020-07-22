<template>
  <div id="app">
    <Header :login_sta='login_sta' id="Header"></Header>
    <div class="slider">
      <span id='ban_left'><button @click='prev()' :disabled='mark==0? true:false'><img style="width: 50px;height: 50px;" src="../static/img/ban_left.png"alt=""></button></span>
      <img :src='bannerList[mark]' alt="">
      <span id='ban_right'><button @click='next()'><img style="width: 50px;height: 50px;" src="../static/img/ban_right.png" alt=""></button></span>
      <hr>
    </div>
          <router-view></router-view>

      <div class='flow_win'>
        <div> <a href="#Header"> 顶部 </a> </div>
        <div> <a href="#Intro">精品书单 </a> </div>
        <div> <a href="#Man">男生频道 </a> </div>
        <div> <a href="#women">女生频道 </a> </div>
      </div>
     
    <Top v-show='top_sta'/>

<div  v-show='other_sta'>
<!-- 第一部分 -->
  <Intro id="Intro" />



<!-- 第二部分 -->

<Man id="Man" />


<!-- 第三部分 -->
    
<woman  id="women" />

  <br>

</div>


<Footer />

  </div>



</template>

<script>
 
  import Footer from '@/components/footer'
  import Header from '@/components/header'

  
  

  export default {
    name: 'App',
   
    data() {
      return {
        login_sta:'',
        back:'',
        mark: 0,
        other_sta:true,
        top_sta:false,
        bannerList: ['../static/img/ban06.png', '../static/img/ban03.png', '../static/img/ban04.png']
      }
    },
    methods: {
      next() {

        if (this.mark == this.bannerList.length - 1) {
          return this.mark = 0;
        }
        else {
          return this.mark++
        }
      },
      prev() {
        return this.mark--
        if (this.mark < 0) {
          this.mark = 0;
        }
        console.log(mark)
      },
      hide(){  
        this.other_sta=!this.other_sta
        this.top_sta=!this.top_sta
    },
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(function() {
        this.isRouterAlive = true;
      });
    }


    },
    
    created() {
      setInterval(this.next, 3000);
    },
    



  

    components: {
      Header,
      Footer,
   
      
    }
  }

</script>

<style>
  #id {
    margin: 0;
    padding: 0;
  }

  button {
    border: 0;
    background-color: #f0e9e9c0;
  }

  html {
    background-color: #f0e9e9c0;
  }

  .slider {
    position: relative;
    right: -5px
  }

  #ban_left {
    float: inline-start;
    position: relative;
    bottom: 130px;
  }

  #ban_right {
    position: relative;
    bottom: 130px;
    margin-right: 40px;
  }

  .list_01 {
    background-color: white;
    width: 1000px;
    height: 500px;
    position: relative;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    border-radius: 10px;
    border: 1px solid lightgray;
  }

  .list_01>div {
    float: left;
    color: gray;
  }

  .list_left {
    border-right: 2px solid lightgray;
    width: 30%;
    height: 100%;
    padding-left: 8px;
  }

  #left_img {
    position: relative;
    left: 60px;
    top: 30px;
  }

  .list_center {
    border-right: 2px solid lightgray;
    width: 35%;
    height: 100%;
    text-align: center;
  }

  .list_center>div {
    display: inline-block;
    height: 40%;
    width: 45%;
    margin: 0;
    margin-top: 20px;
    padding: 0;
  }

  .list_right {
    width: 30%;
    height: 100%;
    padding: 10px;
  }
  .ranking_sum{
    list-style: none;
  }
   .ranking_sum>li{
     margin: 20px;
     margin-left: 0;
     border-bottom: 1px solid lightgray;
  }
  .flow_win{
    position: fixed;
    top: 50%;
    left: 97%;
    z-index: 100 ;
    transform: translate(-50%,-50%);
    border-radius: 5px;
    height: 200px;
    width: 100px;
    background-color:lightblue;
  }

.flow_win>div{
  text-align: center;
  padding-top: 5px;
  height: 23%;
}
.flow_win>div>a{
  background-color: lightblue;
  font-size: 18px;
  color: white;
  text-decoration: none;
}
</style>