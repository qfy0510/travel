<template>
    <div class='recommend'>
        <h3 class="title">热销推荐</h3>
        <div class="hot-view">
            <dl class="view-intro clearfix" v-for="item in hotview" :key='item.imgUrl'>
                <dt>
                    <img :src="item.imgUrl"/>
                </dt>
                <dd>
                    <h3>{{item.title}}</h3>
                    <p>{{item.desc}}</p>
                    <span>查看详情</span>
                </dd>
            </dl>
        </div>
        
    </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'Hot',
  data:function(){
      return {
          hotview:[]
      }
  },
  created() {
     axios.get("static/index.json").then((res)=>{
        this.hotview = res.data.data.recommendList;
     })
  },
}
</script>

<style>
    .title{
        padding:1.4rem 0 1.4rem 1.4rem;
        font-size:1.4rem;
        color:#000;
    }
    .hot-view{
        width:100%;
        height:10%;
        background:#fff;    
    }
    .hot-view dl{
        border-bottom:1px solid #eee;
    }
    .view-intro dt{
       float:left;
       box-sizing:border-box;
       width:30%;
       padding:1rem 0 1rem 1rem;
    }
    .view-intro img{
        width:100%;
    }
    .view-intro dd{
        width:70%;
        box-sizing:border-box;
        float:left;
        padding:1rem 0 1rem 1rem;
    }
    .view-intro dd h3{
        font-size:1.4rem;
        font-weight:bold;
        margin-top:1rem;
    }
    .view-intro dd p{
        font-size:1.2rem;
        line-height:2.2rem;
        color:#ccc;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
        margin-right:1rem;
    }
     .view-intro dd span{
         display:block;
         width:7.5rem;
         height:2.2rem;
         line-height:2.2rem;
         background:#ff9300;
         color:#fff;
         text-align:center;
         font-size:1.4rem;
         border-radius:5px;
         margin:.5rem 0;
     }
</style>
