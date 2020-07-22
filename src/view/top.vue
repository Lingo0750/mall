<template>
  <div class="top_content">
<div>   
  <el-row style="margin-bottom: 30px;" v-for='(item,i) in top_show' >

    <el-col :span='3' ><img  style="margin-top: 21px ;" :src="item.bpic_s" alt=""></el-col>
    <el-col :span='18' ><div  @click='get_id(item.mid, $event)'' style="text-align: center; border-bottom: 1px solid black; font-size: 20px; font-weight: bolder; color: #646bd1;">{{item.btitle}}</div>
      <p style="color: gray;">作者:{{item.author}}</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;{{item.introduce}}</p>
    </el-col>
    <el-col :span='3'><h4 style="text-align: center; font-size: 45px;">{{(i+1)+(current_page-1)*pages_count}}</h4></el-col>  
  </el-row>
  <hr>
  </div>

  <div class='pages_nav' >
    <button class="btn btn-default" type="submit" @click="primaryPage">首页</button>
    <button class="btn btn-default" type="submit" @click="prePage">上页</button>
    <button class="btn btn-default" type="submit">{{pages_cur}}/{{Math.ceil(top10.length/pages_count)}}</button>
    <button class="btn btn-default" type="submit" @click="nextPage">下页</button>
    <button class="btn btn-default" type="submit" @click="lastPage">尾页</button>  </div>
    </div>
</template>

<script>
  export default {
    data(){
      return{
        top10:Array,
        top_show:Array,
        pages_count:10,
        pages_cur:1
         }
    },
    mounted(){
      this.axios.get('api/list_top').then((res)=>{
        this.top10=res.data;
        this.top_show=this.top10.slice(0,10)
          console.log('mon:'+this.top_show)
      })
      
  },
  computed:{
    page_top10(){
      let {pages_cur,pages_count} = this
      return this.top10.slice((pages_cur-1)*pages_count,pages_cur*pages_count)
    },
    current_page(){
      return this.pages_cur
            this.top_show=this.top10.slice(this.pages_count*(this.pages_cur-1),this.pages_count*this.pages_cur)

    }
},
  methods: {
    primaryPage(){
      this.pages_cur = 1

    },
    prePage(){
      if(this.pages_cur == 1){
        return
      }
      this.pages_cur = this.pages_cur - 1
      this.top_show=this.top10.slice(this.pages_count*(this.pages_cur-1),this.pages_count*this.pages_cur)

    },
    nextPage(){
      if(this.pages_cur == Math.ceil(this.top10.length/this.pages_count)){
        return
      }
      this.pages_cur = this.pages_cur + 1



      this.top_show=this.top10.slice(this.pages_count*(this.pages_cur-1),this.pages_count*this.pages_cur)
      console.log(this.top_show)
    },
    
    lastPage(){
      this.pages_cur = Math.ceil(this.top10.length/this.pages_count)
      this.top_show=this.top10.slice(this.pages_count*(this.pages_cur-1),this.pages_count*this.pages_cur)

    },

    delData(){
            //在axios成功的回调里面
            this.reload();
        }
    
  },

  }

 
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .top_content{
   width: 1000px;
   background-color: white;
   position: relative;
   left: 50%;
   top: 50%;   
   margin-left: -550px;  
   margin-top: 45px;
   padding: 40px;
 }

img{
  height: 140px;
  width: 105px;
}
.pages_nav{
  text-align: center;
}
.pages_nav>button{
  margin-top: 20px;
  font-size: 20px;
  background-color: white;
}
</style>