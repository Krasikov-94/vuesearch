<script>
import { mapState } from "vuex";

export default {
  props: {
    useUser: {
      type: Function,
    },
    user: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapState({
      userId: (state) => state.userId,
    }),
  },
};
</script>

<template>
  <div @click.stop="useUser(user.id)" class="card">
    <div>
      <img src="../assets/small.png" alt="img" />
    </div>
    <div :class="user.id === userId ? 'card-active' : ''">
      <p class="card_name">{{ user.name }}</p>
      <p class="card_email">{{ user.email }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  margin-bottom: 18px;
  display: flex;
  align-items: center;
  width: 240px;
  height: 70px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);

  .card-active {
    border-radius: 0px 10px 10px 0px;
    background: #e0e0e0;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: center;
  }

  .card_name {
    padding-left: 10px;
    color: #333;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .card_email {
    padding-left: 10px;
    color: #76787d;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
}
</style>
