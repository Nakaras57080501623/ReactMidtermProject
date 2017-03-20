'use strict';

console.clear();

var _uuid = uuid;
var v4 = _uuid.v4;

// localStorage Stuff

var loadState = function loadState() {
  try {
    var serializedState = localStorage.getItem('vue_state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

var saveState = function saveState(state) {
  try {
    var serializedState = JSON.stringify(state);
    localStorage.setItem('vue_state', serializedState);
  } catch (err) {
    console.error('Something went wrong: ' + err);
  }
};

var store = new Vuex.Store({
  strict: true,
  state: {
    todos: loadState() || [],
    filter: 'all'
  },
  mutations: {
    addTodo: function addTodo(state, action) {
      state.todos = [].concat(state.todos, [action.todo]);
    },
    toggleComplete: function toggleComplete(state, action) {
      state.todos.map(function (t, i) {
        if (action.todo.id === t.id) {
          state.todos[i].complete = !state.todos[i].complete;
        }
      });
      saveState(state.todos);
    },
    toggleEditing: function toggleEditing(state, action) {
      state.todos.map(function (t, i) {
        if (action.todo.id === t.id) {
          state.todos[i].editing = !state.todos[i].editing;
        }
      });
      saveState(state.todos);
    },
    updateTodo: function updateTodo(state, action) {
      state.todos.map(function (t, i) {
        if (action.todo.id === t.id) {
          state.todos[i].text = action.todo.text;
        }
      });
    },
    setFilter: function setFilter(state, action) {
      state.filter = action.filter;
    },
    deleteTodo: function deleteTodo(state, action) {
      state.todos.map(function (t, i) {
        if (action.todo.id === t.id) {
          state.todos = [].concat(state.todos.slice(0, i), state.todos.slice(i + 1));
        }
      });
    }
  },
  getters: {
    allTodos: function allTodos(state) {
      return state.todos;
    }
  }
});

new Vue({
  el: '#app',
  data: {
    currentTodo: {
      text: '',
      complete: false,
      id: v4(),
      editing: false
        }
  },


  store: store,
  computed: {
    filter: function filter() {
      return this.$store.state.filter;
    },
    filteredTodos: function filteredTodos() {
      switch (this.filter) {
        case 'all':
          return this.$store.state.todos;
        case 'complete':
          return this.$store.state.todos.filter(function (todo) {
            return todo.complete;
          });
        case 'incomplete':
          return this.$store.state.todos.filter(function (todo) {
            return !todo.complete;
          });
        default:
          return this.$store.state.todos;
      }
    }
  },
  methods: {
    getState: function getState() {
      console.log(store.state);
    },
  
    addTodo: function addTodo() {
      var _this = this;

      if (this.currentTodo.text.length > 0) {
        var promise = new Promise(function (resolve) {
          store.commit({ type: 'addTodo', todo: _this.currentTodo });
          resolve(store.todos);
        });
        promise.then(function (response) {
          _this.resetCurrentTodo();
        });
      }
    },

    toggleComplete: function toggleComplete(todo) {
      store.commit({ type: 'toggleComplete', todo: todo });
    },
    toggleEditing: function toggleEditing(todo) {
      var _this2 = this;

      store.commit({ type: 'toggleEditing', todo: todo });
      Vue.nextTick(function () {
        if (todo.editing) {
          _this2.$store.state.todos.map(function (t, i) {
            if (todo.id === t.id) {
              _this2.$refs.edit_input[i].focus();
            }
          });
        };
      });
    },


    updateTodo: function updateTodo(e) {
      var text = e.target.value;
      var id = e.target.id;
      store.commit({
        type: 'updateTodo',
        todo: {
          text: text,
          id: id
        }
      });
    },
    deleteTodo: function deleteTodo(todo) {
      store.commit({ type: 'deleteTodo', todo: todo });
    },
    resetCurrentTodo: function resetCurrentTodo() {
      this.currentTodo = {
        text: '',
        complete: false,
        id: v4(),
        editing: false
      };
    },
    setFilter: function setFilter(filter) {
      store.commit({ type: 'setFilter', filter: filter });
    }
  }


});

new Vue({
  el: '#appedit',
  data: {
    currentTodo: {
      text: '',
      complete: false,
      id: v4(),
      editing: false
        }
  },


  store: store,
  computed: {
    filter: function filter() {
      return this.$store.state.filter;
    },
    filteredTodos: function filteredTodos() {
      switch (this.filter) {
        case 'all':
          return this.$store.state.todos;
        case 'complete':
          return this.$store.state.todos.filter(function (todo) {
            return todo.complete;
          });
        case 'incomplete':
          return this.$store.state.todos.filter(function (todo) {
            return !todo.complete;
          });
        default:
          return this.$store.state.todos;
      }
    }
  },
  methods: {
    getState: function getState() {
      console.log(store.state);
    },
  
    addTodo: function addTodo() {
      var _this = this;

      if (this.currentTodo.text.length > 0) {
        var promise = new Promise(function (resolve) {
          store.commit({ type: 'addTodo', todo: _this.currentTodo });
          resolve(store.todos);
        });
        promise.then(function (response) {
          _this.resetCurrentTodo();
        });
      }
    },

    toggleComplete: function toggleComplete(todo) {
      store.commit({ type: 'toggleComplete', todo: todo });
    },
    toggleEditing: function toggleEditing(todo) {
      var _this2 = this;

      store.commit({ type: 'toggleEditing', todo: todo });
      Vue.nextTick(function () {
        if (todo.editing) {
          _this2.$store.state.todos.map(function (t, i) {
            if (todo.id === t.id) {
              _this2.$refs.edit_input[i].focus();
            }
          });
        };
      });
    },


    updateTodo: function updateTodo(e) {
      var text = e.target.value;
      var id = e.target.id;
      store.commit({
        type: 'updateTodo',
        todo: {
          text: text,
          id: id
        }
      });
    },
    deleteTodo: function deleteTodo(todo) {
      store.commit({ type: 'deleteTodo', todo: todo });
    },
    resetCurrentTodo: function resetCurrentTodo() {
      this.currentTodo = {
        text: '',
        complete: false,
        id: v4(),
        editing: false
      };
    },
    setFilter: function setFilter(filter) {
      store.commit({ type: 'setFilter', filter: filter });
    }
  }


});





store.watch(
// When the returned result changes...
function (state) {
  return state.todos;
},
// Run this callback
function (state) {
  console.log(state);
  saveState(state);
});

