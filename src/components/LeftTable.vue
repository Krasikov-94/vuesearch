<script>
import { mapState } from "vuex";
import MiniCard from "@/components/MiniCard.vue";

export default {
  components: { MiniCard },
  data() {
    return {
      searchText: null,
      debounce: null,
    };
  },
  computed: {
    ...mapState({
      search: (state) => state.search,
      users: (state) => state.users,
      error: (state) => state.error,
    }),
  },
  methods: {
    handleInput(val) {
      clearTimeout(this.debounce);
      this.debounce = setTimeout(() => {
        this.searchText = val.target.value;
        this.$store.commit("updateMessage", this.searchText);
      }, 2000);
    },
    fetchUsers() {
      if (this.search.length > 0) {
        Promise.allSettled(
          this.search.map((el) => {
            return this.$store.dispatch("GET_USERS", el);
          }),
        );
      }
    },
    useUser(event) {
      this.$store.commit("clickUser", event);
    },
  },
  watch: {
    searchText() {
      if (this.searchText === "" || this.search === "") {
        this.$store.commit("updateMessage", "");
        this.$store.commit("deleteItems");
      }
      if (
        (this.search !== null && this.search !== "") ||
        parseFloat(this.searchText)
      ) {
        this.fetchUsers();
      }
    },
  },
};
</script>

<template>
  <div class="search_container">
    <div>
      <p class="search_people">Поиск сотрудников</p>
      <form @submit.prevent>
        <input
          @input="handleInput"
          v-bind:value="searchText"
          class="input"
          placeholder="Введите Id или имя"
        />
      </form>
      <p class="search_result">Результаты</p>
      <p
        v-if="searchText === null || searchText === ''"
        class="search_start_search"
      >
        начните поиск
      </p>
      <p
        v-if="error.length > 1 && searchText > 0 && users.length === 0"
        class="error"
      >
        ничего не найдено
      </p>
      <div v-if="this.searchText !== ''">
        <mini-card
          :useUser="useUser"
          v-for="user in users"
          :user="user"
          :key="user.id"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.search_container {
  padding-left: 23px;
  padding-right: 31px;

  input {
    display: flex;
    width: 240px;
    height: 46px;
    padding: 16px;
    align-items: center;
    gap: 16px;
    flex-shrink: 0;
    border-radius: 8px;
    border: 1.5px solid var(--all-colors-gray-gray-200, #e9ecef);
    background: var(--all-colors-black-white-white, #fff);

    ::placeholder {
      color: #76787d;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }

  .search_people {
    color: #333;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
    margin: 27px 0 22px 0;
  }

  .search_result {
    color: #333;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
    margin: 22px 0 10px 0;
  }

  .search_start_search {
    color: #76787d;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .active {
    background: #e0e0e0;
  }

  .error {
    color: #76787d;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
}
</style>
