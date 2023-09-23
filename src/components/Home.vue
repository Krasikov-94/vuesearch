<script setup>
import LeftTable from "./LeftTable.vue";
import RightTable from "./RightTable.vue";
</script>

<template>
  <div class="wrapper">
    <div class="left">
      <LeftTable />
    </div>
    <div class="right">
      <RightTable />
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  justify-content: space-between;
  height: 575px;
  width: auto;
  flex-shrink: 0;
  border-radius: 10px;
  background: #fdfdfd;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  margin: 0 50px;
}
.left {
  width: 300px;
}
.right {
  width: -webkit-fill-available;
}
</style>
