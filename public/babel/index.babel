console.clear();

const { v4 } = uuid;

// localStorage Stuff
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('vue_state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('vue_state', serializedState);
  } catch (err) {
    console.error(`Something went wrong: ${err}`);
  }
}

const store = new Vuex.Store({
  strict: true,
  state: {
    todos: loadState() || [],
    filter: 'all',
  },
  mutations: {
    addTodo(state, action) {
      state.todos = [
        ...state.todos,
        action.todo
      ];
    },
    toggleComplete(state, action) {
      state.todos.map((t, i) => {
        if (action.todo.id === t.id) {
          state.todos[i].complete = !state.todos[i].complete;
        }
      });
     saveState(state.todos);
    },
    toggleEditing(state, action) {
      state.todos.map((t, i) => {
        if (action.todo.id === t.id) {
          state.todos[i].editing = !state.todos[i].editing;
        }
      });
      saveState(state.todos);
    },
    updateTodo(state, action) {
      state.todos.map((t, i) => {
        if (action.todo.id === t.id) {
          state.todos[i].text = action.todo.text;
        }
      })
    },
    setFilter(state, action) {
      state.filter = action.filter;
    },
    deleteTodo(state, action) {
      state.todos.map((t, i) => {
        if (action.todo.id === t.id) {
          state.todos = [
            ...state.todos.slice(0, i),
            ...state.todos.slice(i + 1)
          ];
        }
      });
    }
  },
  getters: {
    allTodos(state) {
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
  store,
  computed: {
    filter() {
      return this.$store.state.filter;
    },
    filteredTodos() {
      switch (this.filter) {
        case 'all':
          return this.$store.state.todos;
        case 'complete':
          return this.$store.state.todos.filter((todo) => {
            return todo.complete;
          });
        case 'incomplete':
          return this.$store.state.todos.filter((todo) => {
            return !todo.complete;
          });
        default:
          return this.$store.state.todos;
      }
    }
  },
  methods: {
    getState() {
      console.log(store.state);
    },
    addTodo() {
      if (this.currentTodo.text.length > 0) {
        const promise = new Promise(resolve => {
          store.commit({type: 'addTodo', todo: this.currentTodo});
          resolve(store.todos);
        });
        promise.then(
          response => {
            this.resetCurrentTodo();
          }
        );        
      }
    },
    toggleComplete(todo) {
      store.commit({type: 'toggleComplete', todo});
    },
    toggleEditing(todo) {
      store.commit({type: 'toggleEditing', todo});
      Vue.nextTick(() => {
        if (todo.editing) {
          this.$store.state.todos.map((t, i) => {
            if (todo.id === t.id) {
              this.$refs.edit_input[i].focus();
            }
          });
        };
      });
    },
    updateTodo(e) {
      const text = e.target.value;
      const id = e.target.id;
      store.commit({
          type: 'updateTodo', 
          todo: {
            text,
            id
          }
      });
    },
    deleteTodo(todo) {
      store.commit({type: 'deleteTodo', todo});
    },
    resetCurrentTodo() {
      this.currentTodo = {
        text: '',
        complete: false,
        id: v4(),
        editing: false
      }
    },
    setFilter(filter) {
      store.commit({type: 'setFilter', filter});
    }
  }
});

store.watch(
  // When the returned result changes...
  (state) => state.todos,
  // Run this callback
  (state) => {
    console.log(state);
    saveState(state);
  }
)