<template>
  <Vuebtn/>
  <div class="wrap">
    <div class="left">
      <ul>
        <li v-for="(item, index) in data" :key="index"
            @mouseenter="stopCarousel(); activeIndex = index"
            @mouseleave="startCarousel()">
          {{ item }}
        </li>
      </ul>
    </div>
    <div class="right">{{ data[activeIndex] }}</div>
  </div>
</template>

<script setup lang='ts'>
  import { ref, reactive, onMounted, onUnmounted } from 'vue';
  import {Person} from '../config/data'
  import Vuebtn from '../Components/Vuebtn.vue'

  let data = reactive(Person);
  let activeIndex = ref(0);
  let timer:any = null;

  const startCarousel = () => {
    timer = setInterval(() => {
      activeIndex.value = (activeIndex.value + 1) % data.length;
    }, 1000);
  };

  const stopCarousel = () => {
    clearInterval(timer);
  };

  onMounted(startCarousel);
  onUnmounted(stopCarousel);
</script>

<style scoped>
  .wrap,
  .left,
  .right{
    border: 2px solid #eee;
  }

  .wrap {
    width: 800px;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .left {
    width: 250px;
    height: 450px;
    margin-right: 50px;
  }

  .right {
    width: 450px;
    height: 450px;
  }

  ul {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  li {
    position: relative;
    display: flex;
    align-items: center;
    width: 175px;
    margin: 10px 0;
    padding-bottom: 10px;
    border-bottom: 2px solid #eee;
  }

  li:hover {
    font-size: 20px;
    font-weight: bold;
  }

  .right-arrow {
    position: absolute;
    opacity: 0;
    right: 0;
    bottom:5px;
  }

  li:hover .right-arrow {
    opacity: 1;
  }

  .right {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
  }
</style>