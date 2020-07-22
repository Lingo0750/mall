<template>
    <div>
      <h2 style="text-align: center;">精品书单</h2>
      <intro />

        <man />
        <woman />
    </div>
</template>

<script>
  import man from '@/components/man'
  import woman from '@/components/woman'
  import intro from '@/components/intro'

    export default{
        
   
    methods: {
      delData(){
            //在axios成功的回调里面
            this.reload();
        }
    },
    components: {
      woman,
      man,
      intro
    
      
    }
  }
</script>


<style></style>