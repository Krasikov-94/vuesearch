import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state: {
    userId: null,
    user: null,
    users: [],
    search: null,
    error: "",
  },
  mutations: {
    setUsers(state, user) {
      state.users.push(user);
      return (state.users = state.users.filter(
        (value, index, self) =>
          index === self.findIndex((t) => t.id === value.id),
      ));
    },
    updateMessage(state, message) {
      if (message !== "") {
        let setMessage = [...new Set(message.split(","))];
        state.search = setMessage;
      } else {
        state.search = [...new Set(message.split(","))];
      }
    },
    deleteItems(state) {
      state.search = null;
      state.users = [];
      state.user = [];
      state.userId = null;
      state.error = "";
    },
    clickUser(state, use) {
      state.userId = use;
      state.user = state.users.filter((el) => {
        return el.id === use;
      })[0];
    },
    setError(state, error) {
      state.error = error;
    },
    searchName(state, arr) {
      state.users = arr.filter((el) => {
        return el.username === state.search[0];
      });
    },
  },
  actions: {
    GET_USERS({ commit }, el) {
      if (!parseFloat(el)) {
        return axios
          .get(`https://jsonplaceholder.typicode.com/users/`, {})
          .then((user) => {
            return commit("searchName", user.data);
          })
          .catch((err) => {
            return commit("setError", "ничего не найдено ");
          });
      } else {
        return axios
          .get(`https://jsonplaceholder.typicode.com/users/${el}`, {})
          .then((user) => {
            return commit("setUsers", user.data);
          })
          .catch((err) => {
            return commit("setError", "ничего не найдено ");
          });
      }
    },
  },
  getters: {
    USERS(state) {
      return state.users;
    },
    SEARCH(state) {
      return state.search;
    },
  },
});

export default store;
