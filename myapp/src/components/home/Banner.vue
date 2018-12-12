<template>
    <div class="banner">
        <div class="swiper-container">
            <swiper :options="swiperOption">
                <swiper-slide class="swiper-slide" v-for="item in banner" :key="item.imgUrl">
                    <img :src="item.imgUrl"/>
                </swiper-slide> 
            </swiper>
            <div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets">
                <span class="swiper-pagination-bullet swiper-pagination-bullet-active"></span>
                <span class="swiper-pagination-bullet"></span>
                <span class="swiper-pagination-bullet"></span>
                <span class="swiper-pagination-bullet"></span>
                <span class="swiper-pagination-bullet"></span>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Banner',
  data:function(){
      return {
          banner:[],
          swiperOption:{
             loop: false,
             autoplay: {
            　　delay: 2000,
                disableOnInteraction: false,   
             },
            speed:1000,
            pagination: {
                el: '.swiper-pagination',
                clickable: true 
            }
          }    
      }
  },
  created() {
     axios.get("static/index.json").then((res)=>{
        this.banner = res.data.data.swiperList;
     })
  }
}
</script>

<style>
    .banner{
        width:100%;
        
    }
    .swiper-slide img{
        width:100%;
    }
    .swiper-pagination{
        bottom:0;
        left:45%;
    }
    .swiper-container {
        width: 100%;
        height: 100%;  
    }
</style>
