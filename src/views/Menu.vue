<template>
  <div class="wrap">
    <div class="js" @click="toJS">原生JS</div>
    <div class="jquery">jQuery(不会)</div>
    <div class="vue" @click="toVue">Vue3.x</div>
  </div>
</template>

<script setup lang='ts' name='Menu'>
  import { useRouter } from 'vue-router'
  const router = useRouter()

  const toJS = () => {
    window.location.href = '/Js.html'
  }

  const toVue = () => {
    router.push('/vue3')
  }
</script>

<style scoped>
  .wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
  }

  .wrap > div {
    width: 200px;
    height: 100px;
    border-radius: 5px;
    color: white;
    line-height: 100px;
    text-align: center;
  }

  .wrap > div:hover {
    cursor: pointer;
    animation: hoverEffect 0.3s forwards;
  }

  @keyframes hoverEffect {
    to {
      width: 220px;
      height: 120px;
      border-radius: 5px;
      color: white;
      line-height: 120px;
      text-align: center;
      font-size: large;
    }
  }

  .js {
    background-color: rgb(238,198,62);
  }

  .jquery {
    margin: 0 10px;
    background-color: rgb(120,167,252);
  }

  .vue {
    background-color: rgb(129,188,143);
  }
</style>