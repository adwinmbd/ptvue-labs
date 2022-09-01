import AddTodo from './addTodo.js';
import ListTodos from './listTodos.js';
const { createApp } = window.PetiteVue;

createApp({
    AddTodo,
    ListTodos,
    init() {
        console.log('mounted')
    }
}).mount('#app')