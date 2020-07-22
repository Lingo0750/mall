<template>
  <div class="search_content">
      <div class="item_content" v-for="(item,i) in get_content " v-if="get_content.length>0">
        <img :src="item.bpic_b" alt="" @click='jump_detail(item.mid)'>
        <p  @click='jump_detail(item.mid)'> {{item.btitle}}</p>
      </div>
      <div class="item_content" v-if="get_content.length==0">
        <p>找不到相关内容</p>
      </div>
  </div>
</template>



<script>
  export default{
    data() {
      return {
        get_content:'',
        content:''
      }
    },
   
    watch:{
    '$route':'search_sub',
    },
    mounted() {
      this.content=this.$route.params.content
      this.axios.get('api/search?content='+this.content).then((res)=>{
        this.get_content=res.data
      })
    },
  
    methods: {
      jump_detail(nid){
        this.$router.push({name:'Detail',params:{nid:nid}});
      },
      search_sub(){
        this.content=this.$route.params.content
        this.axios.get('api/search?content='+this.content).then((res)=>{
          this.get_content=res.data
      })
    },
    delData(){
            //在axios成功的回调里面
            this.reload();
        }

  },

      }
</script>


<style scoped>
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
 .item_content{
   display: inline-block;
   width: 200px;
   text-align: center;
   flex-wrap: nowrap;
 }
.item_content>img:hover,.item_content>p:hover{
  cursor: pointer;
}

</style>