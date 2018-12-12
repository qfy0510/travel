<template>
   <div class="detail">
      <div class="swiper-container bg">
          <div class="bg-back">
            <router-link to="/"><span><</span></router-link>  
          </div>
           <div class="swiper-container">
              <swiper :options="swiperOption">
                  <swiper-slide class="swiper-slide" v-for="item in bg" :key="item">
                      <img :src="item"/>
                  </swiper-slide> 
              </swiper>
              <div class="swiper-pagination2">
                <span class=""></span>
            </div>
          </div>
          <div class="bg-foot">
              <p>{{title}}</p>
          </div>
      </div>
      <div class="price">
          <ul>
            <li class="price-tit" v-for="(item,index) in playmess">
                <p @click="disa(item.children,index,'price-child')">{{item.title}}</p>
                <ul class="price-child">
                  <li v-for='(i,index) in item.children'>
                      <p @click="disa(i.children,index,'child-tit')">{{i.title}}</p>
                      <ul class="child-tit">
                        <li v-for='j in i.children'>
                          <p>{{j.title}}</p>
                        </li>
                      </ul>
                  </li>
                </ul>
            </li>
          </ul>
      </div>

   </div>
</template>

<script>
import axios from 'axios'
import $ from 'jquery'
export default {
  name: 'Play',
  data:function(){
     return {
       uid:this.$route.params,
       bg:[],
       playmess:[],
       title:'',
       swiperOption:{
          loop: false,
          autoplay: {
            　delay: 2000,
              disableOnInteraction: false,   
          },
          speed:1000,
            pagination: {
                el: '.swiper-pagination2',
                clickable: true,
                type: "fraction"   
            }
       }    
     }
  },
  methods:{
    disa(item,i,attr){
      if(item){
        $($("."+attr)[i]).toggleClass('price-toggle');
      }
    }
  },
  created(){
    axios.get('static/detail.json').then((req)=>{
      this.title = req.data.data.sightName;
      this.bg = req.data.data.gallaryImgs;
      this.playmess = req.data.data.categoryList;
    }).catch((err)=>{
      console.log(err.status);
    });
  }

}
</script>

<style>
  body{
    background:#fff;
  }
  .bg{
    width:100%;
    position:relative;
    height:30%;
  }
  .bg-back{
    position:absolute;
    top:1rem;
    left:1rem;
    z-index:100;
  }
  .bg-back span{
    display:inline-block;
    width:2rem;
    height:2rem;
    border-radius:50%;
    background:rgba(0,0,0,.3);
    line-height:2rem;
    text-align:center;
    color:#fff;
    font-size:1.6rem;
  }
  .bg img{
    width:100%;
  }
  .swiper-pagination2{
    position:absolute;
    bottom:0;
    z-index:100;
    left:90%; 
    line-height:2rem;
  }
  .swiper-pagination2::before{
     display:inline-block;
     content:'';
     width:1.5rem;
     height:1.5rem;
     background:url('../../assets/img/tour11.png') no-repeat; 
     background-size:100%;
     margin-right:1rem;
     position:absolute;
     left:-6%;
     bottom:10%;
  }
  .swiper-pagination2 span{
    display:inline-block;
    font-size:1.6rem;
    line-height:1;
    margin-right:-2%;
    
  }
  .bg-foot{
    width:100%;
    position:absolute;
    bottom:0;
    color:#fff;
    z-index:100;
    background:rgba(0,0,0,.2);
  }
  .bg-foot p{
    font-size:1.6rem;
    line-height:2;
    text-indent:1em;
  }
  .price-child,.child-tit{
    display:none;
  }
  .price-toggle{
    display:block;
  }
  .price ul{
    background:#fff;
  }
  .price-tit p{
    padding:1rem 0;
    border-bottom:1px solid #ccc;
    text-indent:1em;
  }
  .price-tit ul{
    padding-left:1rem;
  }
</style>
