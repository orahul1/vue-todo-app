import axios from 'axios';

//Vuex uses a single state tree - that is, this single object contains all your 
//application level state and serves as the "single source of truth". 
//This also means usually you will have only one store for each application. 
//A single state tree makes it straightforward to locate a specific piece of state, 
//and allows us to easily take snapshots of the current app state for debugging purposes.
const state = {
  todos: []
};


//Vuex allows us to define "getters" in the store. You can think of them as computed properties for stores.
//Like computed properties, a getter's result is cached based on its dependencies, 
//and will only re-evaluate when some of its dependencies have changed.
const getters = {
  allTodos: (state) => state.todos
};


//Actions are similar to mutations, the differences being that:
//1.Instead of mutating the state, actions commit mutations.
//2.Actions can contain arbitrary asynchronous operations.
const actions = {
  async fetchTodos({
    commit
  }) {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/todos'
    );
    commit('setTodos', response.data);
  },

  async addTodo({
    commit
  }, title) {
    const response = await axios.post(
      'https://jsonplaceholder.typicode.com/todos', {
        title,
        completed: false
      });

    commit('newTodo', response.data);
  },

  async deleteTodo({
    commit
  }, id) {
    await axios.delete(
      `https://jsonplaceholder.typicode.com/todos/${id}`);

    commit('removeTodo', id);
  },

  async filterTodos({
    commit
  }, e) {
    //get selected number
    const limit = parseInt(e.target.options[e.target.options.selectedIndex].innerText);

    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/todos?_limit=${limit}`
    );

    commit('setTodos', response.data);
  },

  async updateTodo({
    commit
  }, updTodo) {
    const response = await axios.put(
      `https://jsonplaceholder.typicode.com/todos/${updTodo.id}`,updTodo
    );

    commit('updateTodo', response.data)
  }
};


//The only way to actually change state in a Vuex store is by committing a mutation. 
//Vuex mutations are very similar to events: each mutation has a string type and a handler. 
//The handler function is where we perform actual state modifications, and it will receive 
//the state as the first argument
const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
  newTodo: (state, todo) => state.todos.unshift(todo),
  removeTodo: (state, id) => state.todos = state.todos.filter(todo => todo.id != id),
  updateTodo: (state, updTodo) => {
    const index = state.todos.findIndex(todo => todo.id === updTodo.id);
    if(index != -1){
      state.todos.splice(index, 1 , updTodo);
    }
  }
};


export default {
  state,
  getters,
  actions,
  mutations
}