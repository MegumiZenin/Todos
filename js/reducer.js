import Storage from "../storage.js";

const init = {
    todos: Storage.get(),
    filter: 'all',
    filters: {
        all: () => true,
        active: (todo) => !todo.completed,
        completed: (todo) => todo.completed
    },
    editIndex: null,
}

const actions = {
    add({todos},...args){
        todos.unshift({content: args, completed: false});
        Storage.set(todos)
    },
    delete({todos},index) {
        todos.splice(index, 1);
        Storage.set(todos)
    },
    check({todos},index) {
        todos[index].completed = !todos[index].completed;
        Storage.set(todos)
    },
    checkAll({todos}, checked) {
        todos.forEach(todo => todo.completed = checked);
        Storage.set(todos)
    },
    clearCompleted(state) {
        state.todos = state.todos.filter(todo => !todo.completed);
        Storage.set(state.todos)
    },
    setFilter(state, type) {
        state.filter = type;
    },
    startEdit(state, index) {
        state.editIndex = index;
    },
    endEdit(state, editIndex, value) {
        state.todos[editIndex].content = value;
        state.editIndex = null;
        Storage.set(todos)
    },
    cancelEdit(state) {
        state.editIndex = null;
    }

}

export default function reducer(state = init, action, ...args) {
    actions[action] && actions[action](state,...args);
    return state;
}