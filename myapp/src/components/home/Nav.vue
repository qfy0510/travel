<template>
    <nav>
         <div class="swiper-container1" :options="swiperOption">
            <swiper :options="swiperOption">
                <swiper-slide>
                    <ul class="nav-sign">
                        <li v-for='(item,index) in list' :key='item.imgUrl' v-if="index<8">
                            <img :src='item.imgUrl' />
                            <p>{{item.desc}}</p>
                        </li>
                    </ul>
                </swiper-slide>
                <swiper-slide class="swiper-slide">
                    <ul class="nav-sign">
                        <li v-for='(item,index) in list' :key='item.imgUrl' v-if="index>=8">
                            <img :src='item.imgUrl' />
                            <p>{{item.desc}}</p>
                        </li>
                    </ul>
                </swiper-slide>
            </swiper>
            <div class="swiper-pagination1 swiper-pagination-clickable swiper-pagination-bullets">
                <span class="swiper-pagination-bullet swiper-pagination-bullet-active"></span>
                <span class="swiper-pagination-bullet"></span>
            </div>
        </div> 
    </nav>
</template>

<script scoped>
import axios from 'axios'
export default {
  name: 'Nav',
  data:function(){
      return {
          list:[],
           swiperOption:{
              pagination: {
                el: '.swiper-pagination1',
                clickable: true
                }
          },
      }
  },
  created(){
     axios.get("static/index.json").then((res)=>{
        this.list = res.data.data.iconList;
     })
  },
}
</script>

<style>
    nav{
        width:100%;
        background:#fff;
        position:relative; 
    }
    nav .swiper-container{
        padding-bottom:5%;
    }
    .nav-sign{
        flex-wrap:wrap;
    }
    .nav-sign li{
        float:left;
        width:25%;
        padding:1.5rem 1.2rem;
        box-sizing:border-box;
        text-align:center;
    }
    .nav-sign li img{
        width:100%;
    }
    .nav-sign li p{
        font-size:1.2rem;
        line-height:1.5;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
    }
    .swiper-pagination1 {
        text-align: center;
    }
</style>
