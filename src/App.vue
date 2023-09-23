<script setup>
import Home from "./components/Home.vue";
</script>

<template>
  <header>
    <div class="header_wrapper">
      <div>
        <p class="header_logo">Жилфонд</p>
      </div>
      <div>
        <p class="header_user">Пользователь</p>
      </div>
    </div>
  </header>
  <Home />
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap");
.header_wrapper {
  display: flex;
  justify-content: space-between;
  padding: 46px 50px;
}
.header_logo {
  color: #e31f24;
  font-family: Montserrat, serif;
  font-size: 32px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
}
.header_user {
  color: #333;
  font-family: Montserrat, serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
</style>
