<template>
  <button class="home-button" @click="toHome">
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 50 50">
      <path d="M35,10 L15,25 L35,40" stroke="white" stroke-width="4" fill="none" />
    </svg>
    <span class="text">返回首页</span>
  </button>
</template>

<script setup lang='ts' name='JSbtn'>

  import { useRouter} from 'vue-router'
  const router = useRouter();

  const toHome = () => {
    router.push('/');
  }

</script>

<style scoped>
  .home-button {
    position: fixed;
    top: 50px;
    right: -80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100px;
    height: 30px;
    background-color: rgb(122,183,135);
    border-radius: 20px;
    color: white;
    transition: all 0.5s;
  }

  svg {
    margin: 0 5px;
  }

  .home-button:hover {
    cursor: pointer;
    right: -20px;
  }
</style>