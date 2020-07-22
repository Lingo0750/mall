<template>
  <div v-if='man'>
  <h2 style="text-align: center;">男生频道</h2>

  <div class="man_01" >
    <div class="man_left">
      <h3 style="color: black;font-family: 宋体;text-align: center;" @click='jump_detail(man[0].mid)'>{{man[0].btitle}}</h3>
      <h5 style="font-family:宋体">作者:{{man[0].author}}</h5>
      <p style="margin-bottom: 44px;">许无舟穿越,吃顿饭却误入青楼，清冷的妻子对他失望透顶，老丈人打发他去家族武堂，任他任生任灭</p>
      <hr>
      <img @click='jump_detail(man[0].mid)' id='left_img' src="../../static/img/man_left.jpg" alt="">
    </div>
    <div class="man_center">
      <div>
        <img @click='jump_detail(man[1].mid)' src="../../static/img/man_center01.jpg" alt="" id="man_cen01">
      </div>

      <div>
        <h4 @click='jump_detail(man[1].mid)'>{{man[1].btitle}}</h4>
        <h6>作者:{{man[1].author}}</h6>
        <p>他是国之利刃，也是令各国地下势力闻风丧胆的华夏龙王！</p>
      </div>


      
      <div>
        <img @click='jump_detail(man[2].mid)' :src="man[2].bpic_b" alt="" id="man_cen01">
      </div>

      <div>
        <h4 style="padding: 0; margin: 0;" @click='jump_detail(man[2].mid)'>{{man[2].btitle}}</h4>
        <h6>作者:{{man[2].author}}</h6>
        <p>一代兵王回归都市，只想好好保护战友的萝莉妹妹，却不料这条保护上竟美女如云，各色各样的极品妹子，纷沓而来……</p>
      </div>
    
    </div>

    <div class="man_right">
      <div class="right_head" style="text-align: center;">
        <img src="../../static/img/rank_logo.png" alt="">

      </div>
      <ul class="ranking_sum" v-for='(item,i) in man'>
        <li @click='jump_detail(item.mid)'>{{i+1}}.{{item.btitle}} <span><img src="../../static/img/rank_logo02.png" alt="">{{item.click}}</span></li>
      
      </ul>
    </div>
  </div>
</div>
</template>

<script>
  export default {
    data(){
      return{
        man:Array
      }
    },
    mounted(){
      this.axios.get('api/list_man').then((res)=>{
        this.man=res.data;
      })
    },
    methods: {
      jump_detail(nid){
        this.$router.push({name:'Detail',params:{nid:nid+10}});
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .man_01 {
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

  .man_01>div {
    float: left;
    color: gray;
  }

  .man_left {
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

  .man_center {
    border-right: 2px solid lightgray;
    width: 35%;
    height: 100%;
    text-align: center;
  }

  .man_center>div {
    display: inline-block;
    float: left;  
    height: 40%;
    width: 45%;
    margin: 0;
    margin-top: 30px;
    padding: 0;
    padding-left: 10px;

  }

  .man_right {
    width: 30%;
    height: 100%;
    padding: 10px;
  }

  .ranking_sum {
    man-style: none;
  }

  .ranking_sum>li {
    margin: 20px;
    margin-left: 0;
    border-bottom: 1px solid lightgray;
  }
  h4:hover,img:hover,li{
    cursor: pointer;
  }
</style>