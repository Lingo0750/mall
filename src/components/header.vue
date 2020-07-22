<template>
  <div>
    <div class="nav">
   <el-row>
       <el-col :span='5'><img src="../../static/img/biglogo.png" alt=""></el-col>
        <el-col :span='5' style="text-align: center;"><router-link to="/">首页</router-link></el-col>
       <el-col :span='3'><div>分类</div></el-col>
       <el-col :span='3'><router-link to="/top" @click.prevent='rank()'>推荐</router-link></el-col>
       <el-col :span='3' ><a href="" @click.prevent='show_log()' v-if="has_login==0">登录</a></el-col>
       <el-col :span='3' ><a href=""  v-if='has_login==1'>个人中心</a></el-col>

       <el-col :span='1'><div>搜索:</div></el-col>
       <el-col :span='3'>
       <input type="text" placeholder="请输入查找内容"  v-model='input_con' style="display: inline-block; height: 26px; width:100px;border: 0;">
       <img @click="search_jump" style="vertical-align: middle; " src="../../static/img/search_logo.png" alt="">
      </el-col>

   </el-row>
  </div>
    
  <div id='login' v-show='log_sta'>
    <h4>请登录</h4> 
    <span>账号</span> <input type="text" placeholder="请输入账号"  v-model='user'>
    <br>
    <span>密码</span> <input type="password" placeholder="请输入密码"  v-model='pwd'>
    <br>
    <a href="">点击注册</a>
    <br>
    <button  @click.prevent='do_reg()'> 登录</button>
    <button>注册</button>
    </div>


  <div id='search_content'>
        
  </div>

  </div>
</template>

<script>
export default {
  props:['login_sta'],
  data () {
    return {
        user:'',
        pwd:'',
        input_con:'',
        log_sta:false,
        has_login:0,
        curCom:'first',
        isAct:'1',
        menus:[
            {
                name:''
            }
        ]
    }
      
    },
    mounted() {
 
      
    },
    methods:{
      show_log(){
        return this.log_sta=!this.log_sta;
      },
      rank(){
        this.$parent.hide();
      },
      do_reg(){
      this.axios.get(`api/login?user=${this.user}&pwd=${this.pwd}`).then((res)=>{
        console.log(res)
        if(res.data.length>0){
          alert('登录成功')
          this.log_sta=!this.log_sta;   
          this.has_login=1
             }
      })
      .catch((err)=>{
        console.log(err)
      })      
      },
      search_jump(){
        this.$router.push({path:`/search/${this.input_con}`});
        this.input_con=''

      }

  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav{
    margin: 0;
    padding: 0; 
    width: 100%; 
    height: 100px;
    background-color:white;
    border-radius: 5px;
    line-height: 100px;
    margin-bottom: 20px;
    }

.el-col>div,a{
    color: gray;
    font-family: 黑体;
    font-size: 25px;
    text-decoration: none;
}
#login{
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 100 ;
    transform: translate(-50%,-50%);
    height: 400px; width: 400px;
    border: 3px solid #232893;
    border-radius: 10px ;
    background-color: white;
    opacity: 90%;
    text-align: center;
  }
  #login>input{
    display: inline-block;
    margin-top: 40px;
    margin-bottom: 40px;
  }
  #login>button{
    margin: 20px;
    font-size: 20px;
    color: #4051e7;
    border-radius: 15px;
  }
  .search_content{
   width: 1000px;
   background-color: white;
   position: relative;
   left: 50%;
   top: 50%;   
   margin-left: -550px;  
   margin-top: 45px;
   padding: 40px;
 }
</style>
