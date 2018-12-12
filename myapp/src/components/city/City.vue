<template>
   <div>
        <div class='top' id="htop">
            <div class='top-tit clearfix'>
                <router-link to='/'><span><</span></router-link>
                <strong>城市选择</strong>
            </div>
            <form>
                <input type="search" placeholder="输入城市名或拼音"/>
            </form>
        </div>
        <div class="city-con">
            <div>
                <h3 class='city-tit'>当前城市</h3>
                <div class='city-now'>
                    <span>{{city}}</span>
                </div>
            </div>
            <div class='hot-city'>
                <h3 class='city-tit'>热门城市</h3>
                <ul>    
                    <li v-for="item in area" @click="changecity(item.name)">{{item.name}}</li>
                </ul>
            </div>
            <div id="cityKey" >
                <div class="all-city"v-for="(item,key) in allarea">
                    <h3 class='all-tit'>{{key}}</h3>
                    <ul>
                        <li v-for="i in item" @click="changecity(i.name)">{{i.name}}</li>
                    </ul>
                </div>
            </div>
            <div class="right">
                <ul>
                    <li v-for="(item,key,i) in allarea" @click="goto(i)">{{key}}</li>
                </ul>
            
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import {mapState} from 'vuex'
export default {
  name: 'City',
  data:function(){
      return {
          area:[],
          allarea:{}
      }
  },
  computed:{
      ...mapState(['city'])
  },
  methods:{
      goto:function(i){
          var citykey = document.getElementById('cityKey');
            var h = citykey.children[i].getElementsByTagName('h3')[0]; 
            var htop = document.getElementById('htop');
            var high = h.offsetTop - parseFloat(getStyle(htop,'height'));   
            document.timer = setInterval(function(){
              var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
              var target = high;
              var speed = (target-scrollTop)/10;
              speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
              if(parseInt(scrollTop) == parseInt(target)){
                  clearInterval(document.timer);
              }
              document.body.scrollTop = document.documentElement.scrollTop = scrollTop+speed;
          },10);
      },
      changecity(city){
          this.$store.dispatch('changecity',city);  
          this.$router.push('/');  
      }
  },
  created(){
      axios.get('static/city.json').then((req)=>{
          this.area = req.data.data.hotCities;
          this.allarea = req.data.data.cities;
      }).catch((err)=>{
          console.log(err.status);
      });
  }
}
function getStyle(obj,attr){
    return obj.currentStyle ? obj.currentStyle[attr]:getComputedStyle(obj)[attr];
}
</script>

<style scoped>
    .top{
        width:100%;
        background:#00bcd4;
        position:fixed;
        top:0;
    }
    .top-tit{
        padding-top:2%;
    }
    .top-tit,.top-tit a{
        color:#fff;
        font-size:2rem;
        margin-left:.5rem;
    }
    .top-tit strong{
      margin-left:35%;
    }
    .top form{
        width:100%;
        box-sizing:border-box;
        padding:.5rem 1rem;
    }
    .top form input{
        width:100%;
        background:#fff;
        padding:.5rem 0;
        border-radius:3px;
    }
    .top form input::placeholder{
        text-align:center;
    }
    .city-con{
        margin-top:20%;
    }
    .city-tit{
        font-size:1.4rem;
        line-height:2;
        padding-left:1rem;
        background:#eee;
    }
    .city-now{
        background:#fff;
        padding:2% 0;
        border-top:1px solid #ccc;
        border-bottom:1px solid #ccc;
    }
    .city-now span{
        display:inline-block;
        border:1px solid #ccc;
        line-height:2;
        padding:0 10%;
        margin-left:1rem;
     }
     .hot-city ul{
         width:100%;
         display:flex;
         flex-wrap:wrap;
         background:#fff;
         box-sizing:border-box;
         padding: 1rem 0 0 1rem;
         border-top:1px solid #ccc;
         border-bottom:1px solid #ccc;
     }
     .hot-city ul li{
        float:left;
        border:1px solid #ccc;
        line-height:2;
        padding:0 10%;
        margin:0 1rem 1rem 0;
     }
     .all-tit{
         position:relative;
         top:0;
         left:0;
         font-size:1.4rem;
         line-height:2;
         padding-left:1rem;
         background:#eee;
     }
     .all-city ul {
         border-top:1px solid #ccc;
         background:#fff;
     }
     .all-city li{
          border-bottom:1px solid #ccc;
          padding:1rem 1rem;
     }
     .right{
         width:100%;
         position:fixed;
         left:95%;
         top:15%;
     }
     .right li{
         color:#00bcd4;
         margin-bottom:.3rem;
         cursor:pointer;
     }
</style>
