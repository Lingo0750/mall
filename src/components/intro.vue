<template>

    <div class="list_01">
      
        <div class="list_left">
          <h3 style="color: black;font-family: 宋体;text-align: center;" @click="jump_detail(top_show[0].mid)">{{top_show[0].btitle}}</h3>
          <h5 style="font-family:宋体">作者:{{top_show[0].author}}</h5>
          <p style="margin-bottom: 44px; display: block; height: 84px; overflow:auto;">{{top_show[0].introduce}}</p>
          <hr>
          <img id='left_img' @click="jump_detail(top_show[0].mid)" :src="top_show[0].bpic_b" alt="">
        </div>
        <div class="list_center">
          <div>
            <img :src="top_show[1].bpic_b"  @click="jump_detail(top_show[1].mid)" alt="">
            <p @click="jump_detail(top_show[1].mid)">{{top_show[1].btitle}}</p>
          </div>
          <div>
            <img @click="jump_detail(top_show[2].mid)":src="top_show[2].bpic_b" alt="">
            <p @click="jump_detail(top_show[2].mid)">{{top_show[2].btitle}}</p>
          </div>
          <hr>
          <div>
            <img @click="jump_detail(top_show[3].mid)":src="top_show[3].bpic_b" alt="">
            <p @click="jump_detail(top_show[3].mid)">{{top_show[3].btitle}}</p>
  
          </div>
          <div>
            <img @click="jump_detail(top_show[4].mid)":src="top_show[4].bpic_b" alt="">
            <p @click="jump_detail(top_show[4].mid)">{{top_show[4].btitle}}</p>
          </div>
        </div>
        <div class="list_right">
          <div class="right_head" style="text-align: center;">
          <img src="../../static/img/rank_logo.png" alt="">
  
        </div>
          <ul class="ranking_sum" v-for="(item,i) in top_show">
            <li @click="jump_detail(top_show[i].mid)">{{i+1}}.{{item.btitle}}<span><img src="../../static/img/rank_logo02.png" alt="">{{item.click}}</span></li>
          
          </ul>
        </div> 
      </div>
  </template>
  
  <script>
  export default {
       
    data(){
      return{
        top10:Array,
        top_show:Array,
        
         }
    },
    mounted(){
      this.axios.get('api/list_top').then((res)=>{
        this.top10=res.data;
        this.top_show=this.top10.slice(0,10)
      })
      
  },
    methods: {
      jump_detail(nid){
        this.$router.push({name:'Detail',params:{nid:nid}});
      }
    },

 
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
      .foot>ul>li{
        display: inline-block;
      }
      p{
          text-align: center;
          
      }
      a:hover,a:active,a:visited{
          color: black;
      }
     
      .list_center>div>img{
        margin-top: 15px;
        height: 140px;
        width: 105px;
      }
      .list_center>div>img,.list_left>img{
        cursor: pointer;

      }
      li:hover,h3:hover {
        cursor: pointer;
      }
  </style>
  