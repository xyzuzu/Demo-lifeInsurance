<template>
  <div id="app">
      <router-view/>
      <remind/>
  </div>
</template>

<script>
    import bus from './assets/js/bus';
    export default {
        name: 'App',
        mounted(){
            bus.$emit('loading');
        }
    }
    function setHtmlFontSize(){
        var doc = document;
        var win = doc.documentElement;
        var winWidth = win.clientWidth;
        var size = (winWidth / 750) * 100;
        win.style.fontSize = (size < 100 ? size : 100) + 'px';
    }
    window.onresize = function(){
        setHtmlFontSize();
    }
    setHtmlFontSize();
    /**
    * for ios Ban zoom
    */
    document.addEventListener('touchstart', function (event) {
        if (event.touches.length > 1) {
            event.preventDefault();
        }
    });
    var lastTouchEnd=0;
    document.addEventListener('touchend',function (event) {
        var now=(new Date()).getTime();
        if(now-lastTouchEnd<=300){
            event.preventDefault();
        }
        lastTouchEnd=now;
    },false)
</script>

<style>

</style>
