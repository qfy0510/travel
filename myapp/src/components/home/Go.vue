<template>
    <div class='wherego'>
        <h3 class="title">周末去哪儿</h3>
        <div class="weekend">
           <dl v-for="(item,index) in where" :key='item.imgUrl'>
                <dt>
                    <router-link :to="{name:'Play',params:{id:index}}"><img :src="item.imgUrl"/></router-link>
                </dt>
                <dd>
                    <h3>{{item.title}}</h3>
                    <p>{{item.desc}}</p>
                </dd>
            </dl>  
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'Go',
  data:function(){
      return {
          where:[]
      }
  },
  created() {
     axios.get("static/index.json").then((res)=>{
        this.where = res.data.data.weekendList;
     })
  },
}
</script>
<style>
    .weekend dl{
        width:100%;
        background:#fff;
    }
    .weekend dl img{
        width:100%;
    }
    .weekend dd{
        text-indent:1em;
    }
    .weekend dd h3{
        font-size:1.4rem;
        font-weight:bold;
        margin-top:1rem;
    }
    .weekend dd p{
        font-size:1.2rem;
        line-height:2.2rem;
        color:#ccc;
    }
</style>
