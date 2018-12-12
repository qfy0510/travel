<template>
    <div>
        <header>
          <div class='h-back'><span><</span></div>
           <div class="weui-search-bar" id="searchBar">
                <form class="weui-search-bar__form">
                    <div class="weui-search-bar__box">
                        <i class="weui-icon-search"></i>
                        <input type="search" class="weui-search-bar__input" id="searchInput" placeholder="输入城市、景点、游玩主题" required="">
                        <a href="javascript:" class="weui-icon-clear" id="searchClear"></a>
                    </div>
                </form>
            </div>
            <div class="h-right">
                <router-link to='/city' :title="city">
                   <span>{{city}}</span>
                </router-link> 
            </div>
        </header>
        <Banner></Banner>
        <Nav></Nav>
        <Hot></Hot>
        <Go></Go>
    </div>
</template>

<script>
import axios from 'axios'
import Banner from './home/Banner'
import Nav from './home/Nav'
import Hot from './home/HotReco'
import Go from './home/Go'
import {mapState} from 'vuex'  
export default {
  name: 'Home',
  components: { 
      Banner,Nav,Hot,Go
  },
  computed:{
      ...mapState(['city']) 
  }
}
</script>

<style>
@import '../assets/css/weui.min.css';
body{
    background:#eee;
}
header{
    width:100%;
    height:4.5rem;
    background:#00bcd4;
}
.h-back{
    float:left;
    margin:0 1%;
    line-height:4rem;
}
.h-back span{
    font-size:2.4rem;
    color:#fff;
}
.weui-search-bar{
    float:left;
    background:#00bcd4;
    width:78%;
    position:static;
}
.weui-search-bar__form{
    border-radius:.5rem;
    top:.3rem;
}
.weui-search-bar::after{
    border-bottom:none;
}
.h-right{
    float:left;
    width:15%;
    box-sizing:border-box; 
    line-height:4rem;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
}
.h-right span::after{
    display:inline-block;
    content:'';
    width:0;
    height:0;
    border-style: solid;
    border-width: .5rem .5rem 0 .5rem;
    border-color: #fff transparent transparent transparent;  
}
</style>
