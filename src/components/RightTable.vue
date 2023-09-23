<script>
export default {
  data() {
    return {
      user: null,
    };
  },
  computed: {
    infoSearch: function () {
      return this.$store.state.userId;
    },
    infoUsers: function () {
      return this.$store.state.user;
    },
  },
  watch: {},
};
</script>

<template>
  <div class="wrapper_right">
    <div class="user" v-if="infoSearch !== null">
      <div>
        <img src="../assets/large.png" alt="large" />
      </div>
      <div class="right">
        <p class="user_name">{{ infoUsers?.name }}</p>
        <p class="user_email">
          email:<span>{{ infoUsers?.email }}</span>
        </p>
        <p class="user_phone">
          phone:<span>{{ infoUsers?.phone }}</span>
        </p>
        <p>О себе:</p>
        <p class="user_descr">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
    <p v-if="!infoUsers">Выберите сотрудника, чтобы посмотреть его профиль</p>
  </div>
</template>

<style scoped lang="scss">
.wrapper_right {
  border-left: 1px solid #e0e0e0;
  position: relative;
  height: 575px;
  flex-shrink: 0;
  border-radius: 0 10px 10px 0;
  background: #fff;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    color: #76787d;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .right {
    padding-left: 61px;
  }

  .user {
    display: flex;
    position: absolute;
    top: 30px;
    left: 21px;

    .user_name {
      color: #000;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 140%;
      padding-bottom: 10px;
    }

    .user_email p {
      color: #333;
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: 140%;
      padding-bottom: 10px;
    }

    .user_email span {
      color: #76787d;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 140%;
    }

    .user_phone p {
      color: #333;
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: 140%;
      padding-bottom: 10px;
    }

    .user_phone span {
      color: #76787d;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 140%;
    }

    .user_descr {
      color: #76787d;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      padding-bottom: 10px;
      padding-right: 80px;
    }
  }
}
</style>
